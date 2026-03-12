export async function onRequest(context) {
  const { text } = context.params;
  const encoder = new TextEncoder();
  const data = encoder.encode(text);
  const hashBuffer = await crypto.subtle.digest('MD5', data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
  return new Response("k| " + hashHex + "\n", {
    headers: { 'Content-Type': 'text/plain' }
  });
}
