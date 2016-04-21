(function() {
	'use strict';

	angular
		.module('simpleOnlineShop')
		.controller('AdminController', AdminController);

	/** @ngInject */
	function AdminController(Restangular, toastr, $window) {

		var vm = this;

		Restangular.all('categories').getList().then(function( data ) {
			vm.categories = data;
		});

		Restangular.all('products').getList().then(function( data ) {
			vm.products = data;
		});

		Restangular.all('users').getList().then(function( data ) {
			vm.users = data;
		});

		vm.toggleSelection = function( item ) {
			item.selected = ! item.selected;
		};

		vm.delete = function( collection, id, name, msg ) {

			var msgSure = _.replace( msg.sureSpecific, '%s', name ),
				msgSuccess = _.replace( msg.successSpecific, '%s', name ),
				msgFailure = _.replace( msg.failureSpecific, '%s', name );

			var isSure = $window.confirm( msgSure );

			if( isSure ) {

				if( _.remove( collection, { id: id } ) ) {
					toastr.success( msgSuccess );
					return true;
				}

				toastr.failed( msgFailure );
				return false;

			}

		};

		vm.deleteSelected = function( collection, msg ) {

			var numberOfSelectedItems = _.countBy( collection, { selected: true } ).true;

			if( ! numberOfSelectedItems ) {
				$window.alert( msg.nothingSelected );
				return false;
			}

			var msgSure,
				msgSuccess,
				msgFailure;

			if( 1 === numberOfSelectedItems ) {

				msgSure = msg.sureSingle;
				msgSuccess = msg.successSingle;
				msgFailure = msg.failureSingle;

			} else {

				msgSure = _.replace( msg.sureMultiple, '%d', numberOfSelectedItems );
				msgSuccess = _.replace( msg.successMultiple, '%d', numberOfSelectedItems );
				msgFailure = _.replace( msg.failureMultiple, '%d', numberOfSelectedItems );

			}

			var isSure = $window.confirm( msgSure );

			if( isSure ) {

				if ( _.remove( collection, { selected: true } ) ) {
					toastr.success( msgSuccess );
					return true;
				}

				toastr.failed( msgFailure );
				return false;

			}

			return false;

		};

	}
})();
