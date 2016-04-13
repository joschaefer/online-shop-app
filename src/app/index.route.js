(function() {
	'use strict';

	angular
		.module('simpleOnlineShop')
		.config(routerConfig);

	/** @ngInject */
	function routerConfig($stateProvider, $urlRouterProvider) {

		$urlRouterProvider.otherwise('/');

		$stateProvider
			.state('home', {
				url: '/',
				views: {
					navbar: {
						templateUrl: 'app/components/navbar/navbar.html'
					},
					content: {
						templateUrl: 'app/components/products/products.html',
						controller: 'ProductsController',
						controllerAs: 'p'
					}
				}
			})
			.state('login', {
				url: '/login',
				views: {
					content: {
						templateUrl: 'app/components/login/login.html',
						controller: 'LoginController',
						controllerAs: 'l'
					}
				}
			})
			.state('admin', {
				url: '/admin/',
				views: {
					navbar: {
						templateUrl: 'app/components/navbar/navbar.html'
					},
					content: {
						templateUrl: 'app/components/admin/admin.html'
					}
				}
			})
			.state('admin.products', {
				url: 'products/',
				templateUrl: 'app/components/admin/admin.products.html',
				controller: 'AdminProductsController',
				controllerAs: 'a'
			})
			.state('admin.categories', {
				url: 'categories/',
				templateUrl: 'app/components/admin/admin.categories.html',
				controller: 'AdminCategoriesController',
				controllerAs: 'a'
			})
			.state('admin.users', {
				url: 'users/',
				templateUrl: 'app/components/admin/admin.users.html',
				controller: 'AdminUsersController',
				controllerAs: 'a'
			})
			.state('admin.settings', {
				url: 'settings/',
				templateUrl: 'app/components/admin/admin.settings.html',
				controller: 'AdminSettingsController',
				controllerAs: 'a'
			});

	}

})();
