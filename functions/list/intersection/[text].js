export async function onRequest(context) {
  const { text } = context.params;
  const pipeIdx = text.indexOf('|');
  if (pipeIdx === -1) return new Response('Usage: intersection/list1|list2 (separate lists with |)\n', { status: 400, headers: { 'Content-Type': 'text/plain' } });
  const a = new Set(text.slice(0, pipeIdx).split(',').map(s => s.trim()));
  const b = text.slice(pipeIdx + 1).split(',').map(s => s.trim());
  const result = b.filter(item => a.has(item));
  return new Response(result.join(', ') + "\n", { headers: { 'Content-Type': 'text/plain' } });
}
