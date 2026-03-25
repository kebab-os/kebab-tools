export async function onRequest(context) {
  const { text } = context.params;
  const [valStr, minStr, maxStr] = text.split(',');
  const val = parseFloat(valStr);
  const min = parseFloat(minStr);
  const max = parseFloat(maxStr);

  if ([val, min, max].some(isNaN)) {
    return new Response('Invalid input. Use format: value,min,max (e.g. 5,0,10)\n', {
      status: 400,
      headers: { 'Content-Type': 'text/plain' }
    });
  }

  return new Response(Math.min(Math.max(val, min), max) + "\n", {
    headers: { 'Content-Type': 'text/plain' }
  });
}
