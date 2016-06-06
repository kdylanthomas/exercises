var planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"];
var planetContainer = document.getElementById("planets");
planetContainer.innerHTML = "";
// Use the forEach method to add the name of each planet to a div element in your HTML

function makeTheDivs(element, index, array) {
	// console.log("element", element);
	// console.log("index", index);
	// console.log("array", array);
	planetContainer.innerHTML += "<div>" + element + "</div>";
}

planets.forEach(makeTheDivs);

// Use the map method to create a new array where the first letter of each planet is capitalized

function properPlanets(element, index, array) {
	var firstLetter = element.charAt(0);
	console.log(firstLetter);
	var arr = element.split("");
	console.log(arr);
	arr[0] = firstLetter.toUpperCase();
	element = arr.join("");
	planetContainer.innerHTML += "<div>" + element + "</div>";
} 

planets.map(properPlanets);

// Use the filter method to create a new array that contains planets with the letter 'e'

function ePlanets(element, index, array) {
	if (element.indexOf("e") !== -1) {
		planetContainer.innerHTML += "<div>" + element + "<div>";
	}
} 

planets.filter(ePlanets);


// Use the reduce method to create a sentence from the words in the following array

var words = ["The", "early", "bird", "might", "get", "the", "worm", "but", "the", "second", "mouse", "gets", "the", "cheese"];

var sentence = words.reduce(function(prev, curr, index, array) {
	return prev + " " + curr;
});
planetContainer.innerHTML += "<div>" + sentence + "." + "</div>"
