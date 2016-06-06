var planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"];
var planetContainer = document.getElementById("planets");
planetContainer.innerHTML = "";

var outputToDOM = function(element) {
	planetContainer.innerHTML += `<div>${element}</div>`;
};
// Use the forEach method to add the name of each planet to a div 
// element in your HTML with an id of "planets".
planets.forEach(outputToDOM);

// Use the map method to create a new array where the first letter of each planet is capitalized
var capitalizedPlanets = planets.map(function capitalizePlanets(element) {
	// note to self: toUpperCase() only works on strings, so you have to join before toUpperCase()
	return element.split("").slice(0,1).join("").toUpperCase() + element.split("").slice(1).join("");
});
capitalizedPlanets.forEach(outputToDOM);

// Use the filter method to create a new array that contains planets with the letter 'e'
var ePlanets = planets.filter(function findTheEs(element) {
	return element.indexOf("e") >= 0; 
});
ePlanets.forEach(outputToDOM);

// Use the reduce method to create a sentence from the words in the following array

var words = ["The", "early", "bird", "might", "get", "the", "worm", "but", "the", "second", "mouse", "gets", "the", "cheese"];

var sentence = words.reduce(function (prev, curr) {
	return `${prev} ${curr}`;
});
outputToDOM(`${sentence}.`);	