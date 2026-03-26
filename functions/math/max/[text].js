export async function onRequest(context) {
  const { text } = context.params;
  const nums = text.split(',').map(Number);
  if (nums.some(isNaN)) {
    return new Response('Invalid input. Provide comma-separated numbers (e.g. 3,1,4,1,5)\n', {
      status: 400,
      headers: { 'Content-Type': 'text/plain' }
    });
  }
  return new Response(Math.max(...nums) + "\n", { headers: { 'Content-Type': 'text/plain' } });
}
