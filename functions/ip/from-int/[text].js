export async function onRequest(context) {
  const { text } = context.params;
  const n = parseInt(text, 10);
  if (isNaN(n) || n < 0 || n > 4294967295) {
    return new Response('Invalid integer (must be 0–4294967295)\n', { status: 400, headers: { 'Content-Type': 'text/plain' } });
  }
  const ip = [(n>>>24)&255,(n>>>16)&255,(n>>>8)&255,n&255].join('.');
  return new Response(ip + "\n", { headers: { 'Content-Type': 'text/plain' } });
}
