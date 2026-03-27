export async function onRequest(context) {
  const { text } = context.params;
  try {
    const result = text.replace(/\\u([0-9a-fA-F]{4})/g, (_, hex) =>
      String.fromCodePoint(parseInt(hex, 16))
    );
    return new Response(result + "\n", { headers: { 'Content-Type': 'text/plain' } });
  } catch {
    return new Response('Invalid unicode escape sequence\n', { status: 400, headers: { 'Content-Type': 'text/plain' } });
  }
}
