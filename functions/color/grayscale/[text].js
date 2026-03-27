export async function onRequest(context) {
  const { text } = context.params;
  const hex = text.replace(/^#/, '');
  if (!/^[0-9a-fA-F]{6}$|^[0-9a-fA-F]{3}$/.test(hex)) {
    return new Response('Invalid hex color\n', { status: 400, headers: { 'Content-Type': 'text/plain' } });
  }
  const full = hex.length === 3 ? hex.split('').map(c => c+c).join('') : hex;
  const r = parseInt(full.slice(0,2), 16);
  const g = parseInt(full.slice(2,4), 16);
  const b = parseInt(full.slice(4,6), 16);
  const gray = Math.round(0.299 * r + 0.587 * g + 0.114 * b);
  const grayHex = gray.toString(16).padStart(2, '0');
  return new Response('#' + grayHex + grayHex + grayHex + "\n", { headers: { 'Content-Type': 'text/plain' } });
}
