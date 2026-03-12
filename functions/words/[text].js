export async function onRequest(context) {
  const { text } = context.params;
  const count = text.trim().split(/\s+/).filter(w => w.length > 0).length;
  return new Response("k| " + count + "\n", {
    headers: { 'Content-Type': 'text/plain' }
  });
}
