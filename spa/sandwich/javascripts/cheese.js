var SandwichMaker = function(cheese){
	var cheesePrices = {
		"provolone": 1.00,
		"cheddar": 1.00,
		"pepperjack": 1.00
	}

	cheese.addCheese = function(selectedCheese) {
		var cheesePrice = cheesePrices[selectedCheese];
		console.log("cheese price", cheesePrice);
		SandwichMaker.addTopping(cheesePrice);
	}

	return cheese;
}(SandwichMaker || {});