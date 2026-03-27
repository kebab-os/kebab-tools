export async function onRequest(context) {
  const { text } = context.params;
  const bytes = new TextEncoder().encode(text).length;
  return new Response(bytes + "\n", { headers: { 'Content-Type': 'text/plain' } });
}
