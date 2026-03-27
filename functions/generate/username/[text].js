export async function onRequest(context) {
  const { text } = context.params;
  const name = text.trim().toLowerCase().replace(/[^a-z0-9]/g, '');
  const bytes = crypto.getRandomValues(new Uint8Array(2));
  const suffix = ((bytes[0] << 8) | bytes[1]) % 10000;
  return new Response(name + suffix + "\n", { headers: { 'Content-Type': 'text/plain' } });
}
