(function () {
	angular.module('store-module').factory('storeFactory', [ '$http', '$q', function($http, $q) {
		var vm = this;

		vm.cartItemAdd = function(_id){ // Agrega Item
			var rs = $q.defer();
			var dataJson = $.param({
				id: _id
			});
			$http({
				url: "w3/_cart_utils/item_add.php",
				method: "POST",
				data: dataJson,
				headers: {'Content-Type': 'application/x-www-form-urlencoded'}
			}).success(function(data, status, header, config) {
				rs.resolve(data);
			}).error(function(data, status, header, config) {
				rs.reject(data);
			});
			return rs.promise;
		};
		vm.cartUnset = function(){ // Elimina Carro
			var rs = $q.defer();
			$http({
				url: "w3/_cart_utils/cart_unset.php",
				method: "POST",
				headers: {'Content-Type': 'application/x-www-form-urlencoded'}
			}).success(function(data, status, header, config) {
				rs.resolve(data);
			}).error(function(data, status, header, config) {
				rs.reject(data);
			});
			return rs.promise;
		};

		return {
			cartItemAdd: vm.cartItemAdd,
			cartUnset: vm.cartUnset
		};
	}]);
})();