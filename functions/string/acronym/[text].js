export async function onRequest(context) {
  const { text } = context.params;
  const acronym = text.split(/\s+/).filter(Boolean).map(w => w[0]).join('').toUpperCase();
  return new Response(acronym + "\n", { headers: { 'Content-Type': 'text/plain' } });
}
