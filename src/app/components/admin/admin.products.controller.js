(function() {
	'use strict';

	angular
		.module('simpleOnlineShop')
		.controller('AdminProductsController', AdminProductsController);

	/** @ngInject */
	function AdminProductsController( $scope, $uibModal ) {

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
				add: {
					success: [
						'Das Produkt „%s“ wurde erfolgreich hinzugefügt.',
						'Das Produkt wurde erfolgreich hinzugefügt.',
						'Alle %d Produkte wurden erfolgreich hinzugefügt.'
					],
					error: [
						'Das Produkt „%s“ konnte nicht hinzugefügt werden.',
						'Das Produkt konnte nicht hinzugefügt werden.',
						'Es konnten nicht alle %d Produkte hinzugefügt werden.'
					]
				},
				save: {
					success: [
						'Das Produkt „%s“ wurde erfolgreich gespeichert.',
						'Das Produkt wurde erfolgreich gespeichert.',
						'Alle %d Produkte wurden erfolgreich gespeichert.'
					],
					error: [
						'Das Produkt „%s“ konnte nicht gespeichert werden.',
						'Das Produkt konnte nicht gespeichert werden.',
						'Es konnten nicht alle %d Produkte gespeichert werden.'
					]
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

		vm.editing = [];

		vm.select = function( product ) {
			if( ! vm.editing[ product.id ] ) {
				$scope.$parent.a.toggleSelection(product);
			}
		};

		vm.add = function() {

			$uibModal.open({
				templateUrl: 'app/components/admin/admin.products.modal.html',
				scope: $scope,
				controller: 'AdminProductsModalController',
				controllerAs: 'n'
			}).result.then(function( newProduct ) {
				$scope.$parent.a.add( $scope.$parent.a.products, newProduct, newProduct.title, msg.add );
			});

		};

		vm.edit = function( product ) {
			vm.editing[ product.id ] = angular.copy(product);
		};

		vm.cancel = function( product ) {

			if( vm.editing[ product.id ] ) {

				var index = $scope.$parent.a.products.indexOf( product );
				$scope.$parent.a.products[ index ] = vm.editing[ product.id ];

				vm.editing.splice( product.id, 1 );

			}

		};

		vm.save = function( product ) {
			$scope.$parent.a.update( product, product.title, msg.save );
			vm.editing.splice( product.id, 1 );
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
