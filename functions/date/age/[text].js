export async function onRequest(context) {
  const { text } = context.params;
  const birth = new Date(text);
  if (isNaN(birth.getTime())) return new Response('Invalid date\n', { status: 400, headers: { 'Content-Type': 'text/plain' } });
  const now = new Date();
  let age = now.getUTCFullYear() - birth.getUTCFullYear();
  const m = now.getUTCMonth() - birth.getUTCMonth();
  if (m < 0 || (m === 0 && now.getUTCDate() < birth.getUTCDate())) age--;
  return new Response(age + "\n", { headers: { 'Content-Type': 'text/plain' } });
}
