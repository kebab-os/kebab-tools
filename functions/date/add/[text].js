export async function onRequest(context) {
  const { text } = context.params;
  const parts = text.split(',');
  if (parts.length !== 2) return new Response('Usage: add/YYYY-MM-DD,days\n', { status: 400, headers: { 'Content-Type': 'text/plain' } });
  const d = new Date(parts[0]);
  const days = parseInt(parts[1], 10);
  if (isNaN(d.getTime()) || isNaN(days)) return new Response('Invalid date or days\n', { status: 400, headers: { 'Content-Type': 'text/plain' } });
  d.setUTCDate(d.getUTCDate() + days);
  return new Response(d.toISOString().slice(0, 10) + "\n", { headers: { 'Content-Type': 'text/plain' } });
}
