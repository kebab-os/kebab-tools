export async function onRequest(context) {
  const { text } = context.params;
  const [a, b] = text.split(',', 2);
  if (!b) return new Response('Usage: implication/a,b (a implies b)\n', { status: 400, headers: { 'Content-Type': 'text/plain' } });
  const toBool = s => !['false','0','no','off',''].includes(s.trim().toLowerCase());
  const result = !toBool(a) || toBool(b);
  return new Response((result ? 'true' : 'false') + "\n", { headers: { 'Content-Type': 'text/plain' } });
}
