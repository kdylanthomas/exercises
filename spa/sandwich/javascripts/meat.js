var SandwichMaker = function(meat){
	var meatPrices = {
		"turkey": 1.75,
		"ham": 1.75,
		"roast-beef": 2.00,
		"pepperoni": 1.00,
		"salami": 1.00
	}

	meat.addMeat = function(selectedMeat) {
		var meatPrice = meatPrices[selectedMeat];
		console.log("value", meatPrices[selectedMeat]);
		console.log("selectedMeat", selectedMeat);
		console.log("price", meatPrice);
		SandwichMaker.addTopping(meatPrice);
	}

	return meat;
}(SandwichMaker || {});