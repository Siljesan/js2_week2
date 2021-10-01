export async function getCards(url, container) {
  const response = await fetch(url);
  const cards = await response.json();
  console.log(cards);

  container.innerHTML = "";
}
