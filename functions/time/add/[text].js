export async function onRequest(context) {
  const { text } = context.params;
  const parts = text.split(',');
  if (parts.length !== 2) return new Response('Usage: add/timestamp,seconds\n', { status: 400, headers: { 'Content-Type': 'text/plain' } });
  const ts = parseInt(parts[0], 10);
  const secs = parseInt(parts[1], 10);
  if (isNaN(ts) || isNaN(secs)) return new Response('Invalid values\n', { status: 400, headers: { 'Content-Type': 'text/plain' } });
  return new Response((ts + secs) + "\n", { headers: { 'Content-Type': 'text/plain' } });
}
