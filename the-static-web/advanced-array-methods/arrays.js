// Use the forEach method to add the name of each planet to a div element in your HTML

var planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"];
var e1 = document.getElementById("planets");
e1.innerHTML = "";

function createPlanetDivs(element, index, array) {
	console.log('array[' + index + '] = ' + element);
	e1.innerHTML += "<div>" + element + "</div>";
 }

planets.forEach(createPlanetDivs);

// Use the map method to create a new array where the first letter of each planet is capitalized

function capitalizePlanets(element, index, array) {
	var firstLetter = element.charAt(0).toUpperCase();
	console.log("firstLetter", firstLetter);
	// turns planet into array of letters
	var arr = element.split("");
	// sets first letter to uppercase
	arr[0] = firstLetter;
	// sets planet back to string 
	element = arr.join("");
	return element;
}

var properPlanets = planets.map(capitalizePlanets);
e1.innerHTML += "<div>" + properPlanets + "</div>";

// Use the filter method to create a new array that contains planets with the letter 'e'

function filterPlanets(element, index, array) {
	if (element.indexOf("e") !== -1) {
		return element;
	}
}

var ePlanets = planets.filter(filterPlanets);
e1.innerHTML += "<div>" + ePlanets + "</div>";

// Use the reduce method to create a sentence from the words in the following array

var words = ["The", "early", "bird", "might", "get", "the", "worm", "but", "the", "second", "mouse", "gets", "the", "cheese"];

var sentence = words.reduce(function(previousValue, currentValue, index, array) {
	return previousValue + " " + currentValue;
});
e1.innerHTML += "<div>" + sentence + "." + "</div>";
