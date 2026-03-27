export async function onRequest(context) {
  const { text } = context.params;
  const encoder = new TextEncoder();
  const data = encoder.encode(text.trim().toLowerCase());
  const hashBuffer = await crypto.subtle.digest('SHA-256', data);
  const hashHex = Array.from(new Uint8Array(hashBuffer)).map(b => b.toString(16).padStart(2, '0')).join('');
  return new Response(`https://www.gravatar.com/avatar/${hashHex}?d=identicon\n`, { headers: { 'Content-Type': 'text/plain' } });
}
