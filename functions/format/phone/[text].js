export async function onRequest(context) {
  const { text } = context.params;
  const digits = text.replace(/\D/g, '');
  if (digits.length === 10) {
    return new Response(`(${digits.slice(0,3)}) ${digits.slice(3,6)}-${digits.slice(6)}\n`, { headers: { 'Content-Type': 'text/plain' } });
  } else if (digits.length === 11 && digits[0] === '1') {
    return new Response(`+1 (${digits.slice(1,4)}) ${digits.slice(4,7)}-${digits.slice(7)}\n`, { headers: { 'Content-Type': 'text/plain' } });
  }
  return new Response('Unable to format: expected 10 or 11 digits\n', { status: 400, headers: { 'Content-Type': 'text/plain' } });
}
