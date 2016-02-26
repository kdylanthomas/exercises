'use strict';

function addCheese(selectedCheese) {
	let cheesePrices = {
		"provolone": 1.00,
		"cheddar": 1.00,
		"pepperjack": 1.00
	}
	let cheesePrice = cheesePrices[selectedCheese];
	this.addTopping(cheesePrice);
}

module.exports = addCheese;