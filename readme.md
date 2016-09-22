Reverse Geocoder
================

Reverse Geocoder uses Google Maps Geocoding API to look up addresses given Latitude and Longitude.

[Reference](https://developers.google.com/maps/documentation/geocoding/start)


Docker Notes (For future reference)
=======================

docker build -t reverse-geocoder .

docker run -p 3000:3000 -d reverse-geocoder

[Reference](https://nodejs.org/en/docs/guides/nodejs-docker-webapp/)