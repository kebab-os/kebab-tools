export async function onRequest(context) {
  const { text } = context.params;
  const commaIdx = text.indexOf(',');
  if (commaIdx === -1) {
    return new Response('Usage: is-anagram/word1,word2\n', { status: 400, headers: { 'Content-Type': 'text/plain' } });
  }
  const a = text.slice(0, commaIdx);
  const b = text.slice(commaIdx + 1);
  const normalize = s => s.toLowerCase().replace(/[^a-z0-9]/g, '').split('').sort().join('');
  const result = normalize(a) === normalize(b) ? 'true' : 'false';
  return new Response(result + "\n", { headers: { 'Content-Type': 'text/plain' } });
}
