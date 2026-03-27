export async function onRequest(context) {
  const { text } = context.params;
  const n = parseInt(text, 10);
  if (isNaN(n)) return new Response('Invalid number\n', { status: 400, headers: { 'Content-Type': 'text/plain' } });
  return new Response((n % 2 === 0 ? 'true' : 'false') + "\n", { headers: { 'Content-Type': 'text/plain' } });
}
