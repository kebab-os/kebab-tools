export async function onRequest(context) {
  const { text } = context.params;
  const kebab = text.replace(/([a-z])([A-Z])/g, "$1-$2").replace(/[\s_]+/g, '-').toLowerCase();
  return new Response("k| " + kebab + "\n", {
    headers: { 'Content-Type': 'text/plain' }
  });
}
