export async function onRequest(context) {
  const { text } = context.params;
  const n = parseFloat(text);
  if (isNaN(n)) {
    return new Response('Invalid number\n', { status: 400, headers: { 'Content-Type': 'text/plain' } });
  }
  return new Response(n.toLocaleString('en-US') + "\n", { headers: { 'Content-Type': 'text/plain' } });
}
