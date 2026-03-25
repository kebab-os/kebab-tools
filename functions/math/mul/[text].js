export async function onRequest(context) {
  const { text } = context.params;
  const nums = text.split(',').map(Number);
  if (nums.some(isNaN)) {
    return new Response('Invalid numbers. Use comma-separated values (e.g. 2,3,4)\n', {
      status: 400,
      headers: { 'Content-Type': 'text/plain' }
    });
  }
  const result = nums.reduce((a, b) => a * b, 1);
  return new Response(result + "\n", { headers: { 'Content-Type': 'text/plain' } });
}
