var cardText = document.getElementById("card-text");

var createButton = document.getElementById("create");

createButton.addEventListener("click", function() {
	// create new card element
	var card = document.createElement("div");
	// give the card a class
	card.className += "card";
	// grab textarea input and make that a text node for the card
	var cardContent = document.createTextNode(cardText.value);
	// append the textarea input as a child of the div 
	card.appendChild(cardContent);
	// create a delete button
	var deleteButton = document.createElement("button");
	// give it an ID and contents
	deleteButton.id += "delete";
	deleteButton.innerHTML += "Delete";
	// add delete button to the card
	card.appendChild(deleteButton);
	// identify current div for context of where to put card
	var currentDiv = document.getElementById("input");
	// insert the card after the input div 
	document.body.insertBefore(card, currentDiv.nextSibling);
	// reset text area
	cardText.value = "";
	// identify body as parent element of a card
	var body = document.getElementById("body");
	// add event listener to in-card delete button that removes the whole card 
	deleteButton.addEventListener("click", function(){
		body.removeChild(card);
	});
});
