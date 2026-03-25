export async function onRequest(context) {
  const { text } = context.params;
  const hex = text.replace(/^#/, '');

  if (!/^[0-9a-fA-F]{6}$/.test(hex)) {
    return new Response('Invalid hex color. Use 6-digit hex (e.g. ff5733)\n', {
      status: 400,
      headers: { 'Content-Type': 'text/plain' }
    });
  }

  const r = 255 - parseInt(hex.slice(0, 2), 16);
  const g = 255 - parseInt(hex.slice(2, 4), 16);
  const b = 255 - parseInt(hex.slice(4, 6), 16);
  const complementHex = '#' + [r, g, b].map(n => n.toString(16).padStart(2, '0')).join('');

  return new Response(complementHex + "\n", {
    headers: { 'Content-Type': 'text/plain' }
  });
}
