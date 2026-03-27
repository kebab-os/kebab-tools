export async function onRequest(context) {
  const { text } = context.params;
  const d = new Date(text);
  if (isNaN(d.getTime())) return new Response('Invalid date\n', { status: 400, headers: { 'Content-Type': 'text/plain' } });
  const startOfYear = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
  const dayNum = Math.ceil((d - startOfYear) / 86400000);
  const weekNum = Math.ceil((dayNum + startOfYear.getUTCDay()) / 7);
  return new Response(weekNum + "\n", { headers: { 'Content-Type': 'text/plain' } });
}
