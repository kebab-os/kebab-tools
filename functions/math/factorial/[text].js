export async function onRequest(context) {
  const { text } = context.params;
  const n = parseInt(text, 10);
  if (isNaN(n) || n < 0 || n > 20) {
    return new Response('Invalid input. Provide an integer between 0 and 20\n', {
      status: 400,
      headers: { 'Content-Type': 'text/plain' }
    });
  }
  const factorial = n => n <= 1 ? 1 : n * factorial(n - 1);
  return new Response(factorial(n) + "\n", { headers: { 'Content-Type': 'text/plain' } });
}
