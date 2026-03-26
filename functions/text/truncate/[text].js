export async function onRequest(context) {
  const { text } = context.params;
  const [str, lenStr] = text.split(',');
  const len = parseInt(lenStr, 10);
  if (!str || isNaN(len) || len < 0) {
    return new Response('Invalid input. Use format: text,length (e.g. hello world,5)\n', {
      status: 400,
      headers: { 'Content-Type': 'text/plain' }
    });
  }
  const truncated = str.length > len ? str.slice(0, Math.max(0, len - 3)) + '...' : str;
  return new Response(truncated + "\n", {
    headers: { 'Content-Type': 'text/plain' }
  });
}
