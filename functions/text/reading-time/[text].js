export async function onRequest(context) {
  const { text } = context.params;
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  const minutes = Math.ceil(words / 200);
  return new Response(`${minutes} min (${words} words)\n`, { headers: { 'Content-Type': 'text/plain' } });
}
