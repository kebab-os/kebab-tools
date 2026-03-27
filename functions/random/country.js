export async function onRequest() {
  const countries = ['Afghanistan','Albania','Algeria','Argentina','Australia','Austria','Belgium','Brazil','Canada','Chile','China','Colombia','Croatia','Czech Republic','Denmark','Egypt','Finland','France','Germany','Greece','Hungary','India','Indonesia','Iran','Iraq','Ireland','Israel','Italy','Japan','Jordan','Kenya','South Korea','Mexico','Netherlands','New Zealand','Nigeria','Norway','Pakistan','Peru','Philippines','Poland','Portugal','Romania','Russia','Saudi Arabia','South Africa','Spain','Sweden','Switzerland','Thailand','Turkey','Ukraine','United Kingdom','United States','Vietnam'];
  const bytes = crypto.getRandomValues(new Uint8Array(1));
  return new Response(countries[bytes[0] % countries.length] + "\n", { headers: { 'Content-Type': 'text/plain' } });
}
