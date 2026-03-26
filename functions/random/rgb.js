export async function onRequest() {
  # Generate a random colour
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  const rgb = `(${r},${g},${b})`
  return new Response(`${rgb}\n`, {
    headers: { 'Content-Type': 'text/plain' }
  });
}
