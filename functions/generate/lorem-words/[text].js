export async function onRequest(context) {
  const { text } = context.params;
  const n = Math.min(parseInt(text, 10) || 10, 500);
  if (isNaN(n) || n < 1) return new Response('Provide a count between 1 and 500\n', { status: 400, headers: { 'Content-Type': 'text/plain' } });
  const words = "lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum".split(' ');
  const result = Array.from({length: n}, (_, i) => words[i % words.length]);
  return new Response(result.join(' ') + "\n", { headers: { 'Content-Type': 'text/plain' } });
}
