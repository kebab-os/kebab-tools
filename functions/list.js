export async function onRequest(context) {
  const url = new URL('/list.json', context.request.url);
  const res = await fetch(url);
  const data = await res.json();
  const output = JSON.stringify(data) + "\n";
  
  return new Response(output);
}
