export async function onRequest() {
  const adj = ['cool','dark','swift','bright','silent','brave','smart','quick','bold','calm'];
  const noun = ['tiger','panda','wolf','hawk','fox','bear','lion','eagle','shark','owl'];
  const bytes = crypto.getRandomValues(new Uint8Array(3));
  const num = bytes[2] % 1000;
  return new Response(adj[bytes[0] % adj.length] + '_' + noun[bytes[1] % noun.length] + num + "\n", { headers: { 'Content-Type': 'text/plain' } });
}
