console.log("JS file is connected to HTML! Woo!")


/* Create a variable for each memory game card */
var cardOne = "queen"; 
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";


var createCards = function() {

var gameBoard = document.getElementById('game-board');

for (var i = 0; i < cards.length; i++) {
		var cardDiv = document.createElement('div');
		cardDiv.className = 'card';
}
gameBoard.appendChild(cardDiv);
	}
}
}

/*
if (cardOne === cardTwo) {
	alert("You found a match!");
} else if (cardThree === cardFour) {
	alert("You found a match!");
} else {
	alert("sorry, try again.");
}
*/

