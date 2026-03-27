export async function onRequest(context) {
  const { text } = context.params;
  const code = parseInt(text, 10);
  return new Response((code >= 200 && code < 300 ? 'true' : 'false') + "\n", { headers: { 'Content-Type': 'text/plain' } });
}
