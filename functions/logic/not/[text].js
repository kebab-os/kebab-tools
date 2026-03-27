export async function onRequest(context) {
  const { text } = context.params;
  const falsy = ['false','0','no','off',''];
  const result = falsy.includes(text.trim().toLowerCase());
  return new Response((result ? 'true' : 'false') + "\n", { headers: { 'Content-Type': 'text/plain' } });
}
