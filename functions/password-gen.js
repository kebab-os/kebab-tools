export async function onRequest(context) {
  const url = new URL(context.request.url);
  const length = parseInt(url.searchParams.get('len')) || 16;
  const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+";
  
  let password = "";
  const array = new Uint32Array(length);
  crypto.getRandomValues(array);
  
  for (let i = 0; i < length; i++) {
    password += charset[array[i] % charset.length];
  }

  return new Response("k| "+ password);
}
