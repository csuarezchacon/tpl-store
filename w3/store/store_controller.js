(function () {
	angular.module('store-module').controller('storeController', [
		'$http', '$q', 'storeFactory', function($http, $q, storeFactory) {
			var vm = this;
			vm.saludo = "aasdfh";
			/*vm.cartItemAdd = function() {
				storeFactory.cartItemAdd().then(function(rs) {
					alert("producto agregado");
				});
			};*/
	}]);
})();