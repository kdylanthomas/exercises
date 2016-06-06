var SandwichMaker = function(toppings){
	toppings.addTopping = function(toppingPrice) {
		totalPrice += toppingPrice;
		console.log("total price:", totalPrice);
		return totalPrice;
	};
  	toppings.getTotalPrice = function() {
		return totalPrice.toFixed(2);
	};

    return toppings;

}(SandwichMaker || {});	