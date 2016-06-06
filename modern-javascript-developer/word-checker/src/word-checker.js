"use strict";

function checkWordCount(input) {
	if (input.split(' ').length > 100) {
		return false;
	} else {
		return true;
	}
}

function duplicateCheck(input) {
	let test = input.split(' ').sort();
	for (let i = 0; i < test.length; i++) {
		if (test[i] === test[i+1]) {
			return false;
		}
	}
	return true;
}

function verifyAlphaNumeric(input) {
	return /^[a-zA-Z0-9 ]+$/i.test(input);
}

$('#button').on('click', function() {
	let inputText = $('#textarea').val();
	let testOne = checkWordCount(inputText);
	let testTwo = duplicateCheck(inputText);
	let testThree = verifyAlphaNumeric(inputText);
	if (testOne && testTwo && testThree) {
		$('#validation').html("All tests passed; text input valid");
	} else {
		$('#validation').html("Invalid text input; try again");
	}
})

