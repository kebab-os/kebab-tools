export async function onRequest(context) {
  const { request } = context;
  const accept = request.headers.get("accept") || "";

  // If the requester prefers HTML (standard for browsers), redirect them
  if (accept.includes("text/html")) {
    const url = new URL(request.url);
    return Response.redirect(`${url.origin}/web.html`, 302);
  }

  // Otherwise, serve the CLI message
  const message = `
HOME | kebab-tools
========================================

Welcome to kebab-tools! Use this to easily access tools straight from your
terminal, or the web.

Example usage: 'curl https://tools.kebabos.me/random/int'
For full list of tools, read '/list'

---
kebab-tools 2026\n
`;

  return new Response(message, {
    headers: { 'Content-Type': 'text/plain' }
  });
}
