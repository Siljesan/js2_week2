const items = [
  {
    id: 1,
    name: "Bob",
    race: "pig",
    img: "https://i.natgeofe.com/k/0ed36c42-672a-425b-9e62-7cc946b98051/pig-fence.jpg",
    type: "vegeterian",
  },
  {
    id: 2,
    name: "Manny",
    race: "man",
    img: "https://i.natgeofe.com/k/0ed36c42-672a-425b-9e62-7cc946b98051/pig-fence.jpg",
    type: "meatlover",
  },
];

const collection = [];

const container = document.querySelector(".cardContainer");
const collContainer = document.querySelector(".collectionContainer");

const renderCollection = () => {
  collContainer.innerHTML = "";

  collection.forEach((element) => {
    collContainer.innerHTML += `<p>${element}</p>`;
  });
};

const appendListeners = () => {
  const btns = document.querySelectorAll(".cardBtn");
  for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", (e) => {
      console.log(e.target.id);
      collection.push(e.target.id);

      renderCollection();
    });
  }
};

items.forEach((element) => {
  const btn = `<button type="button" id="${element.name}" class="cardBtn">Add me</button>`;
  const cardText = `
  <div class="card__text">
    <h2>${element.name}</h2>
    <p>${element.race}</p>
    <p>${element.type}</p>
    </div>`;

  container.innerHTML += `
    <div class="card">
    <img class="card__img" src="${element.img}" alt="">
    ${cardText}
    ${btn}
    </div>`;
});
appendListeners();

const renderCard = (item) => {
  const { name, race, type, img } = item;
  const btn = `<button type="button" id="${name}" class="cardBtn">Add me</button>`;
  const hName = `<h2>${name}</h2>`;
  const hRace = `<h3>${race}</h3>`;
  const hType = `<h3>${type}</h3>`;
};

renderCard(items[1]);
