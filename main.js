"use strict";

// const loadNewsFromAPI = () => {
//   fetch(
//     "https://newsapi.org/v2/everything?q=tesla&from=2022-08-24&sortBy=publishedAt&apiKey=78052199596148558787b2fe25e032c1"
//   )
//     .then((response) => response.json())
//     .then((data) => console.log(data));
// };

// // loadNewsFromAPI();

// const insertLeftContainerColumn = () => {
//   let newsElementLeftContainer = `
//       <div class="news-left-container"></div>
//       `;
//   let newsContainerSelectorLeft =
//     document.getElementsByClassName("container-0")[0];
//   newsContainerSelectorLeft.insertAdjacentHTML(
//     "afterbegin",
//     newsElementLeftContainer
//   );
// };

// const insertRightContainerColumn = () => {
//   let newsElementRightContainer = `
//       <div class="news-right-container">
//       `;
//   let newsContainerSelectorRight = document.getElementsByClassName(
//     "news-right-column-container"
//   )[0];
//   newsContainerSelectorRight.insertAdjacentHTML(
//     "afterbegin",
//     newsElementRightContainer
//   );
// };

// const insertNewsIntoApp = () => {
//   insertLeftContainerColumn();
//   insertRightContainerColumn();
// };

// insertNewsIntoApp();

// // Button Selectors //
const elClassicoButton = document.getElementById("el-classico");
const theReaderButton = document.getElementById("the-reader");
// const feedDeckButton = document.getElementById("feed-deck");
// const frontHandsButton = document.getElementById("front-hands");
// const newsFreakButton = document.getElementById("news-freak");
// const leftHandedButton = document.getElementById("left-handed");
// const designGeekButton = document.getElementById("design-geek");
// const crossEyedButton = document.getElementById("cross-eyed");
// const cockPitButton = document.getElementById("cock-pit");

// // Container Selector //
const mainContainer = document.getElementsByClassName("main-container")[0];
const leftContainer = document.getElementsByClassName("left-container")[0];
const rightContainer = document.getElementsByClassName("right-container")[0];

// // Previous Style Remover //
const removeLayoutStyle = () => {
  mainContainer.removeAttribute("class");
  leftContainer.removeAttribute("class");
  rightContainer.removeAttribute("class");
};

const activateElClassico = () => {
  elClassicoButton.addEventListener("click", () => {
    removeLayoutStyle();
    mainContainer.classList.add("main-container-el-classico");
    leftContainer.classList.add("left-container-el-classico");
    rightContainer.classList.add("right-container-el-classico");
  });
};

const activateTheReader = () => {
  theReaderButton.addEventListener("click", () => {
    removeLayoutStyle();
    mainContainer.classList.add("main-container-the-reader");
    leftContainer.classList.add("left-container-the-reader");
    rightContainer.classList.add("right-container-the-reader");
  });
};

// const activateFeedDeck = () => {};

// const activateFrontHands = () => {};

// const activateNewsFreak = () => {};

// const activateLeftHanded = () => {};

// const activateDesignGeek = () => {};

// const activateCrossEyed = () => {};

// const activateCockPit = () => {};

activateElClassico();
activateTheReader();
// activateFeedDeck();
// activateFrontHands();
// activateNewsFreak();
// activateLeftHanded();
// activateDesignGeek();
// activateCrossEyed();
// activateCockPit();
