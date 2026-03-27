export async function onRequest() {
  const cities = ['New York','Los Angeles','Chicago','Houston','Phoenix','Philadelphia','San Antonio','San Diego','Dallas','San Jose','Austin','Jacksonville','Fort Worth','Columbus','Charlotte','Indianapolis','San Francisco','Seattle','Denver','Nashville','Oklahoma City','El Paso','Washington','Boston','Memphis','Louisville','Portland','Las Vegas','Milwaukee','Albuquerque','London','Paris','Tokyo','Berlin','Madrid','Rome','Amsterdam','Vienna','Prague','Warsaw','Sydney','Melbourne','Toronto','Vancouver','Dubai','Singapore','Hong Kong','Seoul','Mumbai','São Paulo'];
  const bytes = crypto.getRandomValues(new Uint8Array(1));
  return new Response(cities[bytes[0] % cities.length] + "\n", { headers: { 'Content-Type': 'text/plain' } });
}
