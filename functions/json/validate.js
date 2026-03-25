export async function onRequest(context) {
  const { request } = context;
  let raw;

  if (request.method === 'POST') {
    raw = await request.text();
  } else {
    const url = new URL(request.url);
    raw = url.searchParams.get('data') || '';
  }

  if (!raw.trim()) {
    return new Response('No JSON provided. POST a body or use ?data=...\n', {
      status: 400,
      headers: { 'Content-Type': 'text/plain' }
    });
  }

  try {
    JSON.parse(raw);
    return new Response('valid\n', {
      headers: { 'Content-Type': 'text/plain' }
    });
  } catch (e) {
    return new Response(`invalid: ${e.message}\n`, {
      status: 400,
      headers: { 'Content-Type': 'text/plain' }
    });
  }
}
