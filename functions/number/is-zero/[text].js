export async function onRequest(context) {
  const { text } = context.params;
  const n = Number(text);
  return new Response((isNaN(n) ? 'Invalid number' : n === 0 ? 'true' : 'false') + "\n", { headers: { 'Content-Type': 'text/plain' } });
}
