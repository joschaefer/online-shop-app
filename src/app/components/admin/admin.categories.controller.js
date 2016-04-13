(function() {
	'use strict';

	angular
		.module('simpleOnlineShop')
		.controller('AdminCategoriesController', AdminCategoriesController);

	/** @ngInject */
	function AdminCategoriesController() {
		var vm = this;
		vm.categories = [{
			title: 'Kategorie #1',
			numberOfProducts: 2
		},{
			title: 'Kategorie #2',
			numberOfProducts: 7
		},{
			title: 'Kategorie #3',
			numberOfProducts: 4
		}];
	}
})();
