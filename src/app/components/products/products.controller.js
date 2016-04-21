(function() {
	'use strict';

	angular
		.module('simpleOnlineShop')
		.controller('ProductsController', ProductsController);

	/** @ngInject */
	function ProductsController(Restangular, Lightbox) {

		var vm = this;
		vm.categories = [];
		vm.products = [];

		vm.openPreview = function( index ) {
			Lightbox.openModal( vm.products, index );
		};

		Restangular.all('categories').getList({
			sort: 'title asc'
		}).then(function( categories ) {

			Restangular.all('products').getList({
				sort: 'title asc',
				active: true
			}).then(function( products ) {

				var groupedProducts = _.groupBy( products, 'category.id' );

				// Add products to categories
				_.forEach( categories, function( category, key ) {
					categories[ key ].products = groupedProducts[ category.id ];
				});

				vm.categories = categories;
				vm.products = products;

			});

		});

	}

})();
