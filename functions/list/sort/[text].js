export async function onRequest(context) {
  const { text } = context.params;
  const items = text.split(',').map(s => s.trim());
  const sorted = [...items].sort();
  return new Response(sorted.join(', ') + "\n", { headers: { 'Content-Type': 'text/plain' } });
}
