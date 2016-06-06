var addButton = document.getElementById("add");
var subtractButton = document.getElementById("subtract");
var multiplyButton = document.getElementById("multiply");
var divideButton = document.getElementById("divide");
var first = document.getElementById("first-number");
var second = document.getElementById("second-number");
var resultContainer = document.getElementById("result");


var add = function(a, b) {
	return +a + +b;
}

addButton.addEventListener("click", function() {
	event.preventDefault();
	result = calculate(first.value, second.value, add);
	resultContainer.innerHTML = result;	
});

var subtract = function(a, b) {
	return a - b;
}

subtractButton.addEventListener("click", function() {
	event.preventDefault();
	result = calculate(first.value, second.value, subtract);
	resultContainer.innerHTML = result;
});

var multiply = function(a, b) {
	return a * b;
}

multiplyButton.addEventListener("click", function() {
	event.preventDefault();
	result = calculate(first.value, second.value, multiply);
	resultContainer.innerHTML = result;
});

var divide = function(a, b) {
	return a / b;
}

divideButton.addEventListener("click", function() {
	event.preventDefault();
	result = calculate(first.value, second.value, divide);
	resultContainer.innerHTML = result;
});


function calculate(a, b, operator) {
	return operator(a, b);
}