export async function onRequest() {
  // Base64 encode current timestamp
  const encoded = btoa(Date.now().toString()) + "\n";
  return new Response("k| " + encoded, {
    headers: { 'Content-Type': 'text/plain' }
  });
}
