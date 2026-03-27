export async function onRequest(context) {
  const { text } = context.params;
  const commaIdx = text.indexOf(',');
  if (commaIdx === -1) return new Response('Usage: match-all/pattern,string\n', { status: 400, headers: { 'Content-Type': 'text/plain' } });
  const pattern = text.slice(0, commaIdx);
  const str = text.slice(commaIdx + 1);
  try {
    const re = new RegExp(pattern, 'g');
    const matches = [...str.matchAll(re)].map(m => m[0]);
    return new Response(matches.join('\n') + (matches.length ? '\n' : ''), { headers: { 'Content-Type': 'text/plain' } });
  } catch (e) {
    return new Response(`Invalid regex: ${e.message}\n`, { status: 400, headers: { 'Content-Type': 'text/plain' } });
  }
}
