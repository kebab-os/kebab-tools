export async function onRequest(context) {
  const { text } = context.params;
  const hex = text.replace(/^#/, '');

  if (!/^[0-9a-fA-F]{6}$/.test(hex)) {
    return new Response('Invalid hex color. Use 6-digit hex (e.g. ff5733)\n', {
      status: 400,
      headers: { 'Content-Type': 'text/plain' }
    });
  }

  const r = parseInt(hex.slice(0, 2), 16) / 255;
  const g = parseInt(hex.slice(2, 4), 16) / 255;
  const b = parseInt(hex.slice(4, 6), 16) / 255;

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const delta = max - min;

  let h = 0;
  if (delta !== 0) {
    if (max === r) h = ((g - b) / delta) % 6;
    else if (max === g) h = (b - r) / delta + 2;
    else h = (r - g) / delta + 4;
    h = Math.round(h * 60);
    if (h < 0) h += 360;
  }

  const l = (max + min) / 2;
  const s = delta === 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));

  return new Response(`hsl(${h}, ${Math.round(s * 100)}%, ${Math.round(l * 100)}%)\n`, {
    headers: { 'Content-Type': 'text/plain' }
  });
}
