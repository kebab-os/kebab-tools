export async function onRequest(context) {
  const { text } = context.params;
  const parts = text.split(',');
  if (parts.length < 3) return new Response('Usage: replace/pattern,replacement,string\n', { status: 400, headers: { 'Content-Type': 'text/plain' } });
  const [pattern, replacement, ...rest] = parts;
  const str = rest.join(',');
  try {
    const result = str.replace(new RegExp(pattern, 'g'), replacement);
    return new Response(result + "\n", { headers: { 'Content-Type': 'text/plain' } });
  } catch (e) {
    return new Response(`Invalid regex: ${e.message}\n`, { status: 400, headers: { 'Content-Type': 'text/plain' } });
  }
}
