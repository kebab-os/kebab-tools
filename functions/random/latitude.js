export async function onRequest() {
  const bytes = crypto.getRandomValues(new Uint8Array(4));
  const val = (((bytes[0] << 24) | (bytes[1] << 16) | (bytes[2] << 8) | bytes[3]) >>> 0) / 0xFFFFFFFF;
  const lat = (val * 180 - 90).toFixed(6);
  return new Response(lat + "\n", { headers: { 'Content-Type': 'text/plain' } });
}
