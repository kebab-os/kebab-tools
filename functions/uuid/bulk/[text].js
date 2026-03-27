export async function onRequest(context) {
  const { text } = context.params;
  const n = parseInt(text, 10);
  if (isNaN(n) || n < 1 || n > 100) {
    return new Response('Provide a number between 1 and 100\n', { status: 400, headers: { 'Content-Type': 'text/plain' } });
  }
  const uuids = Array.from({ length: n }, () => crypto.randomUUID());
  return new Response(uuids.join('\n') + "\n", { headers: { 'Content-Type': 'text/plain' } });
}
