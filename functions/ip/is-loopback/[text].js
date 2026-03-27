export async function onRequest(context) {
  const { text } = context.params;
  const isLoopback = /^127\./.test(text) || text === '::1';
  return new Response((isLoopback ? 'true' : 'false') + "\n", { headers: { 'Content-Type': 'text/plain' } });
}
