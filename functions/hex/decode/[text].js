export async function onRequest(context) {
  const { text } = context.params;
  try {
    const str = text.match(/.{1,2}/g).map(byte => String.fromCharCode(parseInt(byte, 16))).join('');
    return new Response(str + "\n", {
      headers: { 'Content-Type': 'text/plain' }
    });
  } catch {
    return new Response("invalid hex\n", {
      headers: { 'Content-Type': 'text/plain' }
    });
  }
}
