(function() {
	'use strict';

	angular
		.module('simpleOnlineShop')
		.controller('AdminUsersController', AdminUsersController);

	/** @ngInject */
	function AdminUsersController() {
		var vm = this;
		vm.users = [{
			emailAddress: 'mail@beispiel.de',
			password: 'geheim123',
			status: 'Kunde',
			active: true
		},{
			emailAddress: 'mail@beispiel.de',
			password: 'geheim123',
			status: 'Kunde',
			active: true
		},{
			emailAddress: 'mail@beispiel.de',
			password: 'geheim123',
			status: 'Kunde',
			active: false
		},{
			emailAddress: 'mail@beispiel.de',
			password: 'geheim123',
			status: 'Administrator',
			active: true
		}];
	}
})();
