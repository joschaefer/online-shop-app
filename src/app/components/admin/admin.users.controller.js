(function() {
	'use strict';

	angular
		.module('simpleOnlineShop')
		.controller('AdminUsersController', AdminUsersController);

	/** @ngInject */
	function AdminUsersController( $scope, toastr ) {

		var vm = this,
			msg = {
				delete: {
					confirm: [
						'Sind Sie sicher, dass Sie den Benutzer „%s“ löschen wollen?',
						'Sind Sie sicher, dass Sie einen Benutzer löschen wollen?',
						'Sind Sie sicher, dass Sie %d Benutzer löschen wollen?'
					],
					success: [
						'Der Benutzer „%s“ wurde erfolgreich gelöscht.',
						'Der Benutzer wurde erfolgreich gelöscht.',
						'Alle %d Benutzer wurden erfolgreich gelöscht.'
					],
					error: [
						'Der Benutzer „%s“ konnte nicht gelöscht werden.',
						'Der Benutzer konnte nicht gelöscht werden.',
						'Es konnten nicht alle %d Benutzer gelöscht werden.'
					],
					admin: [
						'Der Benutzer „%s“ ist Administrator und kann daher nicht gelöscht werden.',
						'Der Benutzer ist Administrator und kann daher nicht gelöscht werden.',
						'Einer der gewählten Benutzer ist Administrator und kann daher nicht gelöscht werden.'
					],
					nothingSelected: 'Sie haben keinen Benutzer ausgewählt. Klicken Sie auf eine Tabellenzeile, um einen Benutzer zu wählen, den Sie löschen möchten.'
				},
				activate: {
					success: [
						'Der Benutzer „%s“ wurde erfolgreich aktiviert.',
						'Der Benutzer wurde erfolgreich aktiviert.',
						'Alle %d Benutzer wurden erfolgreich aktiviert.'
					],
					error: [
						'Der Benutzer „%s“ konnte nicht aktiviert werden.',
						'Der Benutzer konnte nicht aktiviert werden.',
						'Es konnten nicht alle %d Benutzer aktiviert werden.'
					],
					nothingSelected: 'Sie haben keinen Benutzer ausgewählt. Klicken Sie auf eine Tabellenzeile, um einen Benutzer zu wählen, den Sie aktivieren möchten.'
				},
				deactivate: {
					success: [
						'Der Benutzer „%s“ wurde erfolgreich deaktiviert.',
						'Der Benutzer wurde erfolgreich deaktiviert.',
						'Alle %d Benutzer wurden erfolgreich deaktiviert.'
					],
					error: [
						'Der Benutzer „%s“ konnte nicht deaktiviert werden.',
						'Der Benutzer konnte nicht deaktiviert werden.',
						'Es konnten nicht alle %d Benutzer deaktiviert werden.'
					],
					admin: [
						'Der Benutzer „%s“ ist Administrator und kann daher nicht deaktiviert werden.',
						'Der Benutzer ist Administrator und kann daher nicht deaktiviert werden.',
						'Einer der gewählten Benutzer ist Administrator und kann daher nicht deaktiviert werden.'
					],
					nothingSelected: 'Sie haben keinen Benutzer ausgewählt. Klicken Sie auf eine Tabellenzeile, um einen Benutzer zu wählen, den Sie deaktivieren möchten.'
				}
			};

		vm.date = _.now();

		vm.delete = function( user ) {

			if( 'admin' == user.status ) {
				toastr.error( _.replace( msg.delete.admin[0], '%s', user.email ) );
				return;
			}

			$scope.$parent.a.delete( $scope.$parent.a.users, user, user.email, msg.delete );

		};

		vm.deleteSelected = function() {

			if( _.some( $scope.$parent.a.users, { selected: true, status: 'admin' } ) ) {
				toastr.error( msg.delete.admin[2] );
				return;
			}

			$scope.$parent.a.deleteSelected( $scope.$parent.a.users, msg.delete );

		};

		vm.activate = function( user ) {
			$scope.$parent.a.activate( $scope.$parent.a.users, user, user.email, msg.activate );
		};

		vm.activateSelected = function() {
			$scope.$parent.a.activateSelected( $scope.$parent.a.users, msg.activate );
		};

		vm.deactivate = function( user ) {

			if( 'admin' == user.status ) {
				toastr.error( _.replace( msg.deactivate.admin[0], '%s', user.email ) );
				return;
			}

			$scope.$parent.a.deactivate( $scope.$parent.a.users, user, user.email, msg.deactivate );

		};

		vm.deactivateSelected = function() {

			if( _.some( $scope.$parent.a.users, { selected: true, status: 'admin' } ) ) {
				toastr.error( msg.deactivate.admin[2] );
				return;
			}

			$scope.$parent.a.deactivateSelected( $scope.$parent.a.users, msg.deactivate );

		};

	}
})();
