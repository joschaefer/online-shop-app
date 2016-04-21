(function() {
	'use strict';

	angular
		.module('simpleOnlineShop')
		.controller('AdminProductsController', AdminProductsController);

	/** @ngInject */
	function AdminProductsController($scope) {

		var vm = this,
			msg = {
				sureSpecific: 'Sind Sie sicher, dass Sie das Produkt „%s“ löschen wollen?',
				sureSingle: 'Sind Sie sicher, dass Sie ein Produkt löschen wollen?',
				sureMultiple: 'Sind Sie sicher, dass Sie %d Produkte löschen wollen?',
				successSpecific: 'Das Produkt „%s“ wurde erfolgreich gelöscht.',
				successSingle: 'Das Produkt wurde erfolgreich gelöscht.',
				successMultiple: 'Alle %d Produkte wurden erfolgreich gelöscht.',
				failureSpecific: 'Das Produkt „%s“ konnte nicht gelöscht werden.',
				failureSingle: 'Das Produkt konnte nicht gelöscht werden.',
				failureMultiple: 'Es konnten nicht alle %d Produkte gelöscht werden.',
				nothingSelected: 'Sie haben kein Produkt ausgewählt. Klicken Sie auf eine Tabellenzeile, um ein zu löschendes Produkt zu wählen.'
			};

		vm.delete = function( product ) {
			$scope.$parent.a.delete( $scope.$parent.a.products, product.id, product.title, msg );
		};

		vm.deleteSelected = function() {
			$scope.$parent.a.deleteSelected( $scope.$parent.a.products, msg );
		};

	}
})();
