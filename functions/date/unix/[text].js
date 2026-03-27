export async function onRequest(context) {
  const { text } = context.params;
  const d = new Date(text);
  if (isNaN(d.getTime())) return new Response('Invalid date\n', { status: 400, headers: { 'Content-Type': 'text/plain' } });
  return new Response(Math.floor(d.getTime() / 1000) + "\n", { headers: { 'Content-Type': 'text/plain' } });
}
