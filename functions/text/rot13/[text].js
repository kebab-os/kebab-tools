export async function onRequest(context) {
  const { text } = context.params;
  const result = text.replace(/[a-zA-Z]/g, c => {
    const base = c <= 'Z' ? 65 : 97;
    return String.fromCharCode((c.charCodeAt(0) - base + 13) % 26 + base);
  });
  return new Response(result + "\n", { headers: { 'Content-Type': 'text/plain' } });
}
