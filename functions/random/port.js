export async function onRequest() {
  const bytes = crypto.getRandomValues(new Uint8Array(2));
  const port = 1024 + (((bytes[0] << 8) | bytes[1]) % (65535 - 1024));
  return new Response(port + "\n", { headers: { 'Content-Type': 'text/plain' } });
}
