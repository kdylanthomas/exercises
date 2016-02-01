var SandwichMaker = function(bread){
	var breadPrices = {
		"white": 2.00,
		"wheat": 2.00,
		"flatbread": 2.50	
	}

	bread.addBread = function(selectedBread) {
		// this adds one bread price at a time (no multiple selections)
		var breadPrice = breadPrices[selectedBread];
		console.log("selectedBread", selectedBread);
		console.log("price", breadPrice);
		SandwichMaker.addTopping(breadPrice);
	}

	return bread;
}(SandwichMaker || {});