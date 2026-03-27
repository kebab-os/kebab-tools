export async function onRequest(context) {
  const { text } = context.params;
  const codes = Array.from(text).map(c => c.charCodeAt(0));
  return new Response(codes.join(' ') + "\n", { headers: { 'Content-Type': 'text/plain' } });
}
