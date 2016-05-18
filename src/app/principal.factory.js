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
				isAdmin: false
			}
		};

		principal.login = function (token) {
			localStorageService.set('access_token', token);
			$log.info('[Auth] Local access token saved');
		};

		principal.logout = function () {
			localStorageService.remove('access_token');
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
				principal.user = decoded.user;
				principal.token = token;
			}

		} catch (e) {
			$log.error('[Auth] Parsing of local access token failed');
		}

		return principal;

	}

})();
