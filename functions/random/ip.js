export async function onRequest() {
  const octet = () => Math.floor(Math.random() * 256);
  const ip = `${octet()}.${octet()}.${octet()}.${octet()}`;
  return new Response(ip + "\n", {
    headers: { 'Content-Type': 'text/plain' }
  });
}
