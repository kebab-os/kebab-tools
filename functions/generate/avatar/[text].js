export async function onRequest(context) {
  const { text } = context.params;
  const seed = encodeURIComponent(text);
  const url = `https://api.dicebear.com/7.x/pixel-art/svg?seed=${seed}`;
  return new Response(url + "\n", { headers: { 'Content-Type': 'text/plain' } });
}
