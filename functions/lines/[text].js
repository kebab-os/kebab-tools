export async function onRequest(context) {
  const { text } = context.params;
  const count = text.split(/\r\n|\r|\n/).length;
  return new Response("k| " + count + "\n", {
    headers: { 'Content-Type': 'text/plain' }
  });
}
