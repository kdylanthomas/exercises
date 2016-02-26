"use strict";

let categoryToLoad;
let catIdToSearch;
let typeIdToSearch;
let output = "";

// listen for button click
$('#search').on('click', function () {
	$('#results').html('');
	output = "";
	categoryToLoad = $('#select').val();
	sortProducts();
})

// find products that match user select; call buildHTML on those products
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

// create HTML string and output to DOM
function buildHTML (type, prod, desc, count) {
	$('#results').html('');
	if (categoryToLoad === "Demolition") {
		count -= 9;
	}
	if (count % 3 === 0) {
		output += `<div class="row">`;
	}
	output += `<div class="col-md-4 product-card" id=${count}>
		<p>Type: ${type}</p>
		<p>Product: ${prod}</p>
		<p>${desc}</p>
	</div>`;
	if ((count + 1) % 3 === 0)  {
		output += `</div>`;
		$('#results').html(output);
	}
}


