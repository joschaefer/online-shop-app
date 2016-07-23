(function() {
	'use strict';

	angular
		.module('simpleOnlineShop')
		.constant('config', {
			shopName: 'Einfacher Online-Shop',
			baseUrl:  'http://localhost:1337',
			copyright: {
				text: 'Musterfirma GmbH',
				link: '#'
			}
		})
		.config(config);

	/** @ngInject */
	function config($logProvider, toastrConfig, cfpLoadingBarProvider, LightboxProvider, RestangularProvider, config) {
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

		RestangularProvider.setBaseUrl( config.baseUrl );
		//RestangularProvider.setDefaultHttpFields({cache: true});

	}

})();
