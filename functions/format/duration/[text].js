export async function onRequest(context) {
  const { text } = context.params;
  const seconds = parseFloat(text);
  if (isNaN(seconds) || seconds < 0) return new Response('Invalid seconds\n', { status: 400, headers: { 'Content-Type': 'text/plain' } });
  const parts = [];
  const d = Math.floor(seconds / 86400); if (d) parts.push(d + 'd');
  const h = Math.floor((seconds % 86400) / 3600); if (h) parts.push(h + 'h');
  const m = Math.floor((seconds % 3600) / 60); if (m) parts.push(m + 'm');
  const s = Math.floor(seconds % 60); if (s || !parts.length) parts.push(s + 's');
  return new Response(parts.join(' ') + "\n", { headers: { 'Content-Type': 'text/plain' } });
}
