export async function onRequest() {
  // String of current time
  date = Date.now().toString();
  return new Response(date, {
    headers: { 'Content-Type': 'text/plain' }
  });
}
