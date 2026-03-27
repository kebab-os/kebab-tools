export async function onRequest(context) {
  const { text } = context.params;
  const result = text.replace(/[^a-zA-Z0-9]+/g, '.').replace(/([a-z])([A-Z])/g, '$1.$2').toLowerCase();
  return new Response(result + "\n", { headers: { 'Content-Type': 'text/plain' } });
}
