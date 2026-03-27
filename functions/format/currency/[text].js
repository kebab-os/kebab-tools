export async function onRequest(context) {
  const { text } = context.params;
  const parts = text.split(',');
  const amount = parseFloat(parts[0]);
  const currency = (parts[1] || 'USD').trim().toUpperCase();
  if (isNaN(amount)) return new Response('Usage: currency/amount,USD\n', { status: 400, headers: { 'Content-Type': 'text/plain' } });
  try {
    const formatted = new Intl.NumberFormat('en-US', { style: 'currency', currency }).format(amount);
    return new Response(formatted + "\n", { headers: { 'Content-Type': 'text/plain' } });
  } catch {
    return new Response('Invalid currency code\n', { status: 400, headers: { 'Content-Type': 'text/plain' } });
  }
}
