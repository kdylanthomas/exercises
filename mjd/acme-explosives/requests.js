// Create a simple user interface for your product catalog where a user can select a category from a dropdown. When a category is selected, you must use Promises to read, first, from the categories.json to load that array of objects, then load types.json, then products.json.

// Once all data is loaded, you need to display the products in a Bootstrap grid. Each product must display the string name of its product type, and product category. Not the integer id value.
"use strict";

let categories = [];
let types = [];
let products = [];

function loadCategories(url) {
	return new Promise(function (resolve, reject) {
		let categoriesRequest = new XMLHttpRequest();
		categoriesRequest.onload = function() {
			if (this.status === 200) {
				let categoriesData = JSON.parse(this.responseText);
				console.log(categoriesData);
				categories = categoriesData.categories;
				resolve(categories);
			}
		}
		categoriesRequest.onerror = function () {
			reject(new Error (
				'XHR Error: ' + this.statusText));
		};
		categoriesRequest.open('GET', url);
		categoriesRequest.send();
	});
}

function loadTypes(url) {
	return new Promise(function (resolve, reject) {
		let typesRequest = new XMLHttpRequest();
		typesRequest.onload = function() {
			if (this.status === 200) {
				let typesData = JSON.parse(this.responseText);
				types = typesData.types;
				resolve(types);
			}
		}
		typesRequest.onerror = function () {
			reject(new Error (
				'XHR Error: ' + this.statusText));
		};
		typesRequest.open('GET', url);
		typesRequest.send();
	});
}

function loadProducts(url) {
	let productsRequest = new XMLHttpRequest();
	productsRequest.onload = function() {
		if (this.status === 200) {
			let productsData = JSON.parse(this.responseText);
			products = productsData.products;
		}
	}
	productsRequest.onerror = function () {
		reject(new Error (
			'XHR Error: ' + this.statusText));
	};
	productsRequest.open('GET', url);
	productsRequest.send();
}

let promise = loadCategories('categories.json');
promise.then(
	function (categories) {
		return loadTypes('types.json')
	}).then(function (types) {
		loadProducts('products.json')
	});

