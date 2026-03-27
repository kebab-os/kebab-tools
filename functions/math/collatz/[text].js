export async function onRequest(context) {
  const { text } = context.params;
  let n = parseInt(text, 10);
  if (isNaN(n) || n < 1) return new Response('Provide a positive integer\n', { status: 400, headers: { 'Content-Type': 'text/plain' } });
  const seq = [n];
  while (n !== 1 && seq.length < 10000) {
    n = n % 2 === 0 ? n / 2 : 3 * n + 1;
    seq.push(n);
  }
  return new Response(seq.join(', ') + "\n", { headers: { 'Content-Type': 'text/plain' } });
}
