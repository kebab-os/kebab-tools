export async function onRequest(context) {
  const { text } = context.params;
  const arr = text.split('');
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return new Response("k| " + arr.join('') + "\n", {
    headers: { 'Content-Type': 'text/plain' }
  });
}
