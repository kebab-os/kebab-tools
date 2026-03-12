export async function onRequest(context) {
  const { text } = context.params;
  const pig = text.split(/\s+/).map(word => {
    if (!word) return '';
    const vowels = 'aeiouAEIOU';
    if (vowels.includes(word[0])) return word + 'way';
    const i = word.split('').findIndex(c => vowels.includes(c));
    if (i === -1) return word + 'ay';
    return word.slice(i) + word.slice(0, i) + 'ay';
  }).join(' ');
  return new Response("k| " + pig + "\n", {
    headers: { 'Content-Type': 'text/plain' }
  });
}
