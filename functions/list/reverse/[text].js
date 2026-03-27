export async function onRequest(context) {
  const { text } = context.params;
  const items = text.split(',').map(s => s.trim());
  return new Response(items.reverse().join(', ') + "\n", { headers: { 'Content-Type': 'text/plain' } });
}
