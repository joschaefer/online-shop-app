(function() {
	'use strict';

	angular
		.module('simpleOnlineShop')
		.controller('ProductsController', ProductsController);

	/** @ngInject */
	function ProductsController(Lightbox) {

		var vm = this;

		vm.openPreview = function( index ) {
			Lightbox.openModal( vm.products, index );
		};

		vm.products = [{
			title: 'Produkt #1',
			number: '2014.08.1337',
			image: {
				thumb: 'http://dummyimage.com/400x300/ccc/777.jpg',
				original: 'http://dummyimage.com/800x600/575757/fff.jpg?text=Produkt+0x231'
			}
		},{
			title: 'Produkt #2',
			number: '2014.08.1338',
			image: {
				thumb: 'http://dummyimage.com/400x300/ccc/777.jpg',
				original: 'http://dummyimage.com/800x600/575757/fff.jpg?text=Produkt+0x232'
			}
		},{
			title: 'Produkt #3',
			number: '2014.08.1339',
			image: {
				thumb: 'http://dummyimage.com/400x300/ccc/777.jpg',
				original: 'http://dummyimage.com/800x600/575757/fff.jpg?text=Produkt+0x233'
			}
		},{
			title: 'Produkt #4',
			number: '2014.08.1340',
			image: {
				thumb: 'http://dummyimage.com/400x300/ccc/777.jpg',
				original: 'http://dummyimage.com/800x600/575757/fff.jpg?text=Produkt+0x234'
			}
		},{
			title: 'Produkt #5',
			number: '2013.08.42',
			image: {
				thumb: 'http://dummyimage.com/400x300/ccc/777.jpg',
				original: 'http://dummyimage.com/800x600/575757/fff.jpg?text=Produkt+0x235'
			}
		},{
			title: 'Produkt #6',
			number: '2013.08.43',
			image: {
				thumb: 'http://dummyimage.com/400x300/ccc/777.jpg',
				original: 'http://dummyimage.com/800x600/575757/fff.jpg?text=Produkt+0x236'
			}
		},{
			title: 'Produkt #7',
			number: '2013.08.44',
			image: {
				thumb: 'http://dummyimage.com/400x300/ccc/777.jpg',
				original: 'http://dummyimage.com/800x600/575757/fff.jpg?text=Produkt+0x237'
			}
		},{
			title: 'Produkt #8',
			number: '2013.08.45',
			image: {
				thumb: 'http://dummyimage.com/400x300/ccc/777.jpg',
				original: 'http://dummyimage.com/800x600/575757/fff.jpg?text=Produkt+0x238'
			}
		}];

	}
})();
