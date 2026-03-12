export async function onRequest() {
  // SHA-256 hash of current time
  const hash = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(Date.now().toString()));
  const hex = Array.from(new Uint8Array(hash)).map(b => b.toString(16).padStart(2, '0')).join('') + "\n";
  return new Response("k| " + hex, {
    headers: { 'Content-Type': 'text/plain' }
  });
}
