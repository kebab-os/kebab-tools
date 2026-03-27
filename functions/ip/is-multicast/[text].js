export async function onRequest(context) {
  const { text } = context.params;
  const parts = text.split('.').map(Number);
  const isMulticast = parts.length === 4 && parts[0] >= 224 && parts[0] <= 239;
  return new Response((isMulticast ? 'true' : 'false') + "\n", { headers: { 'Content-Type': 'text/plain' } });
}
