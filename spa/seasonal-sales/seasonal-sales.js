"use strict";
// webpage pulls in two files using XHR
// for each product card: product, dept, price
// select element that immediately applies seasonal discounts

// declare these variables in global scope for use in updateDOM()--update their values inside loader functions
let categoriesData;
let productsData;
let categories;
let products;


$.ajax({
	url: 'categories.json'
}).done(createCategoriesObject);

function createCategoriesObject(categoriesData) {
	categories = categoriesData.categories;
	$.ajax({
		url: 'products.json'
	}).done(createProductsObject);

	function createProductsObject(productsData) {
		products = productsData.products;
		$('#season-discounts').on('change', updateDOM);
		updateDOM();
	}
}


function updateDOM() {
	let cardContents = "";

	$(products).each((i, currentProduct) => {
		console.log(currentProduct);
		cardContents += `<div class='card col-md-3'><h2>${currentProduct.name}</h2>`;
		$(categories).each((j, currentCategory) => {
			if (currentProduct.category_id === currentCategory.id) {
				cardContents += `<h5>${categories[j].name}</h5>`;
				if (($('#season-discounts').val() === currentCategory.season_discount)) {
					let discountRate = currentCategory.discount;
					// calculate a discounted price
					let discountedPrice = currentProduct.price - (currentProduct.price * discountRate);
					discountedPrice = discountedPrice.toFixed(2);
					cardContents += `<h5 class="discounted">$${discountedPrice}</h5>`;
				} else {
					cardContents += `<h5>$${currentProduct.price}</h5>`;
				}
				cardContents += `<p><a href="#" class="btn btn-primary" role="button">Add To Cart</a></p></div>`;
			}
		});
	});
	$('#product-container').html(cardContents);

	// adds sale class to sale items when selected
	$('.card').each((i, currCard) => {
		let searchForSale = $(currCard).html();
		if (searchForSale.indexOf("discounted") !== -1) {
			$(currCard).addClass('sale');
		}
	});
}












