import { apiUrl } from "./constants.js";
import { cardCont } from "./constants.js";
import { collCont } from "./constants.js";

window.localStorage;

let collection = [];
let items = [];
let localCollection = JSON.parse(window.localStorage.getItem("cardArr"));

const findIndex = (array, item) => {
  return array
    .map((x) => {
      return x.id;
    })
    .indexOf(item.id);
};

const checkObj = (obj, arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === obj) {
      return true;
    }
  }
  return false;
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
  collCont.innerHTML = "";
  collection.forEach((item) => {
    collCont.innerHTML += createCard(item, "remove");
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
        window.localStorage.setItem("cardArr", JSON.stringify(collection));
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
        window.localStorage.setItem("cardArr", JSON.stringify(collection));
        renderCollection();
      });
  });
};

const renderCard = () => {
  cardCont.innerHTML = "";
  items.forEach((item) => {
    cardCont.innerHTML += createCard(item, "add");
  });
  addListener();
};

async function getCards(url) {
  const response = await fetch(url);
  const cardsObj = await response.json();
  console.log(cardsObj.cards);
  items = cardsObj.cards;
  renderCard();
}

const createCard = (item, version) => {
  const { id, name, type, imageUrl, rarity } = item;

  return `
    <div class="card ${rarityClass(rarity)}">
      <img class="card__img" src="${imageUrl}" alt="">
      <h2>${name}</h2>
      <p>${type}</p>
      <button class="cardBtn" id="${id}-${version}">Hello</button>
      </div>
    `;
};

getCards(apiUrl);
