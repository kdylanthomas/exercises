
// Your job is to build a web page that lists all of the products, 
// the name of the department it's in, and the price. Additionally, put a 
// <select> element at the top of the page that contains all possible values 
// of the season_discount key in the categories file. As soon as you select 
// one of the seasons, all prices on the page should immediately be 
// discounted by the corresponding percentage.

var container = document.getElementById("product-container");
var discountSelects = document.getElementById("season-discounts");


// !!!!!!!!!!!!
// STEP ONE: open and send XML request for categories
var categoryRequest = new XMLHttpRequest();
categoryRequest.addEventListener("load", categoriesLoaded);
categoryRequest.addEventListener("error", categoriesError);
categoryRequest.open('GET', 'categories.json');
categoryRequest.send();

// !!!!!!!!!!!!
// STEP TWO: when categories.json loads, run a function that makes 
// categories object AND sends XML request for products.json

function categoriesLoaded () {
	var catData = JSON.parse(this.responseText);
	console.log(catData);
	var productRequest = new XMLHttpRequest();
	productRequest.addEventListener("load", productsLoaded);
	productRequest.addEventListener("error", productsError);
	productRequest.open('GET', 'products.json');
	productRequest.send();

	// !!!!!!!!!!!
	// STEP THREE: when products.json loads, run function that creates products object 

	function productsLoaded () {
		var prodData = JSON.parse(this.responseText);
		console.log(prodData);
		combineData();


		// !!!!!!!!!!!
		// STEP FOUR: combine the products object and the categories object into an array 
		// happy note to self: everything is nested so that the functions can look up for variable references

		function combineData () {
			var combinedData = [];
			combinedData.push(prodData);
			combinedData.push(catData);
			console.log(combinedData);
			outputToDOM();

			function outputToDOM () {
				// this refers to the products object
				var productsRef = combinedData[0].products; 
				// this refers to the categories object
				var categoryRef = combinedData[1].categories;
				console.log(categoryRef);
				console.log(productsRef);
				// loop through each product and pull ID, name, price, and category number
				for (var i = 0; i < productsRef.length; i++) {
					var currentProduct = productsRef[i];
					var prodId = currentProduct.id;
					var prodName = currentProduct.name;
					var prodPrice = currentProduct.price;
					var prodCat = currentProduct.category_id;
					var output = "";
					// start adding HTML to an output variable
					output += `<div class="card"><h1>${prodName}</h1><h5>$${prodPrice}</h5>`;
					console.log(prodId, prodName, prodPrice, prodCat);
					// loop through each category 
					for (var j = 0; j < categoryRef.length; j++) {
						var currentCategory = categoryRef[j];
						console.log("current category name:", currentCategory.name);	
						var currentCategoryID = currentCategory.id;
						console.log("current category ID:", currentCategoryID);
						console.log("prod ID:", prodCat);
						// if the category ID is the same as the product ID, 
						if (currentCategory.id === prodCat) {
							// set prodCat equal to the NAME, not the ID, of the category and print to DOM
							prodCat = currentCategory.name;
							console.log("this is the right product category!", prodCat);
							output += `<h5>${prodCat}</h5></div>`;
							container.innerHTML += output;
						}					
					}
				}
				// !!!!!!!!!!
				// STEP FIVE: add an event listener to the select dropdown to apply discounts 

				// !!!! current problems with this: 
					// 1: right now, it only works on the last item in the array (it's in the wrong place)
					// 2: it performs the discount regardless of whether it's the right season
					// maybe write this as its own function in global scope, call it inside a for loop?
				// when the user selects a different season,			
				discountSelects.addEventListener("change", function() {
					console.log("you chose a different season!");
					// loop through the options for seasons
					for (var i = 0; i < discountSelects.options.length; i++) {
						// go through the options and find the one that the user picked
						if (discountSelects.options[i].selected === true) {
							// set that value equal to "season"
							var season = discountSelects.options[i].value;
							console.log("season", season);
							console.log("just the product price", prodPrice);
							// calculate a discounted price
							var discountedPrice = prodPrice - prodPrice * currentCategory.discount;
							discountedPrice = discountedPrice.toFixed(2);
							console.log("discounted price for light bulb", discountedPrice);
						}

					}
				});
			}
		}
	}
}

// function applyDiscounts() {

// }

var productsError = function() {
	console.log("Houston, we have a problem.");
}

var categoriesError = function() {
	console.log("Houston, we have a problem.");
}


