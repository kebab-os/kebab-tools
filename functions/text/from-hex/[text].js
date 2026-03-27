export async function onRequest(context) {
  const { text } = context.params;
  const hexParts = text.trim().replace(/\s+/g, ' ').split(' ');
  try {
    const bytes = new Uint8Array(hexParts.map(h => parseInt(h, 16)));
    const result = new TextDecoder().decode(bytes);
    return new Response(result + "\n", { headers: { 'Content-Type': 'text/plain' } });
  } catch {
    return new Response('Invalid hex string\n', { status: 400, headers: { 'Content-Type': 'text/plain' } });
  }
}
