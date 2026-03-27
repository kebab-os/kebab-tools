export async function onRequest(context) {
  const { text } = context.params;
  const result = text.replace(/([a-z])([A-Z])/g, '$1 $2').replace(/[^a-zA-Z0-9]+/g, ' ').trim().split(' ').filter(Boolean).map(w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()).join('');
  return new Response(result + "\n", { headers: { 'Content-Type': 'text/plain' } });
}
