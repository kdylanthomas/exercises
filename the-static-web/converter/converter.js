
var convertedTemp = document.getElementById("converted-temp");

function toCelsius(tempToConvert) {
	temp = (tempToConvert - 32) * (5/9);
	console.log("converted temp", temp);
  if (temp > 32) {
    convertedTemp.innerHTML = "<p class='hot'>" + temp +"</p>";
  }
  else if (temp < 0) {
    convertedTemp.innerHTML = "<p class='cold'>" + temp +"</p>";
  }
  else {
    convertedTemp.innerHTML = "<p class='just-right'>" + temp +"</p>";    
  }
}

function toFahrenheit(tempToConvert) {
	temp = tempToConvert * (9/5) + 32;
  console.log("converted temp", temp);
  if (temp > 90) {
    convertedTemp.innerHTML = "<p class='hot'>" + temp +"</p>";
  }
  else if (temp < 32) {
    convertedTemp.innerHTML = "<p class='cold'>" + temp +"</p>";
  }
  else {
    convertedTemp.innerHTML = "<p class='just-right'>" + temp +"</p>";    
  }
}

// // Get a reference to the button element in the DOM
var button = document.getElementById("converter");
// executes determineConverter when user clicks button 
button.addEventListener("click", determineConverter);

// references text input in the DOM
var enterKey = document.getElementById("input-temp");
// clicks the converter button if user presses enter key 
enterKey.addEventListener("keydown", function() {
  if (event.keyCode === 13) {
    document.getElementById('converter').click();
  }
});

// uses radio button selection to choose toCelsius or toFahrenheit
function determineConverter(event) {
  console.log("event", event);
  event.preventDefault();
  if (document.getElementById("to-f").checked === true) {
  	console.log("you clicked to fahrenheit");
    var tempToConvert = document.getElementById("input-temp").value;
    console.log(tempToConvert);
  	toFahrenheit(tempToConvert); 
  }
  else if (document.getElementById("to-c").checked === true) {
    console.log("you clicked to celsius");
    var tempToConvert = document.getElementById("input-temp").value;
    console.log(tempToConvert);
  	toCelsius(tempToConvert);
  }
}	

// clear button 
var clear = document.getElementById("clear");
clear.addEventListener("click", clearInput);

function clearInput(event) {
  document.getElementById("input-temp").value = "";
  convertedTemp.innerHTML = "";
}
