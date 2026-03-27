export async function onRequest(context) {
  const { text } = context.params;
  const result = text.replace(/[!"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~]/g, '');
  return new Response(result + "\n", { headers: { 'Content-Type': 'text/plain' } });
}
