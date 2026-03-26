export async function onRequest(context) {
  const { text } = context.params;
  const nums = text.split(',').map(Number);
  if (nums.some(isNaN)) {
    return new Response('Invalid input. Provide comma-separated numbers (e.g. 1,2,3,4,5)\n', {
      status: 400,
      headers: { 'Content-Type': 'text/plain' }
    });
  }
  const avg = nums.reduce((a, b) => a + b, 0) / nums.length;
  return new Response(avg + "\n", { headers: { 'Content-Type': 'text/plain' } });
}
