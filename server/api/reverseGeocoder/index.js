//index.js - reverseGeocoder
//register sub-routes for /api/reverseGeocoder
'use strict';

const router = require('express').Router();
const controller = require('./reverseGeocoder.controller.js');

module.exports = router;

router.post('/', controller.reverseGeocoder);