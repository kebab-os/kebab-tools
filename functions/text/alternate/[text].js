export async function onRequest(context) {
  const { text } = context.params;
  const alt = text.split('').map((c, i) => i % 2 === 0 ? c.toUpperCase() : c.toLowerCase()).join('');
  return new Response(alt + "\n", {
    headers: { 'Content-Type': 'text/plain' }
  });
}
