(function() {
	'use strict';

	angular
		.module('simpleOnlineShop')
		.factory('principal', factory);

	/** @ngInject */
	function factory($log, jwtHelper, localStorageService) {

		var principal = {
			isAuthenticated: false,
			user: {
				email: 'Gast',
				status: 'guest'
			}
		};

		principal.login = function (token, user) {
			localStorageService.set('access_token', token);
			localStorageService.set('user_info', user);
			$log.info('[Auth] Local access token saved');
		};

		principal.logout = function () {
			localStorageService.remove('access_token');
			localStorageService.remove('user_info');
			$log.info('[Auth] Local access token removed');
		};

		var token = localStorageService.get('access_token');

		if (!token) {
			$log.info('[Auth] No local access token found');
			return principal;
		}

		try {

			var decoded = jwtHelper.decodeToken(token);

			if (decoded && !jwtHelper.isTokenExpired(token)) {
				principal.isAuthenticated = true;
				principal.user = localStorageService.get('user_info');
				principal.token = token;
			}

		} catch (e) {
			$log.error('[Auth] Parsing of local access token failed');
		}

		return principal;

	}

})();
