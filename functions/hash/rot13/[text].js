export async function onRequest(context) {
  const { text } = context.params;
  const rot13 = text.replace(/[a-zA-Z]/g, function (c) {
    const base = c <= 'Z' ? 65 : 97;
    return String.fromCharCode((c.charCodeAt(0) - base + 13) % 26 + base);
  });
  return new Response("k| " + rot13 + "\n", {
    headers: { 'Content-Type': 'text/plain' }
  });
}
