'use strict';

function addMeat(selectedMeat) {
	let meatPrices = {
		"turkey": 1.75,
		"ham": 1.75,
		"roast-beef": 2.00,
		"pepperoni": 1.00,
		"salami": 1.00
	}
	let meatPrice = meatPrices[selectedMeat];
	this.addTopping(meatPrice);
}

module.exports = addMeat;