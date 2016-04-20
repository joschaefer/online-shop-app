(function() {
	'use strict';

	angular
		.module('simpleOnlineShop')
		.controller('AdminUsersController', AdminUsersController);

	/** @ngInject */
	function AdminUsersController(Restangular) {

		var vm = this;

		Restangular.all('users').getList().then(function(data) {
			vm.users = data;
		});

		vm.toggleSelection = function(user) {
			user.selected = !user.selected;
		}

	}
})();
