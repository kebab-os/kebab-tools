export async function onRequest(context) {
  const { text } = context.params;
  const commaIndex = text.indexOf(',');
  if (commaIndex === -1) {
    return new Response('Invalid input. Use format: pattern,text (e.g. \\d+,hello 123)\n', {
      status: 400,
      headers: { 'Content-Type': 'text/plain' }
    });
  }
  const pattern = text.slice(0, commaIndex);
  const str = text.slice(commaIndex + 1);
  try {
    const re = new RegExp(pattern);
    const result = re.test(str);
    return new Response((result ? 'true' : 'false') + "\n", {
      headers: { 'Content-Type': 'text/plain' }
    });
  } catch (e) {
    return new Response(`Invalid regex: ${e.message}\n`, {
      status: 400,
      headers: { 'Content-Type': 'text/plain' }
    });
  }
}
