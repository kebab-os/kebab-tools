export async function onRequest(context) {
  const { text } = context.params;
  const parts = text.split('.').map(Number);
  if (parts.length !== 4 || parts.some(p => isNaN(p) || p < 0 || p > 255)) {
    return new Response('Invalid IPv4 address\n', { status: 400, headers: { 'Content-Type': 'text/plain' } });
  }
  const int = parts.reduce((acc, p) => (acc * 256) + p, 0);
  return new Response(int + "\n", { headers: { 'Content-Type': 'text/plain' } });
}
