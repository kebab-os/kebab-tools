export async function onRequest(context) {
  const { text } = context.params;
  const lines = text.split('\n');
  const maxLen = Math.max(...lines.map(l => l.length), 40);
  const centered = lines.map(l => l.padStart(Math.floor((maxLen + l.length) / 2)).padEnd(maxLen));
  return new Response(centered.join('\n') + "\n", { headers: { 'Content-Type': 'text/plain' } });
}
