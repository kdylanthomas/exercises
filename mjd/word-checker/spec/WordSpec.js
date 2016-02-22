"use strict";

describe("word checker", function() {
	it("should have a checkWordCount function", function() {
		expect(checkWordCount).toBeDefined();
	});
	// That function should return false if a string sent to it has more than 100 words in it.
	it("should return false if string input has <100 words", function() {
		expect(checkWordCount('apple apple')).toBe(true);
	});
	it("should have a duplicateCheck function", function() {
		expect(duplicateCheck).toBeDefined();
	});
	// That function should return false if a string has duplicate words in it.
	it("should return false if string input has duplicate words", function() {
		expect(duplicateCheck('apple apple')).toBe(false);
	});
	it("should have a verifyAlphaNumeric function", function() {
		expect(verifyAlphaNumeric).toBeDefined();
	});
	// That function should return false if there are any non-alphanumeric characters in a string.
	it("should return false if non-alphanumeric chars are in string", function () {
		expect(verifyAlphaNumeric('hello$')).toBe(false);
	});
})