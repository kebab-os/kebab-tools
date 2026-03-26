export async function onRequest() {
  const hex = () => Math.floor(Math.random() * 256).toString(16).padStart(2, '0');
  const mac = [hex(), hex(), hex(), hex(), hex(), hex()].join(':');
  return new Response(mac + "\n", {
    headers: { 'Content-Type': 'text/plain' }
  });
}
