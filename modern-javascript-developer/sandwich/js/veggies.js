'use strict';

function addVeggie(selectedVeggie) {
	let veggiePrices = {
		"lettuce": 0.25,
		"tomato": 0.25,
		"onion": 0.25,
		"green-pepper": 0.25,
		"avocado": 0.75,
		"pickle": 0.25,
		"spinach": 0.25
	}
	let veggiePrice = veggiePrices[selectedVeggie];
	this.addTopping(veggiePrice);
}

module.exports = addVeggie;