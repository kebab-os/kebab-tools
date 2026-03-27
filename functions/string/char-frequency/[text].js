export async function onRequest(context) {
  const { text } = context.params;
  const freq = {};
  for (const ch of text) {
    freq[ch] = (freq[ch] || 0) + 1;
  }
  const sorted = Object.entries(freq).sort((a, b) => b[1] - a[1]);
  const result = sorted.map(([ch, n]) => `${JSON.stringify(ch)}: ${n}`).join('\n');
  return new Response(result + "\n", { headers: { 'Content-Type': 'text/plain' } });
}
