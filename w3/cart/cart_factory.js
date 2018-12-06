(function () {
	angular.module('index-module').factory('cartFactory', [ '$http', '$q', function($http, $q) {
		var vm = this;
		
		vm.cartGet = function(){
			var rs = $q.defer();
			$http({
				url: "_cartGet.php",
				method: "GET",
				headers: "{'Content-Type': 'application/x-www-form-urlencoded'}" 
			}).success(function(data, status, header, config) {
				rs.resolve(data);
			}).error(function(data, status, header, config) {
				rs.reject(data);
			});
			return rs.promise;
		};

		vm.cartItemRemove = function(in_index){ // Elimina Item
			var rs = $q.defer();
			var dataJson = $.param({
				index: in_index
			});
			$http({
				url: '_cart_item_remove.php',
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