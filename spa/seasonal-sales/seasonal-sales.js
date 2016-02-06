// Your job is to build a web page that lists all of the products, 
// the name of the department it's in, and the price. Additionally, put a 
// <select> element at the top of the page that contains all possible values 
// of the season_discount key in the categories file. As soon as you select 
// one of the seasons, all prices on the page should immediately be 
// discounted by the corresponding percentage.

// var container = document.getElementById("product-container");
// var discountSelects = document.getElementById("season-discounts");


// // !!!!!!!!!!!!
// // STEP ONE: open and send XML request for categories
// var categoryRequest = new XMLHttpRequest();
// categoryRequest.addEventListener("load", categoriesLoaded);
// categoryRequest.addEventListener("error", categoriesError);
// categoryRequest.open('GET', 'categories.json');
// categoryRequest.send();

// // !!!!!!!!!!!!
// // STEP TWO: when categories.json loads, run a function that makes 
// // categories object AND sends XML request for products.json

// function categoriesLoaded () {
// 	var catData = JSON.parse(this.responseText);
// 	console.log(catData);
// 	var productRequest = new XMLHttpRequest();
// 	productRequest.addEventListener("load", productsLoaded);
// 	productRequest.addEventListener("error", productsError);
// 	productRequest.open('GET', 'products.json');
// 	productRequest.send();

// 	// !!!!!!!!!!!
// 	// STEP THREE: when products.json loads, run function that creates products object 

// 	function productsLoaded () {
// 		var prodData = JSON.parse(this.responseText);
// 		console.log(prodData);
// 		combineData();


// 		// !!!!!!!!!!!
// 		// STEP FOUR: combine the products object and the categories object into an array 
// 		// happy note to self: everything is nested so that the functions can look up for variable references

// 		function combineData () {
// 			var combinedData = [];
// 			combinedData.push(prodData);
// 			combinedData.push(catData);
// 			console.log(combinedData);
// 			outputToDOM();

// 			// !!!!!!!!!!! 
// 			// event listener is here for now, since it also calls outputToDOM (move to global scope later)
// 			// selecting a new season recreates the HTML on the page, but with discounted prices inserted
// 			discountSelects.addEventListener("change", function() {
// 				event.preventDefault();
// 				outputToDOM();
// 			});

// 			function outputToDOM () {
// 				// set innerHTML empty to begin with so cards don't repeat themselves on a change
// 				container.innerHTML = "";
// 				// this refers to the products object
// 				var productsRef = combinedData[0].products; 
// 				// this refers to the categories object
// 				var categoryRef = combinedData[1].categories;
// 				// console.log(categoryRef);
// 				// console.log(productsRef);
// 				// discountReference refers to the option value for the season the user selects
// 				var discountReference = discountSelects.value;
// 				console.log("DISCOUNT REFERENCE", discountReference);
// 				// loop through each product and pull ID, name, price, and category number
// 				for (var i = 0; i < productsRef.length; i++) {
// 					var currentProduct = productsRef[i];
// 					var prodId = currentProduct.id;
// 					var prodName = currentProduct.name;
// 					var prodPrice = currentProduct.price;
// 					var prodCat = currentProduct.category_id;
// 					// output is empty; eventually will hold all HTML to be added to page
// 					var output = "";	
// 					console.log("prodName", prodName);
// 					console.log("prodPrice", prodPrice);
// 					// start adding HTML to an output variable
// 					output += `<div class="card"><h1>${prodName}</h1>`;
// 					console.log(prodId, prodName, prodPrice, prodCat);
// 					// loop through each category 
// 					for (var j = 0; j < categoryRef.length; j++) {
// 						var currentCategory = categoryRef[j];	
// 						var currentCategoryID = currentCategory.id;
// 						console.log("current category ID:", currentCategoryID);
// 						console.log("prod ID:", prodCat);
// 						// if the category ID is the same as the product ID, 
// 						if (currentCategory.id === prodCat) {
// 							// set prodCat equal to the NAME, not the ID, of the category and print to DOM
// 							prodCat = currentCategory.name;
// 							console.log("this is the right product category!", prodCat);
// 							// add the product category NAME to the card
// 							output += `<h5>${prodCat}</h5>`;
// 							// grab the season for a discount from the categories object
// 							prodDiscount = currentCategory.season_discount;
// 							console.log("discount season", prodDiscount);
// 							// if the current category's discount season is the same as the season the user chose,
// 							if (prodDiscount === discountReference) {
// 								console.log("DISCOUNTED RATE", currentCategory.discount);
// 								// calculate a discounted price
// 								discountPrice = (prodPrice - (prodPrice * currentCategory.discount)).toFixed(2);
// 								console.log("discounted price", discountPrice);
// 								// and print the discounted price inside the card
// 								output += `<h5>$${discountPrice}</h5></div>`;
// 							// if the item goes on sale in a season the user did not select, 
// 							} else {
// 								// just print the normal price inside the card
// 								output += `<h5>$${prodPrice}</h5></div>`;
// 							}

// 						}	

// 					}
// 					// put all the cards inside the container div 
// 					container.innerHTML += output;
// 				}

// 			}
// 		}
// 	}
// }

// var productsError = function() {
// 	console.log("Houston, we have a problem.");
// }

// var categoriesError = function() {
// 	console.log("Houston, we have a problem.");
// }




// webpage pulls in two files using XHR 
// for each product card: product, dept, price
// select element that applies seasonal discounts

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
		cardContents += `<div class='card'><h2>${currentProduct.name}</h2>`;
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
					cardContents += `<h5>$${discountedPrice}</h5></div>`;
				}
				else {
					// add normal price to page
					cardContents += `<h5>$${currentProduct.price}</h5></div>`;
				}
			}
		}
	}
	container.innerHTML = cardContents;
}












