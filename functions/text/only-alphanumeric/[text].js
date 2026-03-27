export async function onRequest(context) {
  const { text } = context.params;
  const result = text.replace(/[^a-zA-Z0-9\s]/g, '');
  return new Response(result + "\n", { headers: { 'Content-Type': 'text/plain' } });
}
