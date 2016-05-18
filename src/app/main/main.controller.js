(function() {
	'use strict';

	angular
		.module('simpleOnlineShop')
		.controller('MainController', MainController);

	/** @ngInject */
	function MainController($window, principal) {

		var vm = this;

		vm.settings = {
			shopName: 'Einfacher Online-Shop',
			baseUrl: 'http://localhost:1337',
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

		vm.logout = function() {
			principal.logout();
			$window.location.href = '/';
		};

		vm.date = new Date();

	}
})();
