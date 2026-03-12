export async function onRequest(context) {
  const { text } = context.params;
  const bin = text.split('').map(c => c.charCodeAt(0).toString(2).padStart(8, '0')).join(' ');
  return new Response("k| " + bin + "\n", {
    headers: { 'Content-Type': 'text/plain' }
  });
}
