(function() {
	'use strict';

	angular
		.module('simpleOnlineShop')
		.run(runBlock);

	/** @ngInject */
	function runBlock($log) {

		$log.debug('runBlock end');
	}

})();
