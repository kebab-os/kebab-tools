export async function onRequest(context) {
  const { text } = context.params;

  try {
    const res = await fetch(`https://ipinfo.io/${text}/json`);
    if (!res.ok) {
      return new Response(JSON.stringify({ error: 'Could not fetch IP info' }) + "\n", {
        status: res.status,
        headers: { 'Content-Type': 'application/json' }
      });
    }
    const data = await res.json();
    return new Response(JSON.stringify(data, null, 2) + "\n", {
      headers: { 'Content-Type': 'application/json' }
    });
  } catch {
    return new Response(JSON.stringify({ error: 'Failed to fetch IP info' }) + "\n", {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
