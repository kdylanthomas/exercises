var totalPrice = 0;

var selectedToppings = "";

var placeOrder = document.getElementById("place-order");

var finalOrder = document.getElementById("final-order");

var breadSelector = document.getElementById("bread");

breadSelector.addEventListener("change", function(event) {
	for (var i = 0; i < breadSelector.options.length; i++) {
		if (breadSelector.options[i].selected === true) {
			selectedBread = breadSelector.options[i].value;
		}
	}
	SandwichMaker.addBread(selectedBread);
	selectedToppings += `<li>${selectedBread}</li>`;
	console.log(selectedToppings);

});

var meatSelector = document.getElementById("meat");

meatSelector.addEventListener("change", function(event) {
	for (var i = 0; i < meatSelector.options.length; i++) {
		if (meatSelector.options[i].selected === true) {
			selectedMeat = meatSelector.options[i].value;
		}
	}
	SandwichMaker.addMeat(selectedMeat);
	selectedToppings += `<li>${selectedMeat}</li>`;
	console.log(selectedToppings);
});

var cheeseSelector = document.getElementById("cheese");

cheeseSelector.addEventListener("change", function(event) {
	for (var i = 0; i < cheeseSelector.options.length; i++) {
		if (cheeseSelector.options[i].selected === true) {
			selectedCheese = cheeseSelector.options[i].value;
		}
	}
	SandwichMaker.addCheese(selectedCheese);
	selectedToppings += `<li>${selectedCheese}</li>`;
	console.log(selectedToppings);
});

var veggieSelector = document.getElementById("veggies");

veggieSelector.addEventListener("change", function(event) {
	for (var i = 0; i < veggieSelector.options.length; i++) {
		if (veggieSelector.options[i].selected === true) {
			selectedVeggie = veggieSelector.options[i].value;
		}
	}
	SandwichMaker.addVeggie(selectedVeggie);
	selectedToppings += `<li>${selectedVeggie}</li>`;
	console.log(selectedToppings);
});

var condimentSelector = document.getElementById("condiments");

condimentSelector.addEventListener("change", function(event) {
	for (var i = 0; i < condimentSelector.options.length; i++) {
		if (condimentSelector.options[i].selected === true) {
			selectedCondiment = condimentSelector.options[i].value;
		}
	}
	selectedCondiment = event.target.value;
	SandwichMaker.addCondiment(selectedCondiment);
	selectedToppings += `<li>${selectedCondiment}</li>`
	console.log(selectedToppings);
});

placeOrder.addEventListener("click", function(){
	event.preventDefault();
	finalOrder.innerHTML = `<p>Your sandwich has:</p><ul>${selectedToppings}</ul>`; 
	finalOrder.innerHTML += `<p>Your total is $${SandwichMaker.getTotalPrice()}.`;
});

// search for value of multiple select options : js select element multiple options get value 

