//config.js
//Map environmentally defined config variables or tokens

const _port = (process.env.PORT || 3000);
const _googleRevGeoAPIKey = process.env.GOOGLE_REV_GEO_API_KEY;

module.exports = {
  port: _port,
  googleRevGeoAPIKey : _googleRevGeoAPIKey
};