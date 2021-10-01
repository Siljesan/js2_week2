const items = [
  {
    id: 1,
    name: "Bob",
    race: "pig",
    img: "https://i.natgeofe.com/k/0ed36c42-672a-425b-9e62-7cc946b98051/pig-fence.jpg",
    type: "vegeterian",
    rarity: "Common",
  },
  {
    id: 2,
    name: "Manny",
    race: "man",
    img: "https://i.natgeofe.com/k/0ed36c42-672a-425b-9e62-7cc946b98051/pig-fence.jpg",
    type: "meatlover",
    rarity: "Uncommon",
  },
];

const collection = [];

const container = document.querySelector(".cardContainer");
const collContainer = document.querySelector(".collectionContainer");

const findIndex = (array, item) => {
  return array
    .map((x) => {
      return x.id;
    })
    .indexOf(item.id);
};

const createCard = (item, version) => {
  const { id, name, race, type, img, rarity } = item;

  return `
  <div class="card ${rarityClass(rarity)}">
    <h2>${name}</h2>
    <p>${race}</p>
    <p>${type}</p>
    <button class="cardBtn" id="${id}-${version}">Hello</button>
    </div>
  `;
};

const checkObj = (obj, arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === obj) {
      return true;
    }
  }
  return false;

  /*arr.forEach((element) => {
    if (element === obj) {
      return true;
    }
    return false;
  });*/
};

const rarityClass = (rarity) => {
  switch (rarity) {
    case "Common":
      return "common";
    case "Uncommon":
      return "uncommon";
    case "Rare":
      return "rare";
    case "Legendary":
      return "legendary";
  }
};

const renderCollection = () => {
  collContainer.innerHTML = "";
  collection.forEach((item) => {
    collContainer.innerHTML += createCard(item, "remove");
  });
  removeListener();
};

const addListener = () => {
  items.forEach((item) => {
    document.getElementById(`${item.id}-add`).addEventListener("click", () => {
      if (checkObj(item, collection)) {
        return;
      } else {
        collection.push(items[findIndex(items, item)]);
        renderCollection();
      }
    });
  });
};

const removeListener = () => {
  collection.forEach((item) => {
    document
      .getElementById(`${item.id}-remove`)
      .addEventListener("click", () => {
        findIndex(collection, item);
        collection.splice(findIndex(collection, item), 1);

        console.log(collection);
        renderCollection();
      });
  });
};

const renderCard = () => {
  container.innerHTML = "";
  items.forEach((item) => {
    container.innerHTML += createCard(item, "add");
  });
  addListener();
};

renderCard();

/*const renderCollection = () => {
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
appendListeners();*/
