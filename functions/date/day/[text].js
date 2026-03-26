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
  return new Response(days[d.getUTCDay()] + "\n", {
    headers: { 'Content-Type': 'text/plain' }
  });
}
