export async function onRequest(context) {
  const { text } = context.params;
  const nums = text.split(',').map(s => parseFloat(s.trim()));
  if (nums.some(isNaN) || nums.length === 0) return new Response('Provide comma-separated numbers\n', { status: 400, headers: { 'Content-Type': 'text/plain' } });
  return new Response((nums.reduce((a, b) => a + b, 0) / nums.length).toFixed(6) + "\n", { headers: { 'Content-Type': 'text/plain' } });
}
