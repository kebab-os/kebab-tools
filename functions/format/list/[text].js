export async function onRequest(context) {
  const { text } = context.params;
  const items = text.split(',').map(s => s.trim()).filter(Boolean);
  const result = items.map((item, i) => `${i + 1}. ${item}`).join('\n');
  return new Response(result + "\n", { headers: { 'Content-Type': 'text/plain' } });
}
