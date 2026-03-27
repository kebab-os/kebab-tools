export async function onRequest() {
  const users = ['alex','sam','dev','admin','user','test','hello','info','support','contact'];
  const domains = ['example.com','test.org','demo.net','sample.io','fake.dev'];
  const bytes = crypto.getRandomValues(new Uint8Array(3));
  const num = bytes[2] % 1000;
  return new Response(users[bytes[0] % users.length] + num + '@' + domains[bytes[1] % domains.length] + "\n", { headers: { 'Content-Type': 'text/plain' } });
}
