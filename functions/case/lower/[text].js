export async function onRequest(context) {
  const { text } = context.params;
  return new Response(text.toLowerCase() + "\n", {
    headers: { 'Content-Type': 'text/plain' }
  });
}
