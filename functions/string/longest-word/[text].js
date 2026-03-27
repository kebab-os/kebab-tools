export async function onRequest(context) {
  const { text } = context.params;
  const words = text.split(/\s+/).filter(Boolean);
  if (!words.length) return new Response('\n', { headers: { 'Content-Type': 'text/plain' } });
  const longest = words.reduce((a, b) => b.length > a.length ? b : a);
  return new Response(longest + "\n", { headers: { 'Content-Type': 'text/plain' } });
}
