var famousPeople = [
	{
	  title: "Presidential Candidate",
	  name: "Bernie Sanders",
	  bio: "Bernard 'Bernie' Sanders is an American politician and the junior United States Senator from Vermont.",
	  image: "https://lh4.googleusercontent.com/-MoJHeOqT5Pg/AAAAAAAAAAI/AAAAAAAAUGY/QK9h6BxPcP8/s0-c-k-no-ns/photo.jpg",
	  lifespan: {
	    birth: 1941
	  }
	},
	{
	  title: "Musician",
	  name: "Michael Peter Balzary (Flea)",
	  bio: "Flea is best known as the bassist, co-founding member, and one of the composers of the rock band Red Hot Chili Peppers with whom he was inducted in 2012 into the Rock and Roll Hall of Fame.",
	  image: "http://a5.files.biography.com/image/upload/c_fit,cs_srgb,dpr_1.0,h_1200,q_80,w_1200/MTIwNjA4NjM0MTMxMDg4OTA4.jpg",
	  lifespan: {
	    birth: 1962
	  }		
	},
	{
	  title: "Rock Climber",
	  name: "Dean Potter",
	  bio: "Dean Potter was an American free climber, alpinist, BASE jumper, BASEliner, and highliner. He was noted for hard first ascents, free solo ascents, speed ascents, and enchainments in Yosemite National Park and Patagonia.",
	  image: "http://www.trbimg.com/img-555a49b2/turbine/la-me-ln-extreme-athlete-dean-potter-dead-yosemite-2015051",
	  lifespan: {
	    birth: 1972, 
	    death: 2015
	  }		
	},	
]

var container = document.getElementById("container");
var textInput = document.getElementById("text-input");

// create a div and output to the DOM for each person in the array
famousPeople.forEach(function(currentPerson) {
	var elementContent = "";
	elementContent += `<div class="person"><person>`;	
	elementContent += `<header>${currentPerson.name}: ${currentPerson.title}</header>`; 
	elementContent += `<section><p>${currentPerson.bio}</p>`;
	elementContent += `<img src=${currentPerson.image}></section>`;
	if (currentPerson.lifespan.death) {
		elementContent += `<footer>${currentPerson.lifespan.birth} to ${currentPerson.lifespan.death}</footer></person>`;		
	} else {
	elementContent += `<footer>${currentPerson.lifespan.birth} to present</footer></person></div>`;
	}
	container.innerHTML += elementContent;
});

// reference all divs with class of person
var person = document.getElementsByClassName("person");

// loop through the divs
for (var i = 0; i < person.length; i++) {
	var currentPerson = person[i];
	// if you click a person,
	currentPerson.addEventListener("click", function(){
		console.log("this", this);
		console.log("currentPerson", currentPerson);
		// turn a class of "border" on or off
		this.classList.toggle('border');
		// focus on text input area
		textInput.focus();
		// this refers to <p>bio</p> inside div > person > section
		var bioToReplace = this.childNodes[0].childNodes[1].childNodes[0];
		// causes person's bio to change based on text input, or clear input if enter key is pressed 
		textInput.addEventListener("keyup", function() {
			if (event.keyCode === 13) {
				textInput.value = "";
			}
			else {
				var newContent = textInput.value;
				bioToReplace.innerHTML = newContent;
			}
		});
	});
}

	

