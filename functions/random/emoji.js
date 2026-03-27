export async function onRequest() {
  const emojis = ['😀','😂','🥰','😎','🤔','😴','🤯','🥳','😤','😭','🤗','😇','🥺','😈','👾','🎉','🔥','💯','✨','🎸','🚀','🌈','🍕','🐱','🐶','🦊','🌸','⚡','🎯','💡'];
  const bytes = crypto.getRandomValues(new Uint8Array(1));
  return new Response(emojis[bytes[0] % emojis.length] + "\n", { headers: { 'Content-Type': 'text/plain' } });
}
