export async function onRequest(context) {
  const { text } = context.params;
  const words = text.split(/\s+/);
  const seen = new Set();
  const unique = words.filter(w => {
    const key = w.toLowerCase();
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
  return new Response(unique.join(' ') + "\n", { headers: { 'Content-Type': 'text/plain' } });
}
