export async function onRequest(context) {
  const { text } = context.params;
  const decodedText = decodeURIComponent(text);
  
  const qrUrl = `https://api.qrserver.com{encodeURIComponent(decodedText)}`;
  
  const res = await fetch(qrUrl);
  return new Response(res.body, {
    headers: { 'Content-Type': 'image/png' }
  });
}
