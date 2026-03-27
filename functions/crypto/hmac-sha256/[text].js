export async function onRequest(context) {
  const { text } = context.params;
  const commaIdx = text.indexOf(',');
  if (commaIdx === -1) return new Response('Usage: hmac-sha256/message,key\n', { status: 400, headers: { 'Content-Type': 'text/plain' } });
  const message = text.slice(0, commaIdx);
  const secret = text.slice(commaIdx + 1);
  const encoder = new TextEncoder();
  const keyData = encoder.encode(secret);
  const msgData = encoder.encode(message);
  const key = await crypto.subtle.importKey('raw', keyData, { name: 'HMAC', hash: 'SHA-256' }, false, ['sign']);
  const sig = await crypto.subtle.sign('HMAC', key, msgData);
  const hex = Array.from(new Uint8Array(sig)).map(b => b.toString(16).padStart(2, '0')).join('');
  return new Response(hex + "\n", { headers: { 'Content-Type': 'text/plain' } });
}
