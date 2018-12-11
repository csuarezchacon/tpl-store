(function () {
	angular.module('cart-module').factory('cartFactory', [ '$http', '$q', function($http, $q) {
		var vm = this;
		
		vm.cartGet = function(){ // Obtiene Lista Carrito
			var rs = $q.defer();
			$http({
				url: "w3/_cart_utils/items_get.php",
				method: 'GET',
				headers: {'Content-Type': 'application/x-www-form-urlencoded'}
			}).success(function(data, status, header, config) {
				rs.resolve(data);
			}).error(function(data, status, header, config) {
				rs.reject(data);
			});
			return rs.promise;
		};

		vm.cartItemRemove = function(_id){ // Elimina Item
			var rs = $q.defer();
			var dataJson = $.param({
				id: _id
			});
			$http({
				url: 'w3/_cart_utils/item_remove.php',
				method: 'POST',
				data: dataJson,
				headers: {'Content-Type': 'application/x-www-form-urlencoded'}
			}).success(function(data, status, header, config) {
				rs.resolve();
			}).error(function(data, status, header, config) {
				rs.reject();
			});
			return rs.promise;
		};

		return {
			cartGet: vm.cartGet,
			cartItemRemove: vm.cartItemRemove
		};
	}]);
})();