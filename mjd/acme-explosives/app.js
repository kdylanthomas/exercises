"use strict";

let categoryToLoad;
let catIdToSearch;
let typeIdToSearch;


$('#select').on('change', function() {
	$('#results').html('');
	categoryToLoad = $('#select').val();
	console.log("cat to load", categoryToLoad);
	sortProducts();
})

// refactoring

function sortProducts() {
	$(categories).each((i, currCat) => {
		if (currCat.name === categoryToLoad) {
			catIdToSearch = currCat.id;
		}
	});
	$(types).each((i, currType) => {
		if (currType.category === catIdToSearch) {
			typeIdToSearch = currType.id;
			$(products).each((j, currProd) => {
				if (currProd.type === typeIdToSearch) {
					buildHTML(currType.name, currProd.name, currProd.description, j);
				}
			});
		}
	});
}



function buildHTML (type, prod, desc, count) {
	let output = "";
	if (categoryToLoad === "Demolition") {
		count -= 9;
	}
	console.log(count);
	// if (count % 3 === 0 || count === 0) {
	// 	output += `<div class="row">`;
	// }
	output += `<div class="col-md-4 product-card">
		<p>Type: ${type}</p>
		<p>Product: ${prod}</p>
		<p>${desc}</p>
	</div>`;
	if (count % 3 === 0)  {
		let rowID = count + "";
		// output += `</div>`;
	}
	$('#results').append(output);
}


