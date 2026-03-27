export async function onRequest(context) {
  const { text } = context.params;
  const parts = text.split(',').map(Number);
  if (parts.length !== 3 || parts.some(isNaN)) {
    return new Response('Usage: hsl-to-hex/h,s,l (h:0-360, s:0-100, l:0-100)\n', { status: 400, headers: { 'Content-Type': 'text/plain' } });
  }
  let [h, s, l] = [parts[0] / 360, parts[1] / 100, parts[2] / 100];
  let r, g, b;
  if (s === 0) { r = g = b = l; }
  else {
    const hue2rgb = (p, q, t) => {
      if (t < 0) t += 1; if (t > 1) t -= 1;
      if (t < 1/6) return p + (q - p) * 6 * t;
      if (t < 1/2) return q;
      if (t < 2/3) return p + (q - p) * (2/3 - t) * 6;
      return p;
    };
    const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    const p = 2 * l - q;
    r = hue2rgb(p, q, h + 1/3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1/3);
  }
  const toHex = v => Math.round(v * 255).toString(16).padStart(2, '0');
  return new Response('#' + toHex(r) + toHex(g) + toHex(b) + "\n", { headers: { 'Content-Type': 'text/plain' } });
}
