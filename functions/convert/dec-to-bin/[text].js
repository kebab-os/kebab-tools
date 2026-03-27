export async function onRequest(context) {
  const { text } = context.params;
  const n = parseInt(text, 10);
  if (isNaN(n)) return new Response('Invalid decimal number\n', { status: 400, headers: { 'Content-Type': 'text/plain' } });
  return new Response(n.toString(2) + "\n", { headers: { 'Content-Type': 'text/plain' } });
}
