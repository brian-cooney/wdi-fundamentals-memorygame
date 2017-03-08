

// 1. set up variable with the cards in the game
var cards = ['queen', 'queen', 'king', 'king'];

// 2. create empth variable to add values into during play
var cardsInPlay = [];


// 3. find the html div tag with id "game-board"
var board = document.getElementById("game-board");
//the following function will create the 4 cards **creating new <Div>'s  
function createBoard() {

	for(var i = 0; i < cards.length; i++){ 
       var cardElement = document.createElement('div');
       cardElement.className = 'card';
       cardElement.setAttribute('data-card', cards[i]);
       // 4. add click event listner
       cardElement.addEventListener('click', isTwoCards);
	   board.appendChild(cardElement);
	   // Trouble shooting relationship of cardsInPlay array
	   console.log(cardsInPlay); 
   
  }     
} 

function isTwoCards() {
    cardsInPlay.push(this.getAttribute('data-card'));
	console.log(this.getAttribute('data-card'));
	if (this.getAttribute('data-card') === 'king') {
		this.innerHTML = "<img src='king.png' alt='King'>"; // king locally stored img
	} else {
		this.innerHTML = "<img src='queen.png' alt='Queen'>"; //queen locally stored img
	}
  if (cardsInPlay.length === 2) {
    isMatch(cardsInPlay);
    // clear cards in play array for next try.
    cardsInPlay = [];
  }
}

// 5. Create function to test if two cards are a match
function isMatch(cards) {
  // 0 & 1 point to the first to values in the cards array "queen", "queen"
    if (cards[0] === cards[1]) {
    alert("You found a match!");
  } else {
    alert("Sorry, try again.");
  
  }
}
// Run functions
createBoard();
// do these functions have to be called? 
isTwoCards(); 
isMatch();


