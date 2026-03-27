export async function onRequest(context) {
  const { text } = context.params;
  const lastComma = text.lastIndexOf(',');
  const n = lastComma !== -1 ? parseInt(text.slice(lastComma + 1), 10) : NaN;
  const listStr = !isNaN(n) ? text.slice(0, lastComma) : text;
  const count = !isNaN(n) ? n : 1;
  const items = listStr.split(',').map(s => s.trim()).filter(Boolean);
  return new Response(items.slice(-count).join(', ') + "\n", { headers: { 'Content-Type': 'text/plain' } });
}
