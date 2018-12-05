(function () {
	angular.module('cart-module').controller('cartController', [ '$http', '$q', 'cartFactory', function($http, $q, cartFactory) {
		var vm = this;

		vm.cart = {};
		cartGet();
		
		function cartGet() {
			cartFactory.cartGet().then(function(rs) {
				vm.cart = rs;
			});
		};
		
		vm.cartItemAdd = function() {
			cartFactory.cartItemAdd().then(function(rs) {
				cartGet();
			});
		};

		vm.cartItemRemove = function(index) {
			cartFactory.cartItemRemove(index).then(function(rs) {
				cartGet();
			});
		}
	}]);
})();