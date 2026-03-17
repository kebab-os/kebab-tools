export async function onRequest(context) {
  const { text } = context.params;
  try {
    const str = text.split(/\s+/).map(b => String.fromCharCode(parseInt(b, 2))).join('');
    return new Response(str + "\n", {
      headers: { 'Content-Type': 'text/plain' }
    });
  } catch {
    return new Response("invalid binary\n", {
      headers: { 'Content-Type': 'text/plain' }
    });
  }
}
