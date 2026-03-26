export async function onRequest(context) {
  const { text } = context.params;
  const commaIndex = text.indexOf(',');
  if (commaIndex === -1) {
    return new Response('Invalid input. Use format: text,substring (e.g. hello world,world)\n', {
      status: 400,
      headers: { 'Content-Type': 'text/plain' }
    });
  }
  const str = text.slice(0, commaIndex);
  const sub = text.slice(commaIndex + 1);
  const result = str.split(sub).join('');
  return new Response(result + "\n", {
    headers: { 'Content-Type': 'text/plain' }
  });
}
