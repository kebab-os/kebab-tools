export async function onRequest(context) {
  const { text } = context.params;
  const parts = text.split(',');
  const last = parts[parts.length - 1];
  return new Response("k| " + last + "\n", {
    headers: { 'Content-Type': 'text/plain' }
  });
}
