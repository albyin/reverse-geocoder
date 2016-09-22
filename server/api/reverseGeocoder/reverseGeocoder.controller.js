'use strict';

const request = require('request-promise');
const googleAPIKey = require('./../../config/private-key').googleAPIKey;

module.exports = {
  reverseGeocoder: _reverseGeocoder 
};

function _reverseGeocoder(req, res, next) {

  //get components required to construct options
  const lat = req.body.lat,
        lng = req.body.lng,
        key = googleAPIKey;

  //construct request options
  const options = {
    uri: 'https://maps.googleapis.com/maps/api/geocode/json?latlng=' + lat + ',' + lng + '&key=' + key
  };

  //make API request and process response
  request(options)
  .then(function(data) {
    data = JSON.parse(data);

    let firstResult = data.results[0];
    //verify we have a valid result before responding with it
    if (typeof firstResult != 'undefined' && firstResult.formatted_address) {
      res.send(firstResult.formatted_address);
    } else {
      res.send('No Result Found');
    }

  });
}