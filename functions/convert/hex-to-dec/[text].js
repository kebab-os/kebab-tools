export async function onRequest(context) {
  const { text } = context.params;
  const n = parseInt(text.replace(/^0x/i, ''), 16);
  if (isNaN(n)) return new Response('Invalid hexadecimal value\n', { status: 400, headers: { 'Content-Type': 'text/plain' } });
  return new Response(n + "\n", { headers: { 'Content-Type': 'text/plain' } });
}
