export async function onRequest(context) {
  const { text } = context.params;
  const hex = text.replace(/^#/, '');
  if (!/^[0-9a-fA-F]{6}$|^[0-9a-fA-F]{3}$/.test(hex)) {
    return new Response('Invalid hex color\n', { status: 400, headers: { 'Content-Type': 'text/plain' } });
  }
  const full = hex.length === 3 ? hex.split('').map(c => c+c).join('') : hex;
  const inv = (0xFFFFFF - parseInt(full, 16)).toString(16).padStart(6, '0');
  return new Response('#' + inv + "\n", { headers: { 'Content-Type': 'text/plain' } });
}
