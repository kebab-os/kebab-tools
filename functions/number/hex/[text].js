export async function onRequest(context) {
  const { text } = context.params;
  const n = parseInt(text, 10);
  if (isNaN(n) || n < 0) {
    return new Response('Invalid input. Provide a non-negative integer\n', {
      status: 400,
      headers: { 'Content-Type': 'text/plain' }
    });
  }
  return new Response('0x' + n.toString(16).toUpperCase() + "\n", { headers: { 'Content-Type': 'text/plain' } });
}
