describe("specs for calculator function", function() {
	it("should have an add function", function() {
		expect(add).toBeDefined();
	});
	it("should add two integers", function() {
		expect(add(2,6)).toBe(8);
	});
	it("should have a subtract function", function() {
		expect(subtract).toBeDefined();
	});
	it("should subtract two integers", function() {
		expect(subtract(9,4)).toBe(5);
	});
	it("should have a multiply function", function() {
		expect(multiply).toBeDefined();
	});
	it("should multiply two integers", function() {
		expect(multiply(5,3)).toBe(15);
	});
	it("should have a divide function", function() {
		expect(divide).toBeDefined();
	});
	it("should divide two integers", function() {
		expect(divide(8,2)).toBe(4);
	});
	it("should have a square function", function() {
		expect(square).toBeDefined();
	});
	it("should find the square of a number", function() {
		expect(square(3)).toBe(9);
	});
	it("should have a squareRoot function", function() {
		expect(squareRoot).toBeDefined();
	});
	it("should find the square root of a number", function() {
		expect(squareRoot(9)).toBe(3);
	});
});