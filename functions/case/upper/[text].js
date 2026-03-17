export async function onRequest(context) {
  const { text } = context.params;
  return new Response(text.toUpperCase() + "\n", {
    headers: { 'Content-Type': 'text/plain' }
  });
}
