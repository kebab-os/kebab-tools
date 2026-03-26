export async function onRequest(context) {
  const { text } = context.params;
  const n = parseFloat(text);
  if (isNaN(n)) {
    return new Response('Invalid input. Provide a number\n', {
      status: 400,
      headers: { 'Content-Type': 'text/plain' }
    });
  }
  return new Response(n.toExponential() + "\n", {
    headers: { 'Content-Type': 'text/plain' }
  });
}
