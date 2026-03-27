export async function onRequest() {
  const randomHex = () => {
    const bytes = crypto.getRandomValues(new Uint8Array(3));
    return '#' + Array.from(bytes).map(b => b.toString(16).padStart(2,'0')).join('');
  };
  const palette = Array.from({length: 5}, randomHex);
  return new Response(palette.join('\n') + "\n", { headers: { 'Content-Type': 'text/plain' } });
}
