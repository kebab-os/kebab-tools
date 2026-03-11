export async function onRequest(context) {
  const url = new URL('/list.json', context.request.url);
  const res = await fetch(url);
  const data = await res.json();

  return new Response(JSON.stringify(data));
}
