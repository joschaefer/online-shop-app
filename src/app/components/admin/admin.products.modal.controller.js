(function() {
	'use strict';

	angular
		.module('simpleOnlineShop')
		.controller('AdminProductsModalController', AdminProductsModalController);

	/** @ngInject */
	function AdminProductsModalController( Upload, $log ) {

		var vm = this;
		vm.product = {};

		vm.upload = function(file) {

			vm.file = file;
			vm.errorMsg = '';

			Upload.upload({
				url: 'http://localhost:1337/images/',
				data: {image: file}
			}).then(function (response) {
				if (response.status >= 200 && response.status < 300) {
					vm.product.image = response.data.id;
				} else {
					vm.errorMsg = 'Fehler beim Übertragen der Datei.';
					$log.error( 'Error uploading an image:', response );
					file = null;
				}
			}, function (err) {
				vm.errorMsg = 'Fehler beim Übertragen der Datei.';
				$log.error( 'Error uploading an image:', err );
				file = null;
			}, function (evt) {
				file.progress = Math.min(100, parseInt(100.0 * evt.loaded / evt.total));
			});

		}

	}

})();
