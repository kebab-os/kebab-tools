export async function onRequest(context) {
  const { text } = context.params;
  const parts = text.split(',');
  const last = parts[parts.length - 1];
  return new Response(last + "\n", {
    headers: { 'Content-Type': 'text/plain' }
  });
}
