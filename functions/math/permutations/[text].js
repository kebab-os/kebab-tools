export async function onRequest(context) {
  const { text } = context.params;
  const parts = text.split(',').map(Number);
  if (parts.length !== 2 || parts.some(isNaN)) {
    return new Response('Usage: permutations/n,k\n', { status: 400, headers: { 'Content-Type': 'text/plain' } });
  }
  const [n, k] = parts;
  if (k < 0 || k > n || !Number.isInteger(n) || !Number.isInteger(k)) {
    return new Response('n and k must be non-negative integers with k <= n\n', { status: 400, headers: { 'Content-Type': 'text/plain' } });
  }
  let result = 1n;
  for (let i = 0; i < k; i++) {
    result *= BigInt(n - i);
  }
  return new Response(result.toString() + "\n", { headers: { 'Content-Type': 'text/plain' } });
}
