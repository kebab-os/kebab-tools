export async function onRequest(context) {
  const { text } = context.params;
  const parts = text.split(',');
  if (parts.length < 2) return new Response('Usage: nand/a,b\n', { status: 400, headers: { 'Content-Type': 'text/plain' } });
  const toBool = s => !['false','0','no','off',''].includes(s.trim().toLowerCase());
  const result = !parts.map(toBool).every(Boolean);
  return new Response((result ? 'true' : 'false') + "\n", { headers: { 'Content-Type': 'text/plain' } });
}
