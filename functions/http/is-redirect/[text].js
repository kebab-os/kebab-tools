export async function onRequest(context) {
  const { text } = context.params;
  const code = parseInt(text, 10);
  return new Response((code >= 300 && code < 400 ? 'true' : 'false') + "\n", { headers: { 'Content-Type': 'text/plain' } });
}
