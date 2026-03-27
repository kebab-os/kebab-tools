export async function onRequest(context) {
  const { text } = context.params;
  const result = Array.from(text).map(c => {
    const code = c.codePointAt(0);
    return code > 127 ? `\\u${code.toString(16).padStart(4, '0')}` : c;
  }).join('');
  return new Response(result + "\n", { headers: { 'Content-Type': 'text/plain' } });
}
