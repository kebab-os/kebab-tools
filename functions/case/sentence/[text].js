export async function onRequest(context) {
  const { text } = context.params;
  const result = text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
  return new Response(result + "\n", { headers: { 'Content-Type': 'text/plain' } });
}
