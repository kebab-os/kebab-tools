export async function onRequest(context) {
  const { text } = context.params;
  const words = text.toLowerCase().replace(/[^a-z0-9\s]/g, '').split(/\s+/).filter(Boolean);
  const freq = {};
  for (const w of words) freq[w] = (freq[w] || 0) + 1;
  const sorted = Object.entries(freq).sort((a, b) => b[1] - a[1]);
  const result = sorted.map(([w, n]) => `${w}: ${n}`).join('\n');
  return new Response(result + "\n", { headers: { 'Content-Type': 'text/plain' } });
}
