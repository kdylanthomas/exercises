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






