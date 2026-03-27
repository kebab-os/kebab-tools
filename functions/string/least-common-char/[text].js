export async function onRequest(context) {
  const { text } = context.params;
  const freq = {};
  for (const ch of text) { freq[ch] = (freq[ch] || 0) + 1; }
  const min = Math.min(...Object.values(freq));
  const chars = Object.entries(freq).filter(([, n]) => n === min).map(([c]) => c);
  return new Response(chars.join(', ') + "\n", { headers: { 'Content-Type': 'text/plain' } });
}
