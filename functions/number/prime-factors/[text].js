export async function onRequest(context) {
  const { text } = context.params;
  let n = parseInt(text, 10);
  if (isNaN(n) || n < 2) return new Response('Provide an integer >= 2\n', { status: 400, headers: { 'Content-Type': 'text/plain' } });
  const factors = [];
  for (let d = 2; d * d <= n; d++) {
    while (n % d === 0) { factors.push(d); n /= d; }
  }
  if (n > 1) factors.push(n);
  return new Response(factors.join(' × ') + "\n", { headers: { 'Content-Type': 'text/plain' } });
}
