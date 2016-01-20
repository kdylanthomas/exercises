function reversal(origString) {
	var stringToArray = origString.split("");
	var reverseString = stringToArray.reverse();
	var ArrayToString = reverseString.join("");
	document.write("backwards: " + ArrayToString + "<br>");
}

function alphabits(origString) {
	var stringToArray = origString.split("");
	var alphabetString = stringToArray.sort();
	var ArrayToString = alphabetString.join("");
	document.write("alphabetical: " + ArrayToString + "<br>");
}

// palindrome function - only works for single words right now

function palindrome() {
	var stringToArray = origString.split("");
	// if the word has an odd # of letters,
	if (stringToArray.length % 2 !== 0) {
		// find the index of the middle letter 
		var middleLetter = ((stringToArray.length - 1) / 2);
		// and get rid of the middle letter (e.g. "racecar" becomes "raccar")
		stringToArray.splice(middleLetter, 1);
		console.log("stringToArray", stringToArray);
	}
	var startingPoint = stringToArray.length / 2;
	var firstHalf = [];
	for (var i = 0; i < startingPoint; i++) {
		firstHalf.push(stringToArray[i]);
	}
	var secondHalf = [];
	for (var i = startingPoint; i < stringToArray.length; i++) {
		secondHalf.push(stringToArray[i]);
	}
	var testFirstHalf = firstHalf.join("");
	var testSecondHalf = secondHalf.reverse().join("");
	console.log("testFirstHalf", testFirstHalf);
	console.log("testSecondHalf", testSecondHalf);
	if (testFirstHalf === testSecondHalf) {
		console.log("this word is a palindrome!");
	}
	else {
		console.log("this is just a boring old word.");
	}
}


var origString = "racecar";
reversal(origString);
alphabits(origString);
palindrome(origString);

