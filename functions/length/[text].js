// length/[text].js
export async function onRequest(context) {
  const { text } = context.params;
  return new Response("k| " + text.length + "\n", {
    headers: { 'Content-Type': 'text/plain' }
  });
}
