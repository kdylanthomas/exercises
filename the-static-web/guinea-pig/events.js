// event listener functions 

// ----------- some basic notes ------------
// target: the element that had the event happen to it
// .addEventListener is built into JS

var output = document.getElementById("output-target");

// click example 

var articleEl = document.getElementsByClassName("article-section");
console.log(articleEl);

function forClick(event) {
	console.log("event", event);
	// specify event.target 
	var elementText = event.target.innerHTML;
	output.innerHTML = `You clicked on the ${elementText} section`;
}

// use a for loop to add event listener to each item in a class
for (var i = 0; i < articleEl.length; i++) {
	articleEl[i].addEventListener("click", forClick);
}

// NOTE -- i tried to use a forEach instead of for, but it turns out 
// getELementsByClassName produces a node list, not an array...
// Steve: no native array methods will work on HTML collections (use a for loop)

// mouseover/mouseout on header

var header = document.getElementById("page-header");

function forMouseover(event) {
	console.log("event", event);
	output.innerHTML = `You moved your mouse over the header`;
}

function forMouseout(event) {
	console.log("event", event);
	var elementText = event.target.innerHTML;
	output.innerHTML = `You left me!!`;
}

header.addEventListener("mouseover", forMouseover);
header.addEventListener("mouseout", forMouseout);

// keypress on input field

var fieldEl = document.getElementById("keypress-input");

fieldEl.addEventListener("keyup", function(event) {
	console.log("event", event)
	// using event.target.value to grab text input from user
	output.innerHTML = event.target.value;
})

// guinea pig event listeners 

var guineaPig = document.getElementById("guinea-pig");

document.getElementById("add-color").addEventListener("click", function() {
	guineaPig.classList.toggle("blue");
});

document.getElementById("make-large").addEventListener("click", function() {
	guineaPig.classList.toggle("large");
});

document.getElementById("add-border").addEventListener("click", function() {
	guineaPig.classList.toggle("border");
});

document.getElementById("add-rounding").addEventListener("click", function() {
	guineaPig.classList.toggle("rounded");
});








