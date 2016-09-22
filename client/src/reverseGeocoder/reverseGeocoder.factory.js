app.factory('ReverseGeocoderFactory', function($http) {
    return {
      getAddress: _getAddress    
    }

    function _getAddress(latitude, longitude) {

      let body = {
          lat: latitude,
          lng: longitude
        };

      return $http.post('/api/reverseGeocoder/', body)
          .then(function(res) {
              return res.data;
          })
          .catch(function(err) {
            console.error(err);
          });  
    }
});