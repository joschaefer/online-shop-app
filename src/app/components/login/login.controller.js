(function () {
	'use strict';

	angular
		.module('simpleOnlineShop')
		.controller('LoginController', LoginController);

	/** @ngInject */
	function LoginController($window, Restangular, principal) {

		var vm = this;

		vm.alerts = [];
		vm.user = {};

		vm.closeAlert = function (index) {
			vm.alerts.splice(index, 1);
		};

		vm.login = function () {

			vm.alerts = [];

			Restangular.all('login').post(vm.user).then(function (response) {

				if (response.token) {
					principal.login(response.token);
					$window.location.href = '/';
					return true;
				}

			}, function (error) {

				if (401 == error.status) {

					vm.alerts.push({
						type: 'danger',
						text: 'E-Mail-Adresse oder Passwort falsch.'
					});

				} else if (403 == error.status) {

					vm.alerts.push({
						type: 'danger',
						text: 'Es sind nicht die nötigen Rechte vorhanden, um diese Aktion auszuführen.'
					});

				} else {

					vm.alerts.push({
						type: 'warning',
						text: 'Ein Server-Fehler ist aufgetreten. Bitte später erneut versuchen.'
					});

				}

			});

			return false;

		};

	}

})();
