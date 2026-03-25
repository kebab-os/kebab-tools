export async function onRequest(context) {
  const { text } = context.params;
  const n = parseFloat(text);
  if (isNaN(n) || n < 0) {
    return new Response('Invalid input. Provide a non-negative number of bytes\n', {
      status: 400,
      headers: { 'Content-Type': 'text/plain' }
    });
  }

  const units = ['B', 'KB', 'MB', 'GB', 'TB', 'PB'];
  let size = n;
  let unit = 0;
  while (size >= 1024 && unit < units.length - 1) {
    size /= 1024;
    unit++;
  }

  const formatted = unit === 0 ? `${size} ${units[unit]}` : `${size.toFixed(2)} ${units[unit]}`;
  return new Response(formatted + "\n", { headers: { 'Content-Type': 'text/plain' } });
}
