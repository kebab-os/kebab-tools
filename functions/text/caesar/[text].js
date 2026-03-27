export async function onRequest(context) {
  const { text } = context.params;
  const lastComma = text.lastIndexOf(',');
  if (lastComma === -1) return new Response('Usage: caesar/text,shift\n', { status: 400, headers: { 'Content-Type': 'text/plain' } });
  const str = text.slice(0, lastComma);
  const shift = ((parseInt(text.slice(lastComma + 1), 10) % 26) + 26) % 26;
  const result = str.replace(/[a-zA-Z]/g, c => {
    const base = c <= 'Z' ? 65 : 97;
    return String.fromCharCode((c.charCodeAt(0) - base + shift) % 26 + base);
  });
  return new Response(result + "\n", { headers: { 'Content-Type': 'text/plain' } });
}
