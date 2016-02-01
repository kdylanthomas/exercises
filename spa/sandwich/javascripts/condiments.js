var SandwichMaker = function(condiments){
	var condimentPrices = {
		"dijon": 0.25,
		"honey-mustard": 0.25,
		"mayo": 0.25,
		"oil-vinegar": 0.25
	}

	condiments.addCondiment = function(selectedCondiment) {
		// this adds one bread price at a time (no multiple selections)
		var condimentPrice = condimentPrices[selectedCondiment];
		console.log("selectedCondiment", selectedCondiment);
		console.log("price", condimentPrice);
		SandwichMaker.addTopping(condimentPrice);
	}
	
	return condiments;

}(SandwichMaker || {});