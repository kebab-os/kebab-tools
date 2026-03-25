export async function onRequest(context) {
  const { text } = context.params;
  const n = parseInt(text, 10);
  if (isNaN(n) || n < 2) {
    return new Response('Invalid input. Provide an integer >= 2\n', {
      status: 400,
      headers: { 'Content-Type': 'text/plain' }
    });
  }
  if (n === 2) return new Response('true\n', { headers: { 'Content-Type': 'text/plain' } });
  if (n % 2 === 0) return new Response('false\n', { headers: { 'Content-Type': 'text/plain' } });
  for (let i = 3; i <= Math.sqrt(n); i += 2) {
    if (n % i === 0) return new Response('false\n', { headers: { 'Content-Type': 'text/plain' } });
  }
  return new Response('true\n', { headers: { 'Content-Type': 'text/plain' } });
}
