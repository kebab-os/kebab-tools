export async function onRequest(context) {
  const { text } = context.params;
  const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-([1-5])[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
  const match = text.match(uuidRegex);
  if (!match) {
    return new Response('Invalid UUID\n', { status: 400, headers: { 'Content-Type': 'text/plain' } });
  }
  return new Response(match[1] + "\n", { headers: { 'Content-Type': 'text/plain' } });
}
