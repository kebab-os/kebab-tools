export async function onRequest() {
  const message = `
Report any issues at:
https://github.com/kebab-os/kebab-tools/issues\N
`;
  
  return new Response(message, {
    headers: { 'Content-Type': 'text/plain' }
  });
}
