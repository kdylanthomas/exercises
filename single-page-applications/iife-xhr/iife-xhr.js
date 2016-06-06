function showCarnivores (carnivores) {
	// this is where carnivores info gets added to the DOM
	var carnivoreContainer = document.getElementById("carnivore-container");
	carnivoreContainer.innerHTML = `<h1>Carnivores:</h1>`;
	carnivores.forEach(function(currentCarnivore){
		carnivoreContainer.innerHTML += `<h2>${currentCarnivore}</h2>`;
	});
}

function showHerbivores (herbivores) {
	var herbivoreContainer = document.getElementById("herbivore-container");
	herbivoreContainer.innerHTML = `<h1>Herbivores:</h1>`;
	herbivores.forEach(function(currentHerbivore){
		herbivoreContainer.innerHTML += `<h2>${currentHerbivore}</h2>`;
	});
}

Predator.loadCarnivores(showCarnivores);

Predator.loadHerbivores(showHerbivores);































