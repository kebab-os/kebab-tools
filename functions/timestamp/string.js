export async function onRequest() {
  // String of current time
  timestamp = Date.now().toString();
  return new Response(timestamp, {
    headers: { 'Content-Type': 'text/plain' }
  });
}
