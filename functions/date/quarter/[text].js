export async function onRequest(context) {
  const { text } = context.params;
  const d = new Date(text);
  if (isNaN(d.getTime())) return new Response('Invalid date\n', { status: 400, headers: { 'Content-Type': 'text/plain' } });
  const q = Math.ceil((d.getUTCMonth() + 1) / 3);
  return new Response('Q' + q + "\n", { headers: { 'Content-Type': 'text/plain' } });
}
