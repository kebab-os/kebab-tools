export async function onRequest(context) {
  const { text } = context.params;
  const escaped = text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  return new Response(escaped + "\n", {
    headers: { 'Content-Type': 'text/plain' }
  });
}
