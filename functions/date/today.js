export async function onRequest() {
  const today = new Date().toISOString().slice(0, 10);
  return new Response(today + "\n", { headers: { 'Content-Type': 'text/plain' } });
}
