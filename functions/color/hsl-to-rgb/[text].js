export async function onRequest(context) {
  const { text } = context.params;
  const parts = text.split(',').map(s => parseFloat(s.trim()));

  if (parts.length !== 3 || parts.some(isNaN)) {
    return new Response('Invalid input. Use format: h,s,l (e.g. 9,100,60)\n', {
      status: 400,
      headers: { 'Content-Type': 'text/plain' }
    });
  }

  const [h, s, l] = [parts[0], parts[1] / 100, parts[2] / 100];
  const c = (1 - Math.abs(2 * l - 1)) * s;
  const x = c * (1 - Math.abs((h / 60) % 2 - 1));
  const m = l - c / 2;

  let r = 0, g = 0, b = 0;
  if (h < 60) { r = c; g = x; }
  else if (h < 120) { r = x; g = c; }
  else if (h < 180) { g = c; b = x; }
  else if (h < 240) { g = x; b = c; }
  else if (h < 300) { r = x; b = c; }
  else { r = c; b = x; }

  const R = Math.round((r + m) * 255);
  const G = Math.round((g + m) * 255);
  const B = Math.round((b + m) * 255);

  return new Response(`rgb(${R}, ${G}, ${B})\n`, {
    headers: { 'Content-Type': 'text/plain' }
  });
}
