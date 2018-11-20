(function() {
    angular.module('index-module').config([
        '$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider) {
            $urlRouterProvider.otherwise('store');

            $stateProvider.state('store', {
                url: '/store',
                templateUrl: 'w3/store/store.html'
            }).state('cart', {
                url: '/cart',
                templateUrl: 'w3/cart/cart.html'
            });
        }
    ]);
});