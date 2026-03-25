export async function onRequest(context) {
  const { text } = context.params;
  return new Response(encodeURIComponent(text) + "\n", {
    headers: { 'Content-Type': 'text/plain' }
  });
}
