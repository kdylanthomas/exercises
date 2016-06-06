// Take the contents of the sonnet div and place it in a variable
var sonnet = document.getElementById("sonnet").innerHTML;

//Find and output the starting position of the word "orphans"
console.log("The word 'orphans' starts at index " + sonnet.indexOf("orphans"));

//Output the number of characters in the sonnet
console.log("There are " + sonnet.length + " characters in the sonnet");

//Replace the first occurance of the string "winter" with "yuletide"
//Replace all occurances of the string "the" with "a large"
//Set the content of the sonnet div with the new string
var newSonnet = sonnet.replace("winter", "yuletide").replace(/the /gi, "a large ");

document.getElementById("sonnet").innerHTML = newSonnet;