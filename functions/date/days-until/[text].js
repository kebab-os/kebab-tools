export async function onRequest(context) {
  const { text } = context.params;
  const target = new Date(text);
  if (isNaN(target.getTime())) return new Response('Invalid date\n', { status: 400, headers: { 'Content-Type': 'text/plain' } });
  const now = new Date();
  const diff = Math.ceil((target - now) / 86400000);
  return new Response(diff + "\n", { headers: { 'Content-Type': 'text/plain' } });
}
