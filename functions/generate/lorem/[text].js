export async function onRequest(context) {
  const { text } = context.params;
  const n = Math.min(parseInt(text, 10) || 1, 10);
  const words = "lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum".split(' ');
  const paragraphs = [];
  for (let p = 0; p < n; p++) {
    const len = 40 + (p * 7) % 30;
    const start = (p * 17) % words.length;
    const w = [];
    for (let i = 0; i < len; i++) w.push(words[(start + i) % words.length]);
    paragraphs.push(w.join(' ').replace(/^\w/, c => c.toUpperCase()) + '.');
  }
  return new Response(paragraphs.join('\n\n') + "\n", { headers: { 'Content-Type': 'text/plain' } });
}
