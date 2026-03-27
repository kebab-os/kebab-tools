export async function onRequest(context) {
  const { text } = context.params;
  const d = new Date(isNaN(Number(text)) ? text : Number(text) * 1000);
  if (isNaN(d.getTime())) return new Response('Invalid date or timestamp\n', { status: 400, headers: { 'Content-Type': 'text/plain' } });
  return new Response(d.toUTCString() + "\n", { headers: { 'Content-Type': 'text/plain' } });
}
