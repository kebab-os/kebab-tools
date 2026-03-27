export async function onRequest() {
  const first = ['Alice','Bob','Charlie','Diana','Eve','Frank','Grace','Henry','Iris','Jack','Kate','Liam','Mia','Noah','Olivia','Paul','Quinn','Rachel','Sam','Tara','Uma','Victor','Wendy','Xena','Yara','Zoe'];
  const last = ['Smith','Jones','Brown','Wilson','Davis','Miller','Moore','Taylor','Anderson','Thomas','Jackson','White','Harris','Martin','Thompson','Garcia','Martinez','Robinson','Clark','Rodriguez'];
  const bytes = crypto.getRandomValues(new Uint8Array(2));
  return new Response(first[bytes[0] % first.length] + ' ' + last[bytes[1] % last.length] + "\n", { headers: { 'Content-Type': 'text/plain' } });
}
