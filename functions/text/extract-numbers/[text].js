export async function onRequest(context) {
  const { text } = context.params;
  const nums = text.match(/-?\d+(\.\d+)?/g) || [];
  return new Response(nums.join('\n') + (nums.length ? '\n' : ''), { headers: { 'Content-Type': 'text/plain' } });
}
