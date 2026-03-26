export async function onRequest(context) {
  const { text } = context.params;
  const [numStr, decimalsStr] = text.split(',');
  const n = parseFloat(numStr);
  const decimals = parseInt(decimalsStr, 10);
  if (isNaN(n) || isNaN(decimals) || decimals < 0) {
    return new Response('Invalid input. Use format: number,decimals (e.g. 3.14159,2)\n', {
      status: 400,
      headers: { 'Content-Type': 'text/plain' }
    });
  }
  return new Response(n.toFixed(decimals) + "\n", {
    headers: { 'Content-Type': 'text/plain' }
  });
}
