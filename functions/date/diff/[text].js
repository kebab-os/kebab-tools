export async function onRequest(context) {
  const { text } = context.params;
  const [d1Str, d2Str] = text.split(',');
  const d1 = new Date(d1Str);
  const d2 = new Date(d2Str);
  if (!d1Str || !d2Str || isNaN(d1.getTime()) || isNaN(d2.getTime())) {
    return new Response('Invalid input. Use format: date1,date2 (e.g. 2024-01-01,2024-12-31)\n', {
      status: 400,
      headers: { 'Content-Type': 'text/plain' }
    });
  }
  const diffMs = Math.abs(d2.getTime() - d1.getTime());
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  return new Response(diffDays + "\n", {
    headers: { 'Content-Type': 'text/plain' }
  });
}
