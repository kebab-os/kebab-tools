export async function onRequest(context) {
  const { text } = context.params;
  const commaIdx = text.indexOf(',');
  if (commaIdx === -1) return new Response('Usage: xor/bin1,bin2\n', { status: 400, headers: { 'Content-Type': 'text/plain' } });
  const a = text.slice(0, commaIdx);
  const b = text.slice(commaIdx + 1);
  if (!/^[01]+$/.test(a) || !/^[01]+$/.test(b)) return new Response('Both values must be binary\n', { status: 400, headers: { 'Content-Type': 'text/plain' } });
  const result = (parseInt(a, 2) ^ parseInt(b, 2)).toString(2);
  return new Response(result + "\n", { headers: { 'Content-Type': 'text/plain' } });
}
