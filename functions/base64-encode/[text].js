export async function onRequest(context) {
  const { text } = context.params;
  
  // Simple base64 encode - returns plain text like wttr.in
  const encoded = btoa(text);
  
  return new Response(encoded, {
    headers: { 'Content-Type': 'text/plain' }
  });
}
