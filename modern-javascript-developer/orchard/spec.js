"use strict";
describe("orchard", function () {
	it("should have a Plant function", function () {
		expect(Plant).toBeDefined();
	});
	it("should have a Tree function", function () {
		expect(Tree).toBeDefined();
	});
	it("should have increaseHeight function on prototype of Plant", function () {
		// There should be a function named increaseHeight on the prototype of Plant.
		expect(Plant.prototype.increaseHeight).toBeDefined();
	});
	it("should have decreaseHeight function on prototype of Plant", function () {
		// There should be a function named decreaseHeight on the prototype of Plant.
		expect(Plant.prototype.decreaseHeight).toBeDefined();
	});
	it("should have a height property on Plant", function () {
		expect(PearTree.height).toBeDefined();
	});
	it("should have a grow fn on prototype of tree", function () {
		expect(Tree.prototype.grow).toBeDefined();
	});
	it("should have a trim fn on prototype of tree", function () {
		expect(Tree.prototype.trim).toBeDefined();
	});
	it("should reduce height of tree by integer passed as argument to trim", function() {
		// when you invoke trim with an arg, trim should call decreaseHeight(arg)
		var fakeTree = new Tree();
		spyOn(fakeTree, "decreaseHeight");
		fakeTree.trim(2);
		expect(fakeTree.decreaseHeight).toHaveBeenCalledWith(2);
	});
	it("should reduce branches of tree by one when trim is called", function() {
		// When you invoke the trim method on Tree, the values of the branches property should be decreased by one.
		expect(PearTree.trim()).toBe(1);
	});
	it("should increase height of tree by integer passed as argument to grow", function() {
		// when you invoke grow with an arg, grow should call increaseHeight(arg)
		var fakeTree = new Tree();
		spyOn(fakeTree, "increaseHeight");
		fakeTree.grow(2);
		expect(fakeTree.increaseHeight).toHaveBeenCalledWith(2);
	});
})
