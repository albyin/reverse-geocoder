//app.js

'use strict';

// Require dependencies
const express = require('express');
const app = express();
const path = require('path');
const logger = require('morgan');
const chalk = require('chalk');
const bodyParser = require('body-parser');
const fs = require('fs');

// Get config variables
const config = require('./config/config');

// Register HTTP request logger
app.use(logger('dev'));

// Configure bodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Register Static paths
app.use(express.static(path.join(__dirname, '../client/')));
app.use(express.static(path.join(__dirname, '../client/dist')));
app.use(express.static(path.join(__dirname, '../node_modules')));

/* Register API routes
   Require each route dynamically 
   Look up all route files/folders from directory
*/
let directories = fs.readdirSync(path.join(__dirname, '/api/'));
// Prepend /api/ to all api routes
directories.forEach(function(dir) {
  app.use('/api/' + dir + '/', require('./api/' + dir));
});

// Register Index/Home route
app.use('/', function(req, res, next) {
  res.sendFile(path.join(__dirname, './index.html'));
});

// Errors
// Not found
app.use(function apiNotFound(err, req, res, next) {
  res.sendStatus(404);
});
// Server issues
app.use(function(err, req, res, next) {
  res.sendStatus(err.status || 500);    
});

// Start Server
let server = app.listen(config.port, function () {
  console.log(chalk.cyan('Server up and listening on port'), chalk.green.bold(server.address().port));
});