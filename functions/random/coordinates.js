export async function onRequest() {
  const bytes = crypto.getRandomValues(new Uint8Array(8));
  const lat = ((((bytes[0] << 24) | (bytes[1] << 16) | (bytes[2] << 8) | bytes[3]) >>> 0) / 0xFFFFFFFF * 180 - 90).toFixed(6);
  const lon = ((((bytes[4] << 24) | (bytes[5] << 16) | (bytes[6] << 8) | bytes[7]) >>> 0) / 0xFFFFFFFF * 360 - 180).toFixed(6);
  return new Response(`${lat}, ${lon}\n`, { headers: { 'Content-Type': 'text/plain' } });
}
