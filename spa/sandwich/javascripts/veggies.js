var SandwichMaker = function(veggies){
	var veggiePrices = {
		"lettuce": 0.25,
		"tomato": 0.25,
		"onion": 0.25,
		"green-pepper": 0.25,
		"avocado": 0.75,
		"pickle": 0.25,
		"spinach": 0.25
	}

	veggies.addVeggie = function(selectedVeggie) {
		// this adds one bread price at a time (no multiple selections)
		var veggiePrice = veggiePrices[selectedVeggie];
		console.log("selectedVeggie", selectedVeggie);
		console.log("price", veggiePrice);
		SandwichMaker.addTopping(veggiePrice);
	}

	return veggies;
}(SandwichMaker || {});