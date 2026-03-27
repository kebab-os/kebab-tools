export async function onRequest() {
  const d = new Date();
  d.setUTCDate(d.getUTCDate() - 1);
  return new Response(d.toISOString().slice(0, 10) + "\n", { headers: { 'Content-Type': 'text/plain' } });
}
