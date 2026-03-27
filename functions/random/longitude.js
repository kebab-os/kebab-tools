export async function onRequest() {
  const bytes = crypto.getRandomValues(new Uint8Array(4));
  const val = (((bytes[0] << 24) | (bytes[1] << 16) | (bytes[2] << 8) | bytes[3]) >>> 0) / 0xFFFFFFFF;
  const lon = (val * 360 - 180).toFixed(6);
  return new Response(lon + "\n", { headers: { 'Content-Type': 'text/plain' } });
}
