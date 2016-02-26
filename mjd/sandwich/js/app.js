'use strict';

let SandwichMaker = require('./SandwichMaker')

let selectedToppings = "";
let selectedBread;
let selectedMeat;
let selectedCheese;
let selectedVeggie;
let selectedCondiment;

console.log("Sandwich Maker", SandwichMaker);
// console.log("add topping", addTopping);

$('#bread').on('change', function(e) {
	$('#bread').children().each((i, option) => {
		if (option.selected === true) {
			selectedBread = $(option).val();
		}
	})
	console.log("you selected", selectedBread);
	SandwichMaker.bread(selectedBread);
	selectedToppings += `<li>${selectedBread}</li>`;
})

$('#meat').on('change', function(e) {
	$('#meat').children().each((i, option) => {
		if (option.selected === true) {
			selectedMeat = $(option).val();
		}
	})
	SandwichMaker.meat(selectedMeat);
	selectedToppings += `<li>${selectedMeat}</li>`;
})

$('#cheese').on('change', function(e) {
	$('#cheese').children().each((i, option) => {
		if (option.selected === true) {
			selectedCheese = $(option).val();
		}
	})
	SandwichMaker.cheese(selectedCheese);
	selectedToppings += `<li>${selectedCheese}</li>`;
})

$('#veggies').on('change', function(e) {
	$('#veggies').children().each((i, option) => {
		if (option.selected === true) {
			selectedVeggie = $(option).val();
		}
	})
	SandwichMaker.veggies(selectedVeggie);
	selectedToppings += `<li>${selectedVeggie}</li>`;
})

$('#condiments').on('change', function(e) {
	$('#condiments').children().each((i, option) => {
		if (option.selected === true) {
			selectedCondiment = $(option).val();
		}
	})
	SandwichMaker.condiments(selectedCondiment);
	selectedToppings += `<li>${selectedCondiment}</li>`;
})

$('#place-order').on('click', function () {
	$('#final-order').append(`
		<p>Your sandwich has:</p><ul>${selectedToppings}</ul>
		<p>Your total is $${SandwichMaker.getTotalPrice()}.</p>`
	);
})

