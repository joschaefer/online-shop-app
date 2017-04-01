(function() {
	'use strict';

	angular
		.module('simpleOnlineShop')
		.controller('MainController', MainController);

	/** @ngInject */
	function MainController($window, principal, config) {

		var vm = this;

		vm.settings = config;

		vm.logout = function() {
			principal.logout();
			$window.location.href = '/';
		};

		vm.date = new Date();
		vm.user = principal.user;

	}
})();
