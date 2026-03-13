export async function onRequest(context) {
  const url = new URL('/list.txt', context.request.url);
  const res = await fetch(url);
  const text = await res.text();

  return new Response(text, {
    headers: { 'Content-Type': 'text/plain' }
  });
}
