(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

const bread = require('./bread');
const cheese = require('./cheese');
const meat = require('./meat');
const veggies = require('./veggies');
const condiments = require('./condiments');


let totalPrice = 0;

function addTopping (toppingPrice) {
	totalPrice += toppingPrice;
	console.log("total price:", totalPrice);
	return totalPrice;
};

function getTotalPrice () {
	return totalPrice.toFixed(2);
}


let SandwichMaker = {
	bread, cheese, meat, veggies, condiments, addTopping, getTotalPrice
}

module.exports = SandwichMaker;







},{"./bread":3,"./cheese":4,"./condiments":5,"./meat":6,"./veggies":7}],2:[function(require,module,exports){
'use strict';

let SandwichMaker = require('./SandwichMaker')

let selectedToppings = "";
let selectedBread;
let selectedMeat;
let selectedCheese;
let selectedVeggies;
let selectedCondiment;

console.log("Sandwich Maker", SandwichMaker);

$('.bread').each((i, option) => {
	$(option).on('click', function() {
		selectedBread = $(option).val();
		SandwichMaker.bread(selectedBread);
		selectedToppings += `<li>${selectedBread}</li>`;
	});
})

$('.meat').each((i, option) => {
	$(option).on('click', function() {
		selectedMeat = $(option).val();
		SandwichMaker.meat(selectedMeat);
		selectedToppings += `<li>${selectedMeat}</li>`;
	});
})

$('.cheese').each((i, option) => {
	$(option).on('click', function() {
		selectedCheese = $(option).val();
		SandwichMaker.cheese(selectedCheese);
		selectedToppings += `<li>${selectedCheese}</li>`;
	});
})

$('.veggies').each((i, option) => {
	$(option).on('click', function() {
		selectedVeggies = $(option).val();
		SandwichMaker.veggies(selectedVeggies);
		selectedToppings += `<li>${selectedVeggies}</li>`;
	});
})

$('.condiments').each((i, option) => {
	$(option).on('click', function() {
		selectedCondiment = $(option).val();
		SandwichMaker.condiments(selectedCondiment);
		selectedToppings += `<li>${selectedCondiment}</li>`;
	});
})

$('#place-order').on('click', function () {
	$('#final-order').append(`
		<p>Your sandwich has:</p><ul>${selectedToppings}</ul>
		<p>Your total is $${SandwichMaker.getTotalPrice()}.</p>`
	);
})


},{"./SandwichMaker":1}],3:[function(require,module,exports){
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
},{}],4:[function(require,module,exports){
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
},{}],5:[function(require,module,exports){
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
},{}],6:[function(require,module,exports){
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
},{}],7:[function(require,module,exports){
'use strict';

function addVeggie(selectedVeggie) {
	let veggiePrices = {
		"lettuce": 0.25,
		"tomato": 0.25,
		"onion": 0.25,
		"green-pepper": 0.25,
		"avocado": 0.75,
		"pickle": 0.25,
		"spinach": 0.25
	}
	let veggiePrice = veggiePrices[selectedVeggie];
	this.addTopping(veggiePrice);
}

module.exports = addVeggie;
},{}]},{},[2])


//# sourceMappingURL=bundle.js.map
