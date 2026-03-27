export async function onRequest(context) {
  const { text } = context.params;
  const clean = text.replace(/^0x/i, '');
  if (!/^[0-9a-fA-F]+$/.test(clean)) return new Response('Invalid hexadecimal number\n', { status: 400, headers: { 'Content-Type': 'text/plain' } });
  return new Response(parseInt(clean, 16).toString(2) + "\n", { headers: { 'Content-Type': 'text/plain' } });
}
