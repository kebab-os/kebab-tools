export async function onRequest(context) {
  // Access the static JSON file created during build
  const url = new URL('/files.json', context.request.url);
  const response = await fetch(url);
  const data = await response.json();

  return new Response(JSON.stringify({ files: data }), {
    headers: { 'Content-Type': 'application/json' }
  });
}
