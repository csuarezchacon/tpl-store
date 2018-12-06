(function () {
	angular.module('index-module').factory('storeFactory', [ '$http', '$q', function($http, $q) {
		var vm = this;

		vm.cartItemAdd = function(){ // Agrega Item
			var rs = $q.defer();
			$http({
				url: "_cart_item_add.php",
				method: "GET",
				headers: "{'Content-Type': 'application/x-www-form-urlencoded'}" 
			}).success(function(data, status, header, config) {
				rs.resolve(data);
			}).error(function(data, status, header, config) {
				rs.reject(data);
			});
			return rs.promise;
		};

		return {
			cartItemAdd: vm.cartItemAdd
		};
	}]);
})();