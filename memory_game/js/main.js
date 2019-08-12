console.log("Up and running!");


const cards = ["queen", "queen", "king", "king"];
const cardOne = cards[0];
const cardsInPlay = [];
cardsInPlay.push("card0ne");
console.log("User flipped queen");
const cardTwo = cards[2];
cardsInPlay.push("cardTwo");
console.log("User flipped king");
if (cardsInPlay.length === 2) {
	console.log("length is 2");
} if (cardsInPlay[0] === cardsInPlay[1]) {
	alert("You found a match!"); 
} else {
	alert("Sorry, try again.");
}

