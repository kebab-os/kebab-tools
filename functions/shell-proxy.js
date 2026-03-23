export async function onRequest(context) {
    const { searchParams } = new URL(context.request.url);
    const path = searchParams.get('path') || 'version';
    
    // We target the live tools.kebabos.me (which is this same project)
    const targetUrl = `https://tools.kebabos.me/${path}`;

    try {
        const response = await fetch(targetUrl, {
            headers: {
                'User-Agent': 'curl/7.81.0' // Matches your Python script logic
            }
        });

        const data = await response.text();

        return new Response(data, {
            headers: {
                'Content-Type': 'text/plain',
                'Access-Control-Allow-Origin': '*' // Allows your web.html to call it
            }
        });
    } catch (error) {
        return new Response(`Error: ${error.message}`, { status: 500 });
    }
}
