export async function onRequest(context) {
  const { text } = context.params;
  const year = parseInt(text, 10);
  if (isNaN(year) || year < 1) {
    return new Response('Invalid input. Provide a positive year (e.g. 2024)\n', {
      status: 400,
      headers: { 'Content-Type': 'text/plain' }
    });
  }
  const isLeap = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  return new Response((isLeap ? 'true' : 'false') + "\n", {
    headers: { 'Content-Type': 'text/plain' }
  });
}
