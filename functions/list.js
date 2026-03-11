export async function onRequest(context) {
  const url = new URL('/list.json', context.request.url);
  const res = await fetch(url);
  const data = await res.json();

  // 1. Process the array
  const formattedData = data.map(item => {
    if (item.endsWith('.js')) {
      // It's a file: remove the .js extension
      return item.slice(0, -3);
    } else {
      // It's a folder (no .js): add /...
      return `${item}/...`;
    }
  });

  // 2. Return the formatted array
  const output = JSON.stringify(formattedData, null, 2) + "\n";
  
  return new Response(output, {
    headers: { 'Content-Type': 'application/json' }
  });
}
