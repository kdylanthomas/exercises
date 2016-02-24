"use strict";

let growCount = 0;
// Create a Plant function.
// Plant should have a property of height.
function Plant () {
	this.height = 30;
}

// increaseHeight should increase the value of the height property by the amount passed in as an argument.
Plant.prototype.increaseHeight = function (growBy) {
	let oldHeight = this.height;
	this.height += growBy;
	let oldBranches = Math.floor(oldHeight/10);
	// Each time the height of a tree increases by 10, the value of branch should increase by one.
	let newBranches = Math.floor(this.height/10);
	if (newBranches > oldBranches) {
		this.branches++;
	}
	// Also output the current height of each tree and how many branches it has to the DOM.
	$('#output').append(`<p>${this.name} is ${this.height}cm tall and has ${this.branches} branches<p>`);
};

// decreaseHeight should decrease the value of the height property by the amount passed in as an argument.
Plant.prototype.decreaseHeight = function (shortenBy) {
	console.log("decrease height by " + shortenBy);
	this.height -= shortenBy;
};

// Create a Tree function.
// Tree should have a property of branches.
function Tree (name, branches) {
	this.branches = branches;
	this.name = name;
}

// Plant should be the prototype of Tree.
Tree.prototype = new Plant();


Tree.prototype.grow = function (amount) {
	// The grow method should increase the height of the tree.
	this.increaseHeight(amount);
	growCount++;
	console.log("growCount", growCount);
	// should grow 30 times x 2 trees = 60
	if (growCount >= 60) {
		// clear intervals for each tree
		window.clearInterval(intervalID);
		// trigger trim if grow % 20 === 0 (each tree has grown 10 times)
	} else if (growCount % 20 === 0) {
		PearTree.trim(7);
		OakTree.trim(11);
	}
};

Tree.prototype.trim = function (amount) {
	let originalBranches = this.branches;
	// The trim method should decrease the height of the tree.
	this.decreaseHeight(amount);
	// When the trim method is called, the number of branches should decrease by one.
	this.branches--;
	// console.log("trimming!");
	// makes test pass
	return originalBranches - this.branches;
};


// Create a PearTree instance of Tree. var PearTree = new Tree();
let PearTree = new Tree("Pear tree", 3);

// Create an OakTree instance of Tree.
let OakTree = new Tree("Oak tree", 4);

// Every second, increase the height the pear tree by some integer value and increase the height the oak tree by some integer value that is larger than what you used for the pear tree.

let intervalID = window.setInterval(function(){
	PearTree.grow(3);
	OakTree.grow(7);
}, 1000);


