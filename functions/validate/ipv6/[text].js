export async function onRequest(context) {
  const { text } = context.params;
  const full = /^([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}$/;
  const compressed = /^(([0-9a-fA-F]{1,4}:)*)?::(([0-9a-fA-F]{1,4}:)*[0-9a-fA-F]{1,4})?$/;
  const valid = full.test(text) || compressed.test(text);
  return new Response((valid ? 'true' : 'false') + "\n", { headers: { 'Content-Type': 'text/plain' } });
}
