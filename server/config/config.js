//config.js
//Map environmentally defined config variables or tokens

const _port = (process.env.PORT || 3000);

module.exports = {
  port: _port
};