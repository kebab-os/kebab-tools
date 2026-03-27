export async function onRequest() {
  const colors = ['red','crimson','coral','orange','amber','yellow','lime','green','teal','cyan','sky','blue','indigo','violet','purple','pink','rose','maroon','olive','navy','turquoise','magenta','lavender','salmon','ivory','silver','gold','bronze'];
  const bytes = crypto.getRandomValues(new Uint8Array(1));
  return new Response(colors[bytes[0] % colors.length] + "\n", { headers: { 'Content-Type': 'text/plain' } });
}
