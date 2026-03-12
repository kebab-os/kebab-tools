export async function onRequest(context) {
  const { text } = context.params;
  const [char, times] = text.split(',');
  const repeated = (char || ' ').repeat(Math.min(parseInt(times) || 1, 100));
  return new Response("k| " + repeated + "\n", {
    headers: { 'Content-Type': 'text/plain' }
  });
}
