'use strict';

function addCondiment(selectedCondiment) {
	let condimentPrices = {
		"dijon": 0.25,
		"honey-mustard": 0.25,
		"mayo": 0.25,
		"oil-vinegar": 0.25
	}
	let condimentPrice = condimentPrices[selectedCondiment];
	this.addTopping(condimentPrice);
}

module.exports = addCondiment;