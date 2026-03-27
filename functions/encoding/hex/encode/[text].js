export async function onRequest(context) {
  const { text } = context.params;
  const hex = Array.from(new TextEncoder().encode(text))
    .map(b => b.toString(16).padStart(2, '0')).join('');
  return new Response(hex + "\n", { headers: { 'Content-Type': 'text/plain' } });
}
