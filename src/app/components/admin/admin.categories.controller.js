(function() {
	'use strict';

	angular
		.module('simpleOnlineShop')
		.controller('AdminCategoriesController', AdminCategoriesController);

	/** @ngInject */
	function AdminCategoriesController($scope) {

		var vm = this,
			msg = {
				sureSpecific: 'Sind Sie sicher, dass Sie die Kategorie „%s“ löschen wollen?',
				sureSingle: 'Sind Sie sicher, dass Sie eine Kategorie löschen wollen?',
				sureMultiple: 'Sind Sie sicher, dass Sie %d Kategorien löschen wollen?',
				successSpecific: 'Die Kategorie „%s“ wurde erfolgreich gelöscht.',
				successSingle: 'Die Kategorie wurde erfolgreich gelöscht.',
				successMultiple: 'Alle %d Kategorien wurden erfolgreich gelöscht.',
				failureSpecific: 'Die Kategorie „%s“ konnte nicht gelöscht werden.',
				failureSingle: 'Die Kategorie konnte nicht gelöscht werden.',
				failureMultiple: 'Es konnten nicht alle %d Kategorien gelöscht werden.',
				nothingSelected: 'Sie haben keine Kategorie ausgewählt. Klicken Sie auf eine Tabellenzeile, um eine zu löschende Kategorie zu wählen.'
			};

		vm.delete = function( category ) {
			$scope.$parent.a.delete( $scope.$parent.a.categories, category.id, category.title, msg );
		};

		vm.deleteSelected = function() {
			$scope.$parent.a.deleteSelected( $scope.$parent.a.categories, msg );
		};

	}
})();
