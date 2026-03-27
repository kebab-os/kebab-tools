export async function onRequest(context) {
  const { text } = context.params;
  const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
  const valid = uuidRegex.test(text) ? 'true' : 'false';
  return new Response(valid + "\n", { headers: { 'Content-Type': 'text/plain' } });
}
