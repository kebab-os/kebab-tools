export async function onRequest(context) {
  const { text } = context.params;
  const result = text.replace(/([a-z])([A-Z])/g, '$1_$2').replace(/[^a-zA-Z0-9]+/g, '_').toUpperCase().replace(/^_+|_+$/g, '');
  return new Response(result + "\n", { headers: { 'Content-Type': 'text/plain' } });
}
