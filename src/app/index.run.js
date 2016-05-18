(function() {
	'use strict';

	angular
		.module('simpleOnlineShop')
		.run(runBlock);

	/** @ngInject */
	function runBlock($rootScope, $log, $state, Restangular, principal) {

		if( principal.token ) {
			Restangular.setDefaultHeaders({
				authorization: 'JWT ' + principal.token
			});
		}

		$rootScope.$on('$stateChangeStart', function (event, toState) {
			if( 'login' !== toState.name && !principal.token ) {
				event.preventDefault();
				$state.go('login');
			}
		});

		$log.debug('run block end');

	}

})();
