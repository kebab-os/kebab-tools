export async function onRequest() {
  return new Response(new Date().toISOString().slice(0, 10) + "\n", { headers: { 'Content-Type': 'text/plain' } });
}
