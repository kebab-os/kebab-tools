export async function onRequest(context) {
  const { text } = context.params;
  const lastComma = text.lastIndexOf(',');
  if (lastComma === -1) {
    return new Response('Usage: char-at/string,index\n', { status: 400, headers: { 'Content-Type': 'text/plain' } });
  }
  const str = text.slice(0, lastComma);
  const idx = parseInt(text.slice(lastComma + 1), 10);
  if (isNaN(idx)) {
    return new Response('Index must be a number\n', { status: 400, headers: { 'Content-Type': 'text/plain' } });
  }
  const normalized = idx < 0 ? str.length + idx : idx;
  const char = str[normalized] ?? '';
  return new Response(JSON.stringify(char) + "\n", { headers: { 'Content-Type': 'text/plain' } });
}
