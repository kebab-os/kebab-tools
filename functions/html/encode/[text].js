export async function onRequest(context) {
  const { text } = context.params;
  const encoded = text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
  return new Response(encoded + "\n", { headers: { 'Content-Type': 'text/plain' } });
}
