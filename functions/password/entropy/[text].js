export async function onRequest(context) {
  const { text } = context.params;
  let pool = 0;
  if (/[a-z]/.test(text)) pool += 26;
  if (/[A-Z]/.test(text)) pool += 26;
  if (/[0-9]/.test(text)) pool += 10;
  if (/[^a-zA-Z0-9]/.test(text)) pool += 32;
  if (pool === 0) pool = 26;
  const entropy = (text.length * Math.log2(pool)).toFixed(2);
  return new Response(entropy + " bits\n", { headers: { 'Content-Type': 'text/plain' } });
}
