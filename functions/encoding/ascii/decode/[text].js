export async function onRequest(context) {
  const { text } = context.params;
  const codes = text.trim().split(/\s+/).map(Number);
  if (codes.some(isNaN)) return new Response('Invalid ASCII codes\n', { status: 400, headers: { 'Content-Type': 'text/plain' } });
  const result = codes.map(c => String.fromCharCode(c)).join('');
  return new Response(result + "\n", { headers: { 'Content-Type': 'text/plain' } });
}
