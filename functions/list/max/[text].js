export async function onRequest(context) {
  const { text } = context.params;
  const nums = text.split(',').map(s => parseFloat(s.trim()));
  if (nums.some(isNaN)) return new Response('All items must be numbers\n', { status: 400, headers: { 'Content-Type': 'text/plain' } });
  return new Response(Math.max(...nums) + "\n", { headers: { 'Content-Type': 'text/plain' } });
}
