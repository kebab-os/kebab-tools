export async function onRequest(context) {
  const { text } = context.params;
  const titled = text.replace(/\b\w/g, c => c.toUpperCase());
  return new Response(titled + "\n", {
    headers: { 'Content-Type': 'text/plain' }
  });
}
