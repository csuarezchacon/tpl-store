(function () {
	angular.module('cart-module').controller('cartController', [ '$http', 'cartFactory', function($http, cartFactory) {
		var vm = this;

		vm.cart = {};
		cartGet();
		
		function cartGet() {
			cartFactory.cartGet().then(function(rs) {
				vm.cart = rs;
			});
		};

		vm.cartItemRemove = function(_id) {
			cartFactory.cartItemRemove(_id).then(function(rs) {
				cartGet();
			});
		};
	}]);
})();