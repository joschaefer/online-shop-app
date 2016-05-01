(function() {
	'use strict';

	angular
		.module('simpleOnlineShop')
		.controller('AdminCategoriesController', AdminCategoriesController);

	/** @ngInject */
	function AdminCategoriesController( $scope, toastr ) {

		var vm = this,
			msg = {
				delete: {
					confirm: [
						'Sind Sie sicher, dass Sie die Kategorie „%s“ löschen wollen?',
						'Sind Sie sicher, dass Sie eine Kategorie löschen wollen?',
						'Sind Sie sicher, dass Sie %d Kategorien löschen wollen?'
					],
					success: [
						'Die Kategorie „%s“ wurde erfolgreich gelöscht.',
						'Die Kategorie wurde erfolgreich gelöscht.',
						'Alle %d Kategorien wurden erfolgreich gelöscht.'
					],
					error: [
						'Die Kategorie „%s“ konnte nicht gelöscht werden.',
						'Die Kategorie konnte nicht gelöscht werden.',
						'Es konnten nicht alle %d Kategorien gelöscht werden.'
					],
					notEmpty: [
						'Die Kategorie „%s“ enthält noch Produkte und kann daher nicht gelöscht werden.',
						'Die Kategorie enthält noch Produkte und kann daher nicht gelöscht werden.',
						'Einer der gewählten Kategorien enthält noch Produkte und kann daher nicht gelöscht werden.'
					],
					nothingSelected: 'Sie haben keine Kategorie ausgewählt. Klicken Sie auf eine Tabellenzeile, um eine Kategorie zu wählen, die Sie löschen möchten.'
				}
			};

		vm.delete = function( category ) {

			if( 0 !== category.products.length ) {
				toastr.error( _.replace( msg.delete.notEmpty[0], '%s', category.title ) );
				return;
			}

			$scope.$parent.a.delete( $scope.$parent.a.categories, category, category.title, msg.delete );

		};

		vm.deleteSelected = function() {

			var notEmpty = _.some( $scope.$parent.a.categories, function( category ) {
				if( category.selected && 0 !== category.products.length ) {
					return true;
				}
			});

			if( notEmpty ) {
				toastr.error(msg.delete.notEmpty[2]);
				return;
			}

			$scope.$parent.a.deleteSelected( $scope.$parent.a.categories, msg.delete );

		};

	}
})();
