(function() {
	'use strict';

	angular
		.module('simpleOnlineShop')
		.controller('AdminCategoriesController', AdminCategoriesController);

	/** @ngInject */
	function AdminCategoriesController(Restangular) {

		var vm = this;

		Restangular.all('categories').getList().then(function(data) {
			vm.categories = data;
		});

		vm.toggleSelection = function(category) {
			category.selected = !category.selected;
		}

	}
})();
