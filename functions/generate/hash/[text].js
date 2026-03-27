export async function onRequest(context) {
  const { text } = context.params;
  const data = new TextEncoder().encode(text);
  const hashBuffer = await crypto.subtle.digest('SHA-256', data);
  const hash = Array.from(new Uint8Array(hashBuffer)).map(b => b.toString(16).padStart(2, '0')).join('');
  return new Response(hash + "\n", { headers: { 'Content-Type': 'text/plain' } });
}
