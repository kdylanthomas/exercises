'use strict';

function addBread(selectedBread) {
	let breadPrices = {
		"white": 2.00,
		"wheat": 2.00,
		"flatbread": 2.50
	}
	let breadPrice = breadPrices[selectedBread];
	this.addTopping(breadPrice);
}

module.exports = addBread;