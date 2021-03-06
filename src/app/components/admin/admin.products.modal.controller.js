(function() {
	'use strict';

	angular
		.module('simpleOnlineShop')
		.controller('AdminProductsModalController', AdminProductsModalController);

	/** @ngInject */
	function AdminProductsModalController( Upload, $log, principal, config ) {

		var vm = this;
		vm.product = {};

		vm.upload = function(file) {

			vm.file = file;
			vm.errorMsg = '';

			Upload.upload({
				url: config.baseUrl + '/images/',
				headers: {'Authorization': 'JWT ' + principal.token},
				data: {image: file}
			}).then(function (response) {
				if (response.status >= 200 && response.status < 300) {
					vm.product.image = response.data.id;
				} else {
					vm.errorMsg = 'Fehler beim Übertragen der Datei.';
					$log.error( 'Error uploading an image:', response );
					vm.file = null;
				}
			}, function (err) {
				vm.errorMsg = 'Fehler beim Übertragen der Datei.';
				$log.error( 'Error uploading an image:', err );
				vm.file = null;
			}, function (evt) {
				file.progress = Math.min(100, parseInt(100.0 * evt.loaded / evt.total));
			});

		}

	}

})();
