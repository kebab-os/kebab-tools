export async function onRequest() {
  // Random ASCII art face
  const faces = ['(◕‿◕)', '(╯°□°)╯', '(ಠ_ಠ)', '¯\\_(ツ)_/¯', '(╯°Д°)╯'];
  const face = faces[Math.floor(Math.random() * faces.length)] + "\n";
  return new Response("k| " + face, {
    headers: { 'Content-Type': 'text/plain' }
  });
}
