// Write a program that will convert a dollar amount to the number of 
// coins that make up the amount. Use the common American coins of 
// quarters, dimes, nickels, and pennies.

var quarter = .25;
var dime = .1;
var nickel = .05;
var penny = .01;

function coinCounter(input) {
  // Initialize a JavaScript object to hold the coins
  var coinPurse = {};

  if (input / quarter >= 1) {
    // how many quarters are in this dollar amount?
    var addQuarters = input / quarter;
    console.log("price in terms of quarters", addQuarters);
    // round down to a whole number of quarters and add those to the coin purse
    coinPurse.quarters = Math.floor(addQuarters);
    console.log("quarters", coinPurse.quarters);
    // subtract those quarters from the input
    input -= (quarter * coinPurse.quarters);
    // round the input to two digits to avoid weirdness
    input = input.toFixed(2);
    console.log("input", input);
  }

  if (input / dime >= 1) {
    var addDimes = input / dime;
    console.log("price in terms of dimes", addDimes);
    coinPurse.dimes = Math.floor(addDimes);
    console.log("dimes", coinPurse.dimes);
    input -= (dime * coinPurse.dimes);
    input = input.toFixed(2);
    console.log("input", input);
  }

  if (input / nickel >= 1) {
    var addNickels = input / nickel;
    console.log("price in terms of nickels", addNickels);
    coinPurse.nickels = Math.floor(addNickels);
    console.log("nickels", coinPurse.nickels);
    input -= (nickel * coinPurse.nickels);
    input = input.toFixed(2);
    console.log("input", input); 
  }

  if (input / penny >= 1) {
    var addPennies = input / penny;
    console.log("price in terms of Pennies", addPennies);
    coinPurse.pennies = Math.floor(addPennies);
    console.log("Pennies", coinPurse.pennies);
    input -= (penny * coinPurse.pennies);
    input = input.toFixed(2);
    console.log("input", input); 
    }

  return coinPurse;

}


