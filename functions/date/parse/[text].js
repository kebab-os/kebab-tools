export async function onRequest(context) {
  const { text } = context.params;
  const d = new Date(text);
  if (isNaN(d.getTime())) {
    return new Response('Invalid date. Provide a valid date string (e.g. 2024-06-15)\n', {
      status: 400,
      headers: { 'Content-Type': 'text/plain' }
    });
  }
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const months = ['January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'];
  const result = {
    year: d.getUTCFullYear(),
    month: d.getUTCMonth() + 1,
    month_name: months[d.getUTCMonth()],
    day: d.getUTCDate(),
    weekday: days[d.getUTCDay()],
    iso: d.toISOString()
  };
  return new Response(JSON.stringify(result, null, 2) + "\n", {
    headers: { 'Content-Type': 'application/json' }
  });
}
