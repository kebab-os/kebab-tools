export async function onRequest() {
  // Generate random hex color
  const color = '#' + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0') + "\n";
  return new Response("k| " + color, {
    headers: { 'Content-Type': 'text/plain' }
  });
}
