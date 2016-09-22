'use strict';

var app = angular.module('reverseGeocoder', ['ui.router']);

app.config(function ($urlRouterProvider, $locationProvider) {
  // This turns off hashbang urls (/#about) and changes it to something normal (/about)
  $locationProvider.html5Mode(true);

  // If we go to a URL that ui-router doesn't have registered, go to the "/" url.
  $urlRouterProvider.otherwise('/');
});
"use strict";

app.controller('HomeController', function ($scope, ReverseGeocoderFactory) {

  $scope.address = "";

  $scope.lookup = function (latitude, longitude) {
    ReverseGeocoderFactory.getAddress(latitude, longitude).then(function (data) {
      $scope.address = data;
    });
  };
});
'use strict';

app.config(function ($stateProvider) {
    $stateProvider.state('home', {
        url: '/',
        templateUrl: '/src/home/home.html',
        controller: 'HomeController'
    });
});
'use strict';

app.factory('ReverseGeocoderFactory', function ($http) {
  return {
    getAddress: _getAddress
  };

  function _getAddress(latitude, longitude) {

    var body = {
      lat: latitude,
      lng: longitude
    };

    return $http.post('/api/reverseGeocoder/', body).then(function (res) {
      return res.data;
    }).catch(function (err) {
      console.error(err);
    });
  }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyIsImhvbWUvaG9tZS5jb250cm9sbGVyLmpzIiwiaG9tZS9ob21lLnN0YXRlLmpzIiwicmV2ZXJzZUdlb2NvZGVyL3JldmVyc2VHZW9jb2Rlci5mYWN0b3J5LmpzIl0sIm5hbWVzIjpbImFwcCIsImFuZ3VsYXIiLCJtb2R1bGUiLCJjb25maWciLCIkdXJsUm91dGVyUHJvdmlkZXIiLCIkbG9jYXRpb25Qcm92aWRlciIsImh0bWw1TW9kZSIsIm90aGVyd2lzZSIsImNvbnRyb2xsZXIiLCIkc2NvcGUiLCJSZXZlcnNlR2VvY29kZXJGYWN0b3J5IiwiYWRkcmVzcyIsImxvb2t1cCIsImxhdGl0dWRlIiwibG9uZ2l0dWRlIiwiZ2V0QWRkcmVzcyIsInRoZW4iLCJkYXRhIiwiJHN0YXRlUHJvdmlkZXIiLCJzdGF0ZSIsInVybCIsInRlbXBsYXRlVXJsIiwiZmFjdG9yeSIsIiRodHRwIiwiX2dldEFkZHJlc3MiLCJib2R5IiwibGF0IiwibG5nIiwicG9zdCIsInJlcyIsImNhdGNoIiwiZXJyIiwiY29uc29sZSIsImVycm9yIl0sIm1hcHBpbmdzIjoiOztBQUFBLElBQUlBLE1BQU1DLFFBQVFDLE1BQVIsQ0FBZSxpQkFBZixFQUFrQyxDQUFDLFdBQUQsQ0FBbEMsQ0FBVjs7QUFFQUYsSUFBSUcsTUFBSixDQUFXLFVBQVVDLGtCQUFWLEVBQThCQyxpQkFBOUIsRUFBaUQ7QUFDMUQ7QUFDQUEsb0JBQWtCQyxTQUFsQixDQUE0QixJQUE1Qjs7QUFFQTtBQUNBRixxQkFBbUJHLFNBQW5CLENBQTZCLEdBQTdCO0FBQ0QsQ0FORDs7O0FDRkFQLElBQUlRLFVBQUosQ0FBZSxnQkFBZixFQUFpQyxVQUFTQyxNQUFULEVBQWlCQyxzQkFBakIsRUFBeUM7O0FBRXhFRCxTQUFPRSxPQUFQLEdBQWlCLEVBQWpCOztBQUVBRixTQUFPRyxNQUFQLEdBQWdCLFVBQVVDLFFBQVYsRUFBb0JDLFNBQXBCLEVBQStCO0FBQzdDSiwyQkFBdUJLLFVBQXZCLENBQWtDRixRQUFsQyxFQUE0Q0MsU0FBNUMsRUFDR0UsSUFESCxDQUNRLFVBQVVDLElBQVYsRUFBZ0I7QUFDcEJSLGFBQU9FLE9BQVAsR0FBaUJNLElBQWpCO0FBQ0QsS0FISDtBQUlELEdBTEQ7QUFPRCxDQVhEOzs7QUNBQWpCLElBQUlHLE1BQUosQ0FBVyxVQUFTZSxjQUFULEVBQXlCO0FBQ2hDQSxtQkFBZUMsS0FBZixDQUFxQixNQUFyQixFQUE2QjtBQUN6QkMsYUFBSyxHQURvQjtBQUV6QkMscUJBQWEscUJBRlk7QUFHekJiLG9CQUFZO0FBSGEsS0FBN0I7QUFLSCxDQU5EOzs7QUNBQVIsSUFBSXNCLE9BQUosQ0FBWSx3QkFBWixFQUFzQyxVQUFTQyxLQUFULEVBQWdCO0FBQ2xELFNBQU87QUFDTFIsZ0JBQVlTO0FBRFAsR0FBUDs7QUFJQSxXQUFTQSxXQUFULENBQXFCWCxRQUFyQixFQUErQkMsU0FBL0IsRUFBMEM7O0FBRXhDLFFBQUlXLE9BQU87QUFDUEMsV0FBS2IsUUFERTtBQUVQYyxXQUFLYjtBQUZFLEtBQVg7O0FBS0EsV0FBT1MsTUFBTUssSUFBTixDQUFXLHVCQUFYLEVBQW9DSCxJQUFwQyxFQUNGVCxJQURFLENBQ0csVUFBU2EsR0FBVCxFQUFjO0FBQ2hCLGFBQU9BLElBQUlaLElBQVg7QUFDSCxLQUhFLEVBSUZhLEtBSkUsQ0FJSSxVQUFTQyxHQUFULEVBQWM7QUFDbkJDLGNBQVFDLEtBQVIsQ0FBY0YsR0FBZDtBQUNELEtBTkUsQ0FBUDtBQU9EO0FBQ0osQ0FwQkQiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIGFwcCA9IGFuZ3VsYXIubW9kdWxlKCdyZXZlcnNlR2VvY29kZXInLCBbJ3VpLnJvdXRlciddKTtcblxuYXBwLmNvbmZpZyhmdW5jdGlvbiAoJHVybFJvdXRlclByb3ZpZGVyLCAkbG9jYXRpb25Qcm92aWRlcikge1xuICAvLyBUaGlzIHR1cm5zIG9mZiBoYXNoYmFuZyB1cmxzICgvI2Fib3V0KSBhbmQgY2hhbmdlcyBpdCB0byBzb21ldGhpbmcgbm9ybWFsICgvYWJvdXQpXG4gICRsb2NhdGlvblByb3ZpZGVyLmh0bWw1TW9kZSh0cnVlKTtcbiAgXG4gIC8vIElmIHdlIGdvIHRvIGEgVVJMIHRoYXQgdWktcm91dGVyIGRvZXNuJ3QgaGF2ZSByZWdpc3RlcmVkLCBnbyB0byB0aGUgXCIvXCIgdXJsLlxuICAkdXJsUm91dGVyUHJvdmlkZXIub3RoZXJ3aXNlKCcvJyk7XG59KTsiLCJhcHAuY29udHJvbGxlcignSG9tZUNvbnRyb2xsZXInLCBmdW5jdGlvbigkc2NvcGUsIFJldmVyc2VHZW9jb2RlckZhY3RvcnkpIHtcblxuICAkc2NvcGUuYWRkcmVzcyA9IFwiXCI7XG5cbiAgJHNjb3BlLmxvb2t1cCA9IGZ1bmN0aW9uIChsYXRpdHVkZSwgbG9uZ2l0dWRlKSB7XG4gICAgUmV2ZXJzZUdlb2NvZGVyRmFjdG9yeS5nZXRBZGRyZXNzKGxhdGl0dWRlLCBsb25naXR1ZGUpXG4gICAgICAudGhlbihmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAkc2NvcGUuYWRkcmVzcyA9IGRhdGE7XG4gICAgICB9KTtcbiAgfTtcblxufSk7IiwiYXBwLmNvbmZpZyhmdW5jdGlvbigkc3RhdGVQcm92aWRlcikge1xuICAgICRzdGF0ZVByb3ZpZGVyLnN0YXRlKCdob21lJywge1xuICAgICAgICB1cmw6ICcvJyxcbiAgICAgICAgdGVtcGxhdGVVcmw6ICcvc3JjL2hvbWUvaG9tZS5odG1sJyxcbiAgICAgICAgY29udHJvbGxlcjogJ0hvbWVDb250cm9sbGVyJ1xuICAgIH0pO1xufSk7IiwiYXBwLmZhY3RvcnkoJ1JldmVyc2VHZW9jb2RlckZhY3RvcnknLCBmdW5jdGlvbigkaHR0cCkge1xuICAgIHJldHVybiB7XG4gICAgICBnZXRBZGRyZXNzOiBfZ2V0QWRkcmVzcyAgICBcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBfZ2V0QWRkcmVzcyhsYXRpdHVkZSwgbG9uZ2l0dWRlKSB7XG5cbiAgICAgIGxldCBib2R5ID0ge1xuICAgICAgICAgIGxhdDogbGF0aXR1ZGUsXG4gICAgICAgICAgbG5nOiBsb25naXR1ZGVcbiAgICAgICAgfTtcblxuICAgICAgcmV0dXJuICRodHRwLnBvc3QoJy9hcGkvcmV2ZXJzZUdlb2NvZGVyLycsIGJvZHkpXG4gICAgICAgICAgLnRoZW4oZnVuY3Rpb24ocmVzKSB7XG4gICAgICAgICAgICAgIHJldHVybiByZXMuZGF0YTtcbiAgICAgICAgICB9KVxuICAgICAgICAgIC5jYXRjaChmdW5jdGlvbihlcnIpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICAgICAgICB9KTsgIFxuICAgIH1cbn0pOyJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==