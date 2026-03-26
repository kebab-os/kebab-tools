export async function onRequest(context) {
  const { text } = context.params;
  const ipv4 = /^(\d{1,3}\.){3}\d{1,3}$/.test(text);
  if (!ipv4) {
    return new Response('Invalid IPv4 address\n', { status: 400, headers: { 'Content-Type': 'text/plain' } });
  }
  const parts = text.split('.').map(Number);
  if (parts.some(p => p < 0 || p > 255)) {
    return new Response('Invalid IPv4 address\n', { status: 400, headers: { 'Content-Type': 'text/plain' } });
  }
  const [a, b] = parts;
  const isPrivate =
    a === 10 ||
    (a === 172 && b >= 16 && b <= 31) ||
    (a === 192 && b === 168) ||
    a === 127;
  return new Response((isPrivate ? 'true' : 'false') + "\n", {
    headers: { 'Content-Type': 'text/plain' }
  });
}
