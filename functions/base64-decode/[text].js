export async function onRequest(context) {
  const { text } = context.params;
  
  try {
    const decoded = atob(text);
    return new Response(decoded, {
      headers: { 'Content-Type': 'text/plain' }
    });
  } catch (e) {
    return new Response('Invalid base64', { status: 400 });
  }
}
