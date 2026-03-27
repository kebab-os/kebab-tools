export async function onRequest(context) {
  const { text } = context.params;
  const hex = text.replace(/^#/, '');
  if (!/^[0-9a-fA-F]{3}$|^[0-9a-fA-F]{6}$/.test(hex)) {
    return new Response('Invalid hex color\n', { status: 400, headers: { 'Content-Type': 'text/plain' } });
  }
  let r, g, b;
  if (hex.length === 3) {
    r = parseInt(hex[0]+hex[0], 16) / 255;
    g = parseInt(hex[1]+hex[1], 16) / 255;
    b = parseInt(hex[2]+hex[2], 16) / 255;
  } else {
    r = parseInt(hex.slice(0,2), 16) / 255;
    g = parseInt(hex.slice(2,4), 16) / 255;
    b = parseInt(hex.slice(4,6), 16) / 255;
  }
  const max = Math.max(r, g, b), min = Math.min(r, g, b), d = max - min;
  let h = 0, s = max === 0 ? 0 : d / max, v = max;
  if (max !== min) {
    switch (max) {
      case r: h = ((g - b) / d + (g < b ? 6 : 0)) / 6; break;
      case g: h = ((b - r) / d + 2) / 6; break;
      case b: h = ((r - g) / d + 4) / 6; break;
    }
  }
  return new Response(`hsv(${Math.round(h*360)}, ${Math.round(s*100)}%, ${Math.round(v*100)}%)\n`, {
    headers: { 'Content-Type': 'text/plain' }
  });
}
