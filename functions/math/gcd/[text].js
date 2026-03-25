export async function onRequest(context) {
  const { text } = context.params;
  const nums = text.split(',').map(Number);
  if (nums.length < 2 || nums.some(n => isNaN(n) || !Number.isInteger(n))) {
    return new Response('Invalid input. Use comma-separated integers (e.g. 12,8)\n', {
      status: 400,
      headers: { 'Content-Type': 'text/plain' }
    });
  }
  const gcd = (a, b) => b === 0 ? Math.abs(a) : gcd(b, a % b);
  const result = nums.reduce(gcd);
  return new Response(result + "\n", { headers: { 'Content-Type': 'text/plain' } });
}
