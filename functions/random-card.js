export async function onRequest() {
  // Random card from deck
  const suits = ['♠', '♥', '♦', '♣'];
  const ranks = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
  const card = ranks[Math.floor(Math.random() * ranks.length)] + suits[Math.floor(Math.random() * suits.length)] + "\n";
  return new Response("k| " + card, {
    headers: { 'Content-Type': 'text/plain' }
  });
}
