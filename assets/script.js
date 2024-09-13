document.addEventListener("DOMContentLoaded", () => {
let grid = document.querySelector(".grid");
let result = document.querySelector("#result");
let chosenCard = [];
let cardID = [];
let winningCards = [];

let cardArray = [
  {
    name: "fries",
    img: "./assets/images/fries.png",
  },
  {
    name: "cheeseburger",
    img: "./assets/images/cheeseburger.png",
  },
  {
    name: "ice-cream",
    img: "./assets/images/ice-cream.png",
  },
  {
    name: "pizza",
    img: "./assets/images/pizza.png",
  },
  {
    name: "milkshake",
    img: "./assets/images/milkshake.png",
  },
  {
    name: "hotdog",
    img: "./assets/images/hotdog.png",
  },
  {
    name: "fries",
    img: "./assets/images/fries.png",
  },
  {
    name: "cheeseburger",
    img: "./assets/images/cheeseburger.png",
  },
  {
    name: "ice-cream",
    img: "./assets/images/ice-cream.png",
  },
  {
    name: "pizza",
    img: "./assets/images/pizza.png",
  },
  {
    name: "milkshake",
    img: "./assets/images/milkshake.png",
  },
  {
    name: "hotdog",
    img: "./assets/images/hotdog.png",
  },
];


function createBoard() {
  for (let i = 0; i < cardArray.length; i++) {
    let square = document.createElement("img");
    square.setAttribute("src", "./assets/images/blank.png")
    square.setAttribute("data-id", i)
    square.addEventListener("click", flipCard)
    grid.appendChild(square);
  }
}

function checkMatches() {
  let squares = document.querySelectorAll("img");
  const one = cardID[0];
  const two = cardID[1];
  if (one == two) {
    squares[one].setAttribute("src", "./assets/images/blank.png");
    squares[two].setAttribute("src", "./assets/images/blank.png");
  } else if (chosenCard[0] === chosenCard[1]) {
    squares[one].setAttribute("src", "./assets/images/white.png");
    squares[two].setAttribute("src", "./assets/images/white.png");
    squares[one].removeEventListener("click", flipCard);
    squares[two].removeEventListener("click", flipCard);
    winningCards.push(chosenCard);
  } else {
    squares[one].setAttribute("src", "./assets/images/blank.png")
    squares[two].setAttribute("src", "./assets/images/blank.png")
  }
  chosenCard = [];
  cardID = [];
  result.textContent = winningCards.length;
  if (winningCards.length === cardArray.length / 2) {
    result.textContent = "Winner winner chicken dinner";

  }
}

function flipCard() {
  let cardIDs = this.getAttribute("data-id");
  chosenCard.push(cardArray[cardIDs].name);
  cardID.push(cardIDs);
  this.setAttribute("src", cardArray[cardIDs].img)
  if (chosenCard.length === 2) {
    setTimeout(checkMatches, 500);
  }
  // We want to create a variable that allows us to target this and use the getAttribute from  data-id attribute
  // https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes
  // Then we want to push that card we clicked on into the card array we are using to check machines, then we are going to allow for a set time of the card being flipped
}

function shuffle(cardArray) {
  let currentIndex = cardArray.length, randomIndex;
  while (currentIndex > 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [cardArray[currentIndex], cardArray[randomIndex]] =
      [cardArray[randomIndex], cardArray[currentIndex]];
  }
  return cardArray
}


shuffle(cardArray);
createBoard();
})

function Reset(){
  document.querySelectorAll(".grid").value = "";
  location.reload();
}




//create your board
// We need to create our board that houses all of the cards AND allows us to loop through what is on the page and can replace chosen cards with blank ones


//check for matches
// We need to be able to check if the cards we turn match


//flip your card
// Now we need to be able to flip the card then check the what matches


// We need a callback function to make the entire application do something

// HELPFUL METHODS FOR THIS PROJECT
/*
  • push()
  • querySelector()
  • SetAttribute()
  • getAttribute()
  • appendChild()
  • Math.random()
  • sort()
  • For loops
  • createElement()
*/
