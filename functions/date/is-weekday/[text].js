export async function onRequest(context) {
  const { text } = context.params;
  const d = new Date(text);
  if (isNaN(d.getTime())) return new Response('Invalid date\n', { status: 400, headers: { 'Content-Type': 'text/plain' } });
  const day = d.getUTCDay();
  return new Response((day !== 0 && day !== 6 ? 'true' : 'false') + "\n", { headers: { 'Content-Type': 'text/plain' } });
}
