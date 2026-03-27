export async function onRequest(context) {
  const { text } = context.params;
  const items = text.split(',').map(s => s.trim().toUpperCase());
  return new Response(items.join(', ') + "\n", { headers: { 'Content-Type': 'text/plain' } });
}
