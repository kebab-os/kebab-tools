export async function onRequest(context) {
  const { text } = context.params;
  const nums = text.split(',').map(Number);
  if (nums.length < 2 || nums.some(n => isNaN(n) || !Number.isInteger(n) || n <= 0)) {
    return new Response('Invalid input. Use comma-separated positive integers (e.g. 4,6)\n', {
      status: 400,
      headers: { 'Content-Type': 'text/plain' }
    });
  }
  const gcd = (a, b) => b === 0 ? a : gcd(b, a % b);
  const lcm = (a, b) => (a / gcd(a, b)) * b;
  const result = nums.reduce(lcm);
  return new Response(result + "\n", { headers: { 'Content-Type': 'text/plain' } });
}
