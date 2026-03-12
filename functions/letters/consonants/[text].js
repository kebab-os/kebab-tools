export async function onRequest(context) {
  const { text } = context.params;
  const count = (text.match(/[bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ]/g) || []).length;
  return new Response("k| " + count + "\n", {
    headers: { 'Content-Type': 'text/plain' }
  });
}
