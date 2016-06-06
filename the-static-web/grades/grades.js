<<<<<<< HEAD
=======
// in progress ~ current working version is on github 
>>>>>>> e2edbf6ab7dcaf3fcabd6052cd10390a5ac1db46
var scores = [82, 71, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87];
var highest = 0;
var lowest = 100;

function countLetterGrades(scores) {
	var a = 0;
	var b = 0;
	var c = 0;
	var d = 0; 
	var f = 0;
	for (var i = 0; i < scores.length; i++) {
		if (scores[i] <= 60) {
			f++;
		}
		else if (scores[i] <= 70) {
			d++;
		}
		else if (scores[i] <= 80) {
			c++;
		}
		else if (scores[i] <= 90) {
			b++;
		}
		else {
			a++;
		}
	}
<<<<<<< HEAD
	console.log("There are " + a + " As");
	console.log("There are " + b + " Bs");
	console.log("There are " + c + " Cs");
	console.log("There are " + d + " Ds");
	console.log("There are " + f + " Fs");
}

function findHighest(scores) {
=======
>>>>>>> e2edbf6ab7dcaf3fcabd6052cd10390a5ac1db46
	for (var i = 0; i < scores.length; i++) {
		if (scores[i] > highest) {
			highest = scores[i];
		}
	}
<<<<<<< HEAD
	console.log("The highest grade is " + highest);
}

function findLowest(scores) {
=======
>>>>>>> e2edbf6ab7dcaf3fcabd6052cd10390a5ac1db46
	for (var i = 0; i < scores.length; i++) {
		if (scores[i] < lowest) {
			lowest = scores[i];
		}
	}
<<<<<<< HEAD
	console.log("The lowest grade is " + lowest);
}

function analyzeGrades(scores) {
	countLetterGrades(scores);
	findHighest(scores);
	findLowest(scores);
 



=======
	console.log("The highest grade is " + highest);
	console.log("The lowest grade is " + lowest);
	console.log("There are " + a + " As");
	console.log("There are " + b + " Bs");
	console.log("There are " + c + " Cs");
	console.log("There are " + d + " Ds");
	console.log("There are " + f + " Fs");
}
>>>>>>> e2edbf6ab7dcaf3fcabd6052cd10390a5ac1db46
