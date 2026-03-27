export async function onRequest(context) {
  const { text } = context.params;
  if (!/^[01]+$/.test(text)) return new Response('Invalid binary number\n', { status: 400, headers: { 'Content-Type': 'text/plain' } });
  return new Response(parseInt(text, 2) + "\n", { headers: { 'Content-Type': 'text/plain' } });
}
