(function() {
	'use strict';

	angular
		.module('simpleOnlineShop')
		.controller('AdminProductsController', AdminProductsController);

	/** @ngInject */
	function AdminProductsController(Restangular) {

		var vm = this;

		Restangular.all('products').getList().then(function(data) {
			vm.products = data;
		});

		vm.toggleSelection = function(product) {
			product.selected = !product.selected;
		}

	}
})();
