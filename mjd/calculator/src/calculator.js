"use strict";
let firstNumber;
let secondNumber;
let functionToRun;

function add(a,b) {
	return a + b;
};

function subtract(a,b) {
	return a - b;
};

function multiply(a,b) {
	return a * b;
};

function divide(a,b) {
	return a / b;
};

function square(a) {
	return Math.pow(a, 2);
};

function squareRoot(a) {
	return Math.sqrt(a);
};

$('.btn').on('click', function(e) {
	functionToRun = e.target.id;
	firstNumber = parseInt($('#number-input').val());
	if (functionToRun === "square" || functionToRun === "squareRoot") {
		if (functionToRun === "square") {
			$('#number-input').val(square(firstNumber));
		} else {
			$('#number-input').val(squareRoot(firstNumber))
		}
	} else {
		$('#number-input').val('');
		$('#number-input').focus();
	};
});

$('#number-input').on('keyup', function(e) {
	if (e.which === 13) {
		console.log(functionToRun);
		secondNumber = parseInt($('#number-input').val());
		switch(functionToRun) {
			case "add":
				$('#number-input').val(add(firstNumber, secondNumber));
				break;
			case "subtract":
				$('#number-input').val(subtract(firstNumber, secondNumber));
				break;
			case "multiply":
				$('#number-input').val(multiply(firstNumber, secondNumber));
				break;
			case "divide":
				$('#number-input').val(divide(firstNumber, secondNumber));
				break;
		}
	}
});