export async function onRequest(context) {
  const { text } = context.params;
  const [hexRaw, amountRaw] = text.split(',');
  const hex = (hexRaw || '').replace(/^#/, '');
  const amount = parseFloat(amountRaw) || 10;

  if (!/^[0-9a-fA-F]{6}$/.test(hex)) {
    return new Response('Invalid input. Use format: rrggbb,amount (e.g. ff5733,20)\n', {
      status: 400,
      headers: { 'Content-Type': 'text/plain' }
    });
  }

  const factor = amount / 100;
  const r = Math.max(0, Math.round(parseInt(hex.slice(0, 2), 16) * (1 - factor)));
  const g = Math.max(0, Math.round(parseInt(hex.slice(2, 4), 16) * (1 - factor)));
  const b = Math.max(0, Math.round(parseInt(hex.slice(4, 6), 16) * (1 - factor)));
  const result = '#' + [r, g, b].map(n => n.toString(16).padStart(2, '0')).join('');

  return new Response(result + "\n", {
    headers: { 'Content-Type': 'text/plain' }
  });
}
