export async function onRequest(context) {
  const { text } = context.params;
  const past = new Date(text);
  if (isNaN(past.getTime())) return new Response('Invalid date\n', { status: 400, headers: { 'Content-Type': 'text/plain' } });
  const now = new Date();
  const diff = Math.floor((now - past) / 86400000);
  return new Response(diff + "\n", { headers: { 'Content-Type': 'text/plain' } });
}
