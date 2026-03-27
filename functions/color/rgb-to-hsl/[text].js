export async function onRequest(context) {
  const { text } = context.params;
  const parts = text.split(',').map(Number);
  if (parts.length !== 3 || parts.some(isNaN)) {
    return new Response('Usage: rgb-to-hsl/r,g,b (0-255)\n', { status: 400, headers: { 'Content-Type': 'text/plain' } });
  }
  let [r, g, b] = parts.map(v => v / 255);
  const max = Math.max(r, g, b), min = Math.min(r, g, b);
  let h = 0, s = 0, l = (max + min) / 2;
  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r: h = ((g - b) / d + (g < b ? 6 : 0)) / 6; break;
      case g: h = ((b - r) / d + 2) / 6; break;
      case b: h = ((r - g) / d + 4) / 6; break;
    }
  }
  return new Response(`hsl(${Math.round(h * 360)}, ${Math.round(s * 100)}%, ${Math.round(l * 100)}%)\n`, {
    headers: { 'Content-Type': 'text/plain' }
  });
}
