(function() {
	'use strict';

	angular
		.module('simpleOnlineShop')
		.config(config);

	/** @ngInject */
	function config($logProvider, toastrConfig, cfpLoadingBarProvider, LightboxProvider, RestangularProvider) {
		// Enable log
		$logProvider.debugEnabled(true);

		toastrConfig.timeOut = 5000;
		toastrConfig.positionClass = 'toast-top-right';
		toastrConfig.preventDuplicates = false;
		toastrConfig.progressBar = false;

		cfpLoadingBarProvider.includeSpinner = false;

		LightboxProvider.getImageUrl = function( product ) {
			return product.image.medium;
		};

		LightboxProvider.getImageCaption = function( product ) {
			return product.title;
		};

		LightboxProvider.templateUrl = 'app/components/products/lightbox.html';

		RestangularProvider.setBaseUrl( 'http://localhost:1337' );
		//RestangularProvider.setDefaultHttpFields({cache: true});

	}

})();
