export async function onRequest(context) {
  const { text } = context.params;
  const items = text.split(',').filter(Boolean);
  return new Response(items.length + "\n", { headers: { 'Content-Type': 'text/plain' } });
}
