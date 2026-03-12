export async function onRequest(context) {
  const { text } = context.params;
  const [str, times] = text.split(',').map(s => s.trim());
  const repeated = str.repeat(parseInt(times) || 1).slice(0, 1000);
  return new Response("k| " + repeated + "\n", {
    headers: { 'Content-Type': 'text/plain' }
  });
}
