(function() {
	'use strict';

	angular
		.module('simpleOnlineShop')
		.controller('MainController', MainController);

	/** @ngInject */
	function MainController() {

		var vm = this;

		vm.settings = {
			shopName: 'Einfacher Online-Shop',
			copyright: {
				text: 'Musterfirma GmbH',
				link: '#'
			},
			notification: {
				sender: {
					name: 'Musterfirma GmbH',
					emailAddress: 'info@musterfirma.de'
				},
				text: ''
			}
		};

		vm.date = new Date();

	}
})();
