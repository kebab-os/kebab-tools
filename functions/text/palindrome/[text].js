export async function onRequest(context) {
  const { text } = context.params;
  const cleaned = text.toLowerCase().replace(/[^a-z0-9]/g, '');
  const isPalindrome = cleaned === cleaned.split('').reverse().join('');
  return new Response((isPalindrome ? 'true' : 'false') + "\n", {
    headers: { 'Content-Type': 'text/plain' }
  });
}
