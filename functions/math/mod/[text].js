export async function onRequest(context) {
  const { text } = context.params;
  const [aStr, bStr] = text.split(',');
  const a = parseFloat(aStr);
  const b = parseFloat(bStr);
  if (isNaN(a) || isNaN(b)) {
    return new Response('Invalid input. Use format: a,b (e.g. 10,3)\n', {
      status: 400,
      headers: { 'Content-Type': 'text/plain' }
    });
  }
  if (b === 0) {
    return new Response('Modulo by zero\n', { status: 400, headers: { 'Content-Type': 'text/plain' } });
  }
  return new Response((a % b) + "\n", { headers: { 'Content-Type': 'text/plain' } });
}
