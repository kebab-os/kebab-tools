export async function onRequest(context) {
  const { text } = context.params;
  const output = "k| " + text + "\n";
  return new Response(output, {
    headers: { 'Content-Type': 'text/plain' }
  });
}
