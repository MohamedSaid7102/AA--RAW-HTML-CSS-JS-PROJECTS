// Utils
// Data -----------------------------------------------------
// images path is absolute to be accessable for every one
const imageData = [
  {
    url: 'https://images.pexels.com/photos/8120844/pexels-photo-8120844.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    name: '101',
  },
  {
    url: 'https://images.pexels.com/photos/8120844/pexels-photo-8120844.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    name: '101-copy',
  },
  {
    url: 'https://images.pexels.com/photos/4982878/pexels-photo-4982878.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    name: '102',
  },
  {
    url: 'https://images.pexels.com/photos/4982878/pexels-photo-4982878.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    name: '102-copy',
  },
  {
    url: 'https://images.pexels.com/photos/3112898/pexels-photo-3112898.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    name: '103',
  },
  {
    url: 'https://images.pexels.com/photos/3112898/pexels-photo-3112898.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    name: '103-copy',
  },
  {
    url: 'https://images.pexels.com/photos/164634/pexels-photo-164634.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    name: '104',
  },
  {
    url: 'https://images.pexels.com/photos/164634/pexels-photo-164634.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    name: '104-copy',
  },
  {
    url: 'https://images.pexels.com/photos/120049/pexels-photo-120049.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    name: '105',
  },
  {
    url: 'https://images.pexels.com/photos/120049/pexels-photo-120049.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    name: '105-copy',
  },
  {
    url: 'https://images.pexels.com/photos/1034662/pexels-photo-1034662.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    name: '106',
  },
  {
    url: 'https://images.pexels.com/photos/1034662/pexels-photo-1034662.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    name: '106-copy',
  },
];

// Utilities functions ---------------------------------------
function shuffleArray(arr) {
  return arr.sort(() => Math.random() - 0.5);
}

function isEquale(card1, card2) {
  let card1Name = card1.getAttribute('name');
  let card2Name = card2.getAttribute('name');
  return card1Name === card2Name + '-copy' || card2Name === card1Name + '-copy';
}

// Main Script ----------------------------------------------
// Global variables
const cardsScene = document.querySelector('.cards-scene');
let score = document.querySelector('#game_score');
let tries = document.querySelector('#game_tries');
// First: shuffle the data every time page loaded to make the game different every time
let shuffledImagesData = shuffleArray(shuffleArray(imageData)); // shuffle it twise.
let flippedCards = [];

function createCard(name, imgSrc, imgAlt) {
  const card = document.createElement('div');
  card.setAttribute('name', name); // set the name of the image as an attribute name
  card.classList.add('card'); // add a class to indecate it
  // This card will rotate 3D so we need a front and back
  const cardBack = document.createElement('div');
  cardBack.classList.add('card__back'); // add a class to indecate it
  const cardFront = document.createElement('img');
  cardFront.classList.add('card__front'); // add a class to indecate it
  // Setting image data
  cardFront.src = imgSrc;
  cardFront.alt = imgAlt;

  card.appendChild(cardBack);
  card.appendChild(cardFront);

  return card;
}

function makeTheBoard() {
  shuffledImagesData.forEach((item) => {
    // for each item in the data list make a new card
    const card = createCard(item.name, item.url, item.name);

    card.addEventListener('click', (e) => {
      e.target.classList.add('flipped'); //flip the card by adding flipped class

      // Add the card to the flipped cards to check
      if (flippedCards.indexOf(e.target.getAttribute('name')) === -1) {
        // to check this is not the same items
        flippedCards.push(e.target);
      }

      checkCards(e);
    });

    cardsScene.appendChild(card);
  });
}

// From HERE ˕

function checkCards(e) {
  // if their is an even number of cards -> check last 2
  if (flippedCards.length % 2 === 0) {
    //that means that we have 2 faces flipped
    tries.innerText = parseFloat(tries.textContent) + 1; // and every time user make a try increase tries number
    checkEquality(flippedCards[flippedCards.indexOf(e.target) - 1], e.target); // make the logic for checking user choice
  }
}

function checkEquality(card1, card2) {
  isEquale(card1, card2) ? rightAnswer() : wrongAnswer(card1, card2);
}

function rightAnswer() {
  score.innerText = parseFloat(score.textContent) + 1;
}

function wrongAnswer(card1, card2) {
  setTimeout(() => {
    card1.classList.remove('flipped');
    card2.classList.remove('flipped');
    flippedCards.splice(flippedCards.indexOf(card1), 1);
    flippedCards.splice(flippedCards.indexOf(card2), 1);
    console.log(flippedCards);
    currentFlipped.length = 0;
  }, 700);
}

// Invoking methods
makeTheBoard();
