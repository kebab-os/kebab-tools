export async function onRequest(context) {
  const { text } = context.params;
  const clean = text.replace(/\s/g, '');
  if (!/^[0-9a-fA-F]*$/.test(clean) || clean.length % 2 !== 0) {
    return new Response('Invalid hex string\n', { status: 400, headers: { 'Content-Type': 'text/plain' } });
  }
  const bytes = new Uint8Array(clean.length / 2);
  for (let i = 0; i < clean.length; i += 2) {
    bytes[i / 2] = parseInt(clean.slice(i, i + 2), 16);
  }
  return new Response(new TextDecoder().decode(bytes) + "\n", { headers: { 'Content-Type': 'text/plain' } });
}
