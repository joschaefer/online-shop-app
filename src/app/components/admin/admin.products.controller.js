(function() {
	'use strict';

	angular
		.module('simpleOnlineShop')
		.controller('AdminProductsController', AdminProductsController);

	/** @ngInject */
	function AdminProductsController($scope) {

		var vm = this,
			msg = {
				delete: {
					confirm: [
						'Sind Sie sicher, dass Sie das Produkt „%s“ löschen wollen?',
						'Sind Sie sicher, dass Sie ein Produkt löschen wollen?',
						'Sind Sie sicher, dass Sie %d Produkte löschen wollen?'
					],
					success: [
						'Das Produkt „%s“ wurde erfolgreich gelöscht.',
						'Das Produkt wurde erfolgreich gelöscht.',
						'Alle %d Produkte wurden erfolgreich gelöscht.'
					],
					error: [
						'Das Produkt „%s“ konnte nicht gelöscht werden.',
						'Das Produkt konnte nicht gelöscht werden.',
						'Es konnten nicht alle %d Produkte gelöscht werden.'
					],
					nothingSelected: 'Sie haben kein Produkt ausgewählt. Klicken Sie auf eine Tabellenzeile, um ein Produkt zu wählen, das Sie löschen möchten.'
				},
				activate: {
					success: [
						'Das Produkt „%s“ wurde erfolgreich aktiviert.',
						'Das Produkt wurde erfolgreich aktiviert.',
						'Alle %d Produkte wurden erfolgreich aktiviert.'
					],
					error: [
						'Das Produkt „%s“ konnte nicht aktiviert werden.',
						'Das Produkt konnte nicht aktiviert werden.',
						'Es konnten nicht alle %d Produkte aktiviert werden.'
					],
					nothingSelected: 'Sie haben kein Produkt ausgewählt. Klicken Sie auf eine Tabellenzeile, um ein Produkt zu wählen, das Sie aktivieren möchten.'
				},
				deactivate: {
					success: [
						'Das Produkt „%s“ wurde erfolgreich deaktiviert.',
						'Das Produkt wurde erfolgreich deaktiviert.',
						'Alle %d Produkte wurden erfolgreich deaktiviert.'
					],
					error: [
						'Das Produkt „%s“ konnte nicht deaktiviert werden.',
						'Das Produkt konnte nicht deaktiviert werden.',
						'Es konnten nicht alle %d Produkte deaktiviert werden.'
					],
					nothingSelected: 'Sie haben kein Produkt ausgewählt. Klicken Sie auf eine Tabellenzeile, um ein Produkt zu wählen, das Sie deaktivieren möchten.'
				}
			};

		vm.delete = function( product ) {
			$scope.$parent.a.delete( $scope.$parent.a.products, product, product.title, msg.delete );
		};

		vm.deleteSelected = function() {
			$scope.$parent.a.deleteSelected( $scope.$parent.a.products, msg.delete );
		};

		vm.activate = function( product ) {
			$scope.$parent.a.activate( $scope.$parent.a.products, product, product.title, msg.activate );
		};

		vm.activateSelected = function() {
			$scope.$parent.a.activateSelected( $scope.$parent.a.products, msg.activate );
		};

		vm.deactivate = function( product ) {
			$scope.$parent.a.deactivate( $scope.$parent.a.products, product, product.title, msg.deactivate );
		};

		vm.deactivateSelected = function() {
			$scope.$parent.a.deactivateSelected( $scope.$parent.a.products, msg.deactivate );
		};

	}
})();
