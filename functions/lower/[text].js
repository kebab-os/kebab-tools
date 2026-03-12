export async function onRequest(context) {
  const { text } = context.params;
  return new Response("k| " + text.toLowerCase() + "\n", {
    headers: { 'Content-Type': 'text/plain' }
  });
}
