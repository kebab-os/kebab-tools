export async function onRequest(context) {
  const { text } = context.params;
  const stripped = text.replace(/<[^>]*>/g, '');
  return new Response(stripped + "\n", { headers: { 'Content-Type': 'text/plain' } });
}
