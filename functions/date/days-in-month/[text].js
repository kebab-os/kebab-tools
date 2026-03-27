export async function onRequest(context) {
  const { text } = context.params;
  const parts = text.split(',').map(Number);
  let year, month;
  if (parts.length === 2 && !parts.some(isNaN)) {
    [year, month] = parts;
  } else {
    const d = new Date(text);
    if (isNaN(d.getTime())) return new Response('Usage: days-in-month/YYYY,MM or days-in-month/YYYY-MM-DD\n', { status: 400, headers: { 'Content-Type': 'text/plain' } });
    year = d.getUTCFullYear(); month = d.getUTCMonth() + 1;
  }
  const days = new Date(Date.UTC(year, month, 0)).getUTCDate();
  return new Response(days + "\n", { headers: { 'Content-Type': 'text/plain' } });
}
