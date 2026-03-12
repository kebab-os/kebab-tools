export async function onRequest(context) {
  const { text } = context.params;
  return new Response("k| " + text.trim() + "\n", {
    headers: { 'Content-Type': 'text/plain' }
  });
}
