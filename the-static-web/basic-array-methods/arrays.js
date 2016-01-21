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

function palindrome(origString) {
	var stringToArray = origString.split("");
	var reverseArray = stringToArray.reverse();
	var reverseToString = reverseArray.join("");
	if (origString === reverseToString) {
		document.write("This word is a palindrome!");
	}
	else {
		document.write("This word isn't a palindrome.");
	}
}


var origString = "racecar";
reversal(origString);
alphabits(origString);
palindrome(origString);

