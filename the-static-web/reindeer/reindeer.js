var colors = ["Blue", "Red", "Orange", "Purple", "Hazel", "Aquamarine", "Periwinkle", "Azure", "Fuchsia", "Chocolate", "Amber", "Amaranth"];
var reindeer = ["Dasher", "Dancer", "Prancer", "Vixen", "Comet", "Cupid", "Donner", "Blitzen"];

var hohohoElement = document.getElementById("coloredReindeer");

function reindeerRenamer() {
	var coloredReindeer = [];
	for (var i = 0; i < reindeer.length; i++) {
		coloredReindeer.push(" " + colors[i] + " " + reindeer[i]);
	}
	hohohoElement.innerHTML = coloredReindeer;
};


//a more modular version, so no undefined names in case you add reindeer or remove colors...

function reindeerRenamerImproved() {
	var coloredReindeer = [];
	if (colors.length > reindeer.length) {
		for (var i = 0; i < reindeer.length; i++) {
			coloredReindeer.push(colors[i] + " " + reindeer[i]);
		}		
	}
	else if (reindeer.length > colors.length) {
		for (var i = 0; i < colors.length; i++) {
			coloredReindeer.push(colors[i] + " " + reindeer[i]);
		}		
	}
	hohohoElement.innerHTML = coloredReindeer;
}