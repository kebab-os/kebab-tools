export async function onRequest(context) {
  const { text } = context.params;
  const items = text.split(',').map(s => s.trim());
  const unique = [...new Set(items)];
  return new Response(unique.join(', ') + "\n", { headers: { 'Content-Type': 'text/plain' } });
}
