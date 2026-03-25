export async function onRequest(context) {
  const { text } = context.params;
  const nums = text.split(',').map(Number);
  if (nums.length < 2 || nums.some(isNaN)) {
    return new Response('Invalid numbers. Use comma-separated values (e.g. 10,3)\n', {
      status: 400,
      headers: { 'Content-Type': 'text/plain' }
    });
  }
  const result = nums.slice(1).reduce((a, b) => a - b, nums[0]);
  return new Response(result + "\n", { headers: { 'Content-Type': 'text/plain' } });
}
