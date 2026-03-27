export async function onRequest() {
  const words = [
    'apple','brave','cloud','delta','eagle','flame','grace','horse','ivory','joker',
    'karma','lemon','mango','noble','ocean','piano','quiet','river','stone','tiger',
    'ultra','vivid','water','xenon','yacht','zebra','amber','blaze','crisp','dream',
    'elbow','frost','glare','hazel','inbox','jelly','kneel','lunar','maple','night',
    'olive','pixel','quilt','radar','solar','toast','umbra','vapor','wheat','yodel'
  ];
  const bytes = crypto.getRandomValues(new Uint8Array(4));
  const phrase = Array.from(bytes).map(b => words[b % words.length]).join('-');
  return new Response(phrase + "\n", { headers: { 'Content-Type': 'text/plain' } });
}
