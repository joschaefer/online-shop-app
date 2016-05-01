(function() {
	'use strict';

	angular
		.module('simpleOnlineShop')
		.controller('AdminController', AdminController);

	/** @ngInject */
	function AdminController(Restangular, toastr, $window) {

		var vm = this;

		Restangular.all('categories').getList({
			sort: 'title ASC'
		}).then(function( data ) {
			vm.categories = data;
		});

		Restangular.all('products').getList({
			sort: 'title ASC'
		}).then(function( data ) {
			vm.products = data;
		});

		Restangular.all('users').getList({
			sort: 'email ASC'
		}).then(function( data ) {
			vm.users = data;
		});

		vm.toggleSelection = function( item ) {
			item.selected = ! item.selected;
		};

		vm.delete = function( collection, item, name, msg ) {

			var msgConfirm = _.replace( msg.confirm[0], '%s', name ),
				msgSuccess = _.replace( msg.success[0], '%s', name ),
				msgError   = _.replace( msg.error[0],   '%s', name );

			var isSure = $window.confirm( msgConfirm );

			if( isSure ) {

				item.remove().then(function() {

					var index = collection.indexOf( item );

					if ( index > -1 ) {
						collection.splice( index, 1 );
					}

					toastr.success( msgSuccess );

				}, function( response ) {

					console.log( 'Error deleting an item:', response );
					toastr.error( msgError );

				});

			}

		};

		vm.deleteSelected = function( collection, msg ) {

			var numberOfSelectedItems = _.countBy( collection, { selected: true } ).true;

			if( ! numberOfSelectedItems ) {
				$window.alert( msg.nothingSelected );
				return false;
			}

			var msgConfirm,
				msgSuccess,
				msgError;

			if( 1 === numberOfSelectedItems ) {

				msgConfirm = msg.confirm[1];
				msgSuccess = msg.success[1];
				msgError   = msg.error[1];

			} else {

				msgConfirm = _.replace( msg.confirm[2], '%d', numberOfSelectedItems );
				msgSuccess = _.replace( msg.success[2], '%d', numberOfSelectedItems );
				msgError   = _.replace( msg.error[2],   '%d', numberOfSelectedItems );

			}

			var isSure = $window.confirm( msgConfirm );

			if( isSure ) {

				var itemsToDelete = _.filter( collection, { selected: true } ),
					error = 0;

				_.each( itemsToDelete, function( item ) {

					item.remove().then(function() {

						var index = collection.indexOf( item );

						if ( index > -1 ) {
							collection.splice( index, 1 );
						}

					}, function( response ) {

						console.log( 'Error deleting an item:', response );
						error++;

					});

				});

				if( 0 == error ) {
					toastr.success( msgSuccess );
				} else {
					toastr.error( msgError );
				}

			}

			return false;

		};

		vm.activate = function( collection, item, name, msg ) {

			var msgSuccess = _.replace( msg.success[0], '%s', name ),
				msgError   = _.replace( msg.error[0],   '%s', name );

			item.active = true;

			item.save().then(function() {
				toastr.success( msgSuccess );
			}, function( response ) {

				console.log( 'Error activating an item:', response );
				toastr.error( msgError );

			});

		};

		vm.activateSelected = function( collection, msg ) {

			var numberOfSelectedItems = _.countBy( collection, { selected: true } ).true;

			if( ! numberOfSelectedItems ) {
				$window.alert( msg.nothingSelected );
				return false;
			}

			var msgSuccess,
				msgError;

			if( 1 === numberOfSelectedItems ) {
				msgSuccess = msg.success[1];
				msgError   = msg.error[1];
			} else {
				msgSuccess = _.replace( msg.success[2], '%d', numberOfSelectedItems );
				msgError   = _.replace( msg.error[2],   '%d', numberOfSelectedItems );
			}

			var itemsToActivate = _.filter( collection, { selected: true } ),
				error = 0;

			_.each( itemsToActivate, function( item ) {

				item.active = true;

				item.save().catch(function( response ) {
					console.log( 'Error activating an item:', response );
					error++;
				});

			});

			if( 0 == error ) {
				toastr.success( msgSuccess );
			} else {
				toastr.error( msgError );
			}

		};

		vm.deactivate = function( collection, item, name, msg ) {

			var msgSuccess = _.replace( msg.success[0], '%s', name ),
				msgError   = _.replace( msg.error[0],   '%s', name );

			item.active = false;

			item.save().then(function() {
				toastr.success( msgSuccess );
			}, function( response ) {

				console.log( 'Error activating an item:', response );
				toastr.error( msgError );

			});

		};

		vm.deactivateSelected = function( collection, msg ) {

			var numberOfSelectedItems = _.countBy( collection, { selected: true } ).true;

			if( ! numberOfSelectedItems ) {
				$window.alert( msg.nothingSelected );
				return false;
			}

			var msgSuccess,
				msgError;

			if( 1 === numberOfSelectedItems ) {
				msgSuccess = msg.success[1];
				msgError   = msg.error[1];
			} else {
				msgSuccess = _.replace( msg.success[2], '%d', numberOfSelectedItems );
				msgError   = _.replace( msg.error[2],   '%d', numberOfSelectedItems );
			}

			var itemsToDeactivate = _.filter( collection, { selected: true } ),
				error = 0;

			_.each( itemsToDeactivate, function( item ) {

				item.active = false;

				item.save().catch(function( response ) {
					console.log( 'Error deactivating an item:', response );
					error++;
				});

			});

			if( 0 == error ) {
				toastr.success( msgSuccess );
			} else {
				toastr.error( msgError );
			}

		};

	}
})();
