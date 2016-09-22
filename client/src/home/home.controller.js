app.controller('HomeController', function($scope, ReverseGeocoderFactory) {

  $scope.address = "";

  $scope.lookup = function (latitude, longitude) {
    ReverseGeocoderFactory.getAddress(latitude, longitude)
      .then(function (data) {
        $scope.address = data;
      });
  };

});