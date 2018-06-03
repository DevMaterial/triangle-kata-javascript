const webpack = require('webpack');
const path = require('path');

let config = {
  entry: path.join(__dirname, 'script'),
  mode: 'development',
  output: {
    filename: 'bundle.js'
  }
}

module.exports = config;