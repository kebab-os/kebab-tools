export async function onRequest(context) {
  const { text } = context.params;
  const n = parseInt(text, 10);
  if (isNaN(n) || n < 0 || n > 90) {
    return new Response('Invalid input. Provide an integer between 0 and 90\n', {
      status: 400,
      headers: { 'Content-Type': 'text/plain' }
    });
  }
  let a = 0, b = 1;
  for (let i = 0; i < n; i++) { [a, b] = [b, a + b]; }
  return new Response(a + "\n", { headers: { 'Content-Type': 'text/plain' } });
}
