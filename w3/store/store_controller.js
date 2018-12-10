(function () {
	angular.module('store-module').controller('storeController', [
		'$http', '$q', 'storeFactory', function($http, $q, storeFactory) {
			var vm = this;
			vm.saludo = "holoooo";
			
			vm.cartItemAdd = function(_id) { // Agrega Item
				storeFactory.cartItemAdd(_id).then(function(rs) {
					
				});
			};
			vm.cartUnset = function() { // Elimina Carro
				storeFactory.cartUnset().then(function(rs) {
					
				});
			};
		}
	]);
})();