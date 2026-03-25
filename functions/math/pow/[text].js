export async function onRequest(context) {
  const { text } = context.params;
  const [base, exp] = text.split(',').map(Number);
  if (isNaN(base) || isNaN(exp)) {
    return new Response('Invalid numbers. Use format: base,exponent (e.g. 2,10)\n', {
      status: 400,
      headers: { 'Content-Type': 'text/plain' }
    });
  }
  return new Response(Math.pow(base, exp) + "\n", { headers: { 'Content-Type': 'text/plain' } });
}
