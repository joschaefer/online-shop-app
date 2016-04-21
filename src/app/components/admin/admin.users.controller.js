(function() {
	'use strict';

	angular
		.module('simpleOnlineShop')
		.controller('AdminUsersController', AdminUsersController);

	/** @ngInject */
	function AdminUsersController($scope) {

		var vm = this,
			msg = {
				sureSpecific: 'Sind Sie sicher, dass Sie den Benutzer „%s“ löschen wollen?',
				sureSingle: 'Sind Sie sicher, dass Sie einen Benutzer löschen wollen?',
				sureMultiple: 'Sind Sie sicher, dass Sie %d Benutzer löschen wollen?',
				successSpecific: 'Der Benutzer „%s“ wurde erfolgreich gelöscht.',
				successSingle: 'Der Benutzer wurde erfolgreich gelöscht.',
				successMultiple: 'Alle %d Benutzer wurden erfolgreich gelöscht.',
				failureSpecific: 'Der Benutzer „%s“ konnte nicht gelöscht werden.',
				failureSingle: 'Der Benutzer konnte nicht gelöscht werden.',
				failureMultiple: 'Es konnten nicht alle %d Benutzer gelöscht werden.',
				nothingSelected: 'Sie haben keinen Benutzer ausgewählt. Klicken Sie auf eine Tabellenzeile, um einen zu löschenden Benutzer zu wählen.'
			};

		vm.date = _.now();

		vm.delete = function( user ) {
			$scope.$parent.a.delete( $scope.$parent.a.users, user.id, user.email, msg );
		};

		vm.deleteSelected = function() {
			$scope.$parent.a.deleteSelected( $scope.$parent.a.users, msg );
		};

	}
})();
