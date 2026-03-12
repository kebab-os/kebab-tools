export async function onRequest(context) {
  const { text } = context.params;
  const slug = text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
  return new Response("k| " + slug + "\n", {
    headers: { 'Content-Type': 'text/plain' }
  });
}
