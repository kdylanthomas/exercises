// webpage pulls in two files using XHR 
// for each product card: product, dept, price
// select element that immediately applies seasonal discounts

var container = document.getElementById("product-container");
var discountSelects = document.getElementById("season-discounts");

// declare these variables in global scope for use in updateDOM()--update their values inside loader functions
var categoriesData;
var productsData;
var categories;
var products;

// make categories XHR in global scope 
var categoryRequest = new XMLHttpRequest;
categoryRequest.addEventListener("load", createCategoriesObject);
categoryRequest.open("GET", "categories.json");
categoryRequest.send();


function createCategoriesObject() {
	console.log("createCategoriesObject");
	categoriesData = JSON.parse(this.responseText);
	categories = categoriesData.categories;
	console.log("categoriesData", categoriesData);
	console.log("categories", categories);

	var productRequest = new XMLHttpRequest;
	productRequest.addEventListener("load", createProductsObject);
	productRequest.open("GET", "products.json");
	productRequest.send();


	function createProductsObject() {
		console.log("createProductsObject");
		productsData = JSON.parse(this.responseText);
		products = productsData.products;
		console.log("productsData", productsData);
		console.log("products", products);

		// event listener goes here
		discountSelects.addEventListener("change", updateDOM);
		updateDOM();
	}
}


function updateDOM() {
	var cardContents = "";
	for (var i = 0; i < products.length; i++) {
		var currentProduct = products[i];
		// add product name to card
		cardContents += `<div class='card col-md-3'><h2>${currentProduct.name}</h2>`;
		// add department name to card
		for (var j = 0;  j < categories.length; j++) {
			var currentCategory = categories[j];
			// if the product's category ID matches the current category
			if (currentProduct.category_id === currentCategory.id) {
				// add the category name to the div 
				cardContents += `<h5>${categories[j].name}</h5>`;
				// add price to card
				// if the season the user selects matches the current category's season for discount
				if (discountSelects.value === currentCategory.season_discount) {
					console.log(currentCategory.season_discount);
					// store percentage rate for discount in var discountRate
					var discountRate = currentCategory.discount;
					// calculate a discounted price
					var discountedPrice = currentProduct.price - (currentProduct.price * discountRate);
					discountedPrice = discountedPrice.toFixed(2);
					// add discounted price to page
					cardContents += `<h5 class="discounted">$${discountedPrice}</h5>`;
				}
				else {
					// add normal price to page
					cardContents += `<h5>$${currentProduct.price}</h5>`;
				}
				cardContents += `<p><a href="#" class="btn btn-primary" role="button">Add To Cart</a></p></div>`;
			}
		}
	}
	container.innerHTML = cardContents;

	// adds sale class to sale items when selected
	var cards = document.getElementsByClassName("card");
	console.log(cards[2]);
	for (var i = 0; i < cards.length; i++) {
		var searchForSale = cards[i].innerHTML;
		if (searchForSale.indexOf("discounted") !== -1) {
			cards[i].classList.add('sale');
		}
	}
}












