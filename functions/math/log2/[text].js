export async function onRequest(context) {
  const { text } = context.params;
  const n = parseFloat(text);
  if (isNaN(n) || n <= 0) {
    return new Response('Invalid input. Provide a positive number\n', {
      status: 400,
      headers: { 'Content-Type': 'text/plain' }
    });
  }
  return new Response(Math.log2(n) + "\n", { headers: { 'Content-Type': 'text/plain' } });
}
