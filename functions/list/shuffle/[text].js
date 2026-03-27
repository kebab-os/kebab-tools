export async function onRequest(context) {
  const { text } = context.params;
  const items = text.split(',').map(s => s.trim());
  const arr = [...items];
  const bytes = crypto.getRandomValues(new Uint8Array(arr.length * 2));
  for (let i = arr.length - 1; i > 0; i--) {
    const j = ((bytes[i * 2] << 8) | bytes[i * 2 + 1]) % (i + 1);
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return new Response(arr.join(', ') + "\n", { headers: { 'Content-Type': 'text/plain' } });
}
