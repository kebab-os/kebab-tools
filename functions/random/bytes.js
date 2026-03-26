export async function onRequest(context) {
  const url = new URL(context.request.url);
  const length = parseInt(url.searchParams.get('len')) || 16;
  const array = new Uint8Array(length);
  crypto.getRandomValues(array);
  const hex = Array.from(array).map(b => b.toString(16).padStart(2, '0')).join('');
  return new Response(hex + "\n", {
    headers: { 'Content-Type': 'text/plain' }
  });
}
