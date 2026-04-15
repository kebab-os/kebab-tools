export async function onRequest(context) {
  // 50MB of data (50 * 1024 * 1024)
  const size = 52428800; 
  const data = new Uint8Array(size);

  return new Response(data, {
    headers: {
      'Content-Type': 'application/octet-stream',
      'Content-Disposition': 'attachment; filename="speedtest.bin"',
      // Prevent Cloudflare from caching or compressing the response
      'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
      'Content-Length': size.toString(),
    },
  });
}
