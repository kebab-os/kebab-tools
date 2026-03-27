export async function onRequest(context) {
  const { text } = context.params;
  if (!/^[0-7]+$/.test(text)) return new Response('Invalid octal number\n', { status: 400, headers: { 'Content-Type': 'text/plain' } });
  return new Response(parseInt(text, 8).toString(2) + "\n", { headers: { 'Content-Type': 'text/plain' } });
}
