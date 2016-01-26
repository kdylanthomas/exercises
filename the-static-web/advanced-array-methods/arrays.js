// Use the forEach method to add the name of each planet to a div element in your HTML

var planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"];
var planetContainer = document.getElementById("planets");
planetContainer.innerHTML = "";

planets.forEach(function createPlanetDivs(element) {
	planetContainer.innerHTML += "<div>" + element + "</div>";
});

// Use the map method to create a new array where the first letter of each planet is capitalized

var properPlanets = planets.map(function capitalizePlanets(element) {
	var firstLetter = element.charAt(0).toUpperCase();
	console.log("firstLetter", firstLetter);
	// turns planet into array of letters
	var arr = element.split("");
	// sets first letter to uppercase
	arr[0] = firstLetter;
	// sets planet back to string 
	element = arr.join("");
	return element;	
});
planetContainer.innerHTML += "<div>" + properPlanets + "</div>";

// Use the filter method to create a new array that contains planets with the letter 'e'

var ePlanets = planets.filter(function filterPlanets(element) {
	if (element.indexOf("e") !== -1) {
		return element;
	}
});
planetContainer.innerHTML += "<div>" + ePlanets + "</div>";

// Use the reduce method to create a sentence from the words in the following array

var words = ["The", "early", "bird", "might", "get", "the", "worm", "but", "the", "second", "mouse", "gets", "the", "cheese"];

var sentence = words.reduce(function(prev, curr) {
	return prev + " " + curr;
});
planetContainer.innerHTML += "<div>" + sentence + "." + "</div>";
