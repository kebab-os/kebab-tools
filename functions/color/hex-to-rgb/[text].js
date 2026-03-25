export async function onRequest(context) {
  const { text } = context.params;
  const hex = text.replace(/^#/, '');

  if (!/^[0-9a-fA-F]{3}$|^[0-9a-fA-F]{6}$/.test(hex)) {
    return new Response('Invalid hex color\n', { status: 400, headers: { 'Content-Type': 'text/plain' } });
  }

  let r, g, b;
  if (hex.length === 3) {
    r = parseInt(hex[0] + hex[0], 16);
    g = parseInt(hex[1] + hex[1], 16);
    b = parseInt(hex[2] + hex[2], 16);
  } else {
    r = parseInt(hex.slice(0, 2), 16);
    g = parseInt(hex.slice(2, 4), 16);
    b = parseInt(hex.slice(4, 6), 16);
  }

  return new Response(`rgb(${r}, ${g}, ${b})\n`, {
    headers: { 'Content-Type': 'text/plain' }
  });
}
