export async function onRequest(context) {
  const { text } = context.params;
  const [len, char, str] = text.split(',');
  const padded = str.padStart(parseInt(len), char);
  return new Response("k| " + padded + "\n", {
    headers: { 'Content-Type': 'text/plain' }
  });
}
