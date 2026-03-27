export async function onRequest(context) {
  const { text } = context.params;
  const commaIdx = text.indexOf(',');
  if (commaIdx === -1) {
    return new Response('Usage: common-chars/str1,str2\n', { status: 400, headers: { 'Content-Type': 'text/plain' } });
  }
  const a = text.slice(0, commaIdx);
  const b = text.slice(commaIdx + 1);
  const setB = new Set(b);
  const common = [...new Set(a)].filter(c => setB.has(c)).join('');
  return new Response(common + "\n", { headers: { 'Content-Type': 'text/plain' } });
}
