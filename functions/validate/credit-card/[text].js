export async function onRequest(context) {
  const { text } = context.params;
  const digits = text.replace(/[\s\-]/g, '');
  if (!/^\d{13,19}$/.test(digits)) return new Response('false\n', { headers: { 'Content-Type': 'text/plain' } });
  let sum = 0;
  for (let i = 0; i < digits.length; i++) {
    let d = parseInt(digits[digits.length - 1 - i], 10);
    if (i % 2 === 1) { d *= 2; if (d > 9) d -= 9; }
    sum += d;
  }
  return new Response((sum % 10 === 0 ? 'true' : 'false') + "\n", { headers: { 'Content-Type': 'text/plain' } });
}
