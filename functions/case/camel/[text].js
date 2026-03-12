export async function onRequest(context) {
  const { text } = context.params;
  const camel = text.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase());
  return new Response("k| " + camel + "\n", {
    headers: { 'Content-Type': 'text/plain' }
  });
}
