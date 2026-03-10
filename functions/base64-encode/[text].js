export async function onRequest(context) {
  const { text } = context.params;
  const encoded = btoa(text) + "\n";
  
  return new Response(encoded, {
    headers: { 'Content-Type': 'text/plain' }
  });
}
