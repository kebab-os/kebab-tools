export async function onRequest(context) {
  const { text } = context.params;
  const digits = text.replace(/\D/g, '');
  if (digits.length !== 9) return new Response('SSN must have exactly 9 digits\n', { status: 400, headers: { 'Content-Type': 'text/plain' } });
  return new Response(`${digits.slice(0,3)}-${digits.slice(3,5)}-${digits.slice(5)}\n`, { headers: { 'Content-Type': 'text/plain' } });
}
