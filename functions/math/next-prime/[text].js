export async function onRequest(context) {
  const { text } = context.params;
  let n = parseInt(text, 10);
  if (isNaN(n)) return new Response('Invalid number\n', { status: 400, headers: { 'Content-Type': 'text/plain' } });
  const isPrime = num => {
    if (num < 2) return false;
    if (num === 2) return true;
    if (num % 2 === 0) return false;
    for (let i = 3; i <= Math.sqrt(num); i += 2) if (num % i === 0) return false;
    return true;
  };
  n++;
  while (!isPrime(n)) n++;
  return new Response(n + "\n", { headers: { 'Content-Type': 'text/plain' } });
}
