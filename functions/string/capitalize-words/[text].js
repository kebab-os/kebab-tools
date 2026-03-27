export async function onRequest(context) {
  const { text } = context.params;
  const result = text.replace(/\b\w/g, c => c.toUpperCase());
  return new Response(result + "\n", { headers: { 'Content-Type': 'text/plain' } });
}
