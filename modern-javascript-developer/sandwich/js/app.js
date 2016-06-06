'use strict';

let SandwichMaker = require('./SandwichMaker');

let selectedToppings = "";
let selectedBread;
let selectedMeat;
let selectedCheese;
let selectedVeggies;
let selectedCondiment;

console.log("Sandwich Maker", SandwichMaker);

// problem: each time you click an option, added to sandwich price/list
// can't remove options, easy to accidentally add options twice

// solution: use listeners to manipulate array of ingredients, then run functions on each item

$('.bread').each((i, option) => {
	$(option).on('click', function() {
		selectedBread = $(option).val();
		SandwichMaker.bread(selectedBread);
		selectedToppings += `<li>${selectedBread}</li>`;
	});
})

$('.meat').each((i, option) => {
	$(option).on('click', function() {
		selectedMeat = $(option).val();
		SandwichMaker.meat(selectedMeat);
		selectedToppings += `<li>${selectedMeat}</li>`;
	});
})

$('.cheese').each((i, option) => {
	$(option).on('click', function() {
		selectedCheese = $(option).val();
		SandwichMaker.cheese(selectedCheese);
		selectedToppings += `<li>${selectedCheese}</li>`;
	});
})

$('.veggies').each((i, option) => {
	$(option).on('click', function() {
		selectedVeggies = $(option).val();
		SandwichMaker.veggies(selectedVeggies);
		selectedToppings += `<li>${selectedVeggies}</li>`;
	});
})

$('.condiments').each((i, option) => {
	$(option).on('click', function() {
		selectedCondiment = $(option).val();
		SandwichMaker.condiments(selectedCondiment);
		selectedToppings += `<li>${selectedCondiment}</li>`;
	});
})

$('#place-order').on('click', function () {
	$('#final-order').append(`
		<p>Your sandwich has:</p><ul>${selectedToppings}</ul>
		<p>Your total is $${SandwichMaker.getTotalPrice()}.</p>`
	);
})

