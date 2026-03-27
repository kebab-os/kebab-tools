export async function onRequest(context) {
  const { text } = context.params;
  const d = new Date(text);
  if (isNaN(d.getTime())) return new Response('Invalid date\n', { status: 400, headers: { 'Content-Type': 'text/plain' } });
  const day = d.getUTCDay();
  const diff = day === 0 ? 0 : 7 - day;
  d.setUTCDate(d.getUTCDate() + diff);
  return new Response(d.toISOString().slice(0, 10) + "\n", { headers: { 'Content-Type': 'text/plain' } });
}
