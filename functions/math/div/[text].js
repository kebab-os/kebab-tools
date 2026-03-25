export async function onRequest(context) {
  const { text } = context.params;
  const [a, b] = text.split(',').map(Number);
  if (isNaN(a) || isNaN(b)) {
    return new Response('Invalid numbers. Use format: dividend,divisor (e.g. 10,3)\n', {
      status: 400,
      headers: { 'Content-Type': 'text/plain' }
    });
  }
  if (b === 0) {
    return new Response('Division by zero\n', { status: 400, headers: { 'Content-Type': 'text/plain' } });
  }
  return new Response((a / b) + "\n", { headers: { 'Content-Type': 'text/plain' } });
}
