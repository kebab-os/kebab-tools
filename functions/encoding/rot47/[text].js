export async function onRequest(context) {
  const { text } = context.params;
  const result = text.replace(/[!-~]/g, c => {
    return String.fromCharCode(((c.charCodeAt(0) - 33 + 47) % 94) + 33);
  });
  return new Response(result + "\n", { headers: { 'Content-Type': 'text/plain' } });
}
