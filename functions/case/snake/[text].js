export async function onRequest(context) {
  const { text } = context.params;
  const snake = text.replace(/\W+/g, " ").split(/ |\B(?=[A-Z])/).map(word => word.toLowerCase()).join('_');
  return new Response("k| " + snake + "\n", {
    headers: { 'Content-Type': 'text/plain' }
  });
}
