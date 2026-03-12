export async function onRequest(context) {
  const { text } = context.params;
  const leet = {
    'a': '4', 'e': '3', 'g': '6', 'i': '1', 'o': '0', 's': '5', 't': '7'
  };
  const result = text.toLowerCase().split('').map(c => leet[c] || c).join('');
  return new Response("k| " + result + "\n", {
    headers: { 'Content-Type': 'text/plain' }
  });
}
