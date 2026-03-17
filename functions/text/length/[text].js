export async function onRequest(context) {
  const { text } = context.params;
  return new Response(text.length + "\n", {
    headers: { 'Content-Type': 'text/plain' }
  });
}
