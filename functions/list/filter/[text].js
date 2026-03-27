export async function onRequest(context) {
  const { text } = context.params;
  const commaIdx = text.indexOf(',');
  if (commaIdx === -1) return new Response('Usage: filter/regex,item1,item2,...\n', { status: 400, headers: { 'Content-Type': 'text/plain' } });
  const pattern = text.slice(0, commaIdx);
  const items = text.slice(commaIdx + 1).split(',').map(s => s.trim());
  try {
    const re = new RegExp(pattern, 'i');
    const filtered = items.filter(item => re.test(item));
    return new Response(filtered.join(', ') + "\n", { headers: { 'Content-Type': 'text/plain' } });
  } catch (e) {
    return new Response(`Invalid regex: ${e.message}\n`, { status: 400, headers: { 'Content-Type': 'text/plain' } });
  }
}
