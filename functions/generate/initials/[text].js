export async function onRequest(context) {
  const { text } = context.params;
  const initials = text.trim().split(/\s+/).map(w => w[0]?.toUpperCase() || '').join('');
  return new Response(initials + "\n", { headers: { 'Content-Type': 'text/plain' } });
}
