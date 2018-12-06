(function() {
	angular.module('index-module').config([
		'$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider) {
			$urlRouterProvider.otherwise('store');

			$stateProvider.state('store', {
				url: '/store',
				controller: 'storeController',
				controllerAs: 'vmStore',
				templateUrl: 'w3/store/store.html'
			}).state('cart', {
				url: '/cart',
				controller: 'cartController',
				controllerAs: 'vmCart',
				templateUrl: 'w3/cart/cart.html'
			});
		}
	]);
})();