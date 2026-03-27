export async function onRequest(context) {
  const { text } = context.params;
  const ts = parseInt(text, 10);
  if (isNaN(ts)) return new Response('Invalid Unix timestamp\n', { status: 400, headers: { 'Content-Type': 'text/plain' } });
  return new Response(new Date(ts * 1000).toISOString() + "\n", { headers: { 'Content-Type': 'text/plain' } });
}
