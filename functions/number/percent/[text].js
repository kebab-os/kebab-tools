export async function onRequest(context) {
  const { text } = context.params;
  const [valStr, totalStr] = text.split(',');
  const val = parseFloat(valStr);
  const total = parseFloat(totalStr);

  if (isNaN(val) || isNaN(total)) {
    return new Response('Invalid input. Use format: value,total (e.g. 75,200)\n', {
      status: 400,
      headers: { 'Content-Type': 'text/plain' }
    });
  }

  if (total === 0) {
    return new Response('Total cannot be zero\n', { status: 400, headers: { 'Content-Type': 'text/plain' } });
  }

  const pct = (val / total) * 100;
  return new Response(`${pct.toFixed(2)}%\n`, { headers: { 'Content-Type': 'text/plain' } });
}
