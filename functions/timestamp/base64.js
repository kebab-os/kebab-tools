export async function onRequest() {
  // Base64 encode current timestamp
  const encoded = btoa(Date.now().toString()) + "\n";
  return new Response(encoded, {
    headers: { 'Content-Type': 'text/plain' }
  });
}
