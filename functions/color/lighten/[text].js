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
  const r = Math.min(255, Math.round(parseInt(hex.slice(0, 2), 16) + (255 - parseInt(hex.slice(0, 2), 16)) * factor));
  const g = Math.min(255, Math.round(parseInt(hex.slice(2, 4), 16) + (255 - parseInt(hex.slice(2, 4), 16)) * factor));
  const b = Math.min(255, Math.round(parseInt(hex.slice(4, 6), 16) + (255 - parseInt(hex.slice(4, 6), 16)) * factor));
  const result = '#' + [r, g, b].map(n => n.toString(16).padStart(2, '0')).join('');

  return new Response(result + "\n", {
    headers: { 'Content-Type': 'text/plain' }
  });
}
