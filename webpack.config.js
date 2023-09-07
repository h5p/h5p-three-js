const path =  require('path');
module.exports = {
  entry: './three.js',
  output: {
    path: path.resolve(__dirname, './'),
    filename: 'three.min.js'
  },
  mode: process.env.NODE_ENV || 'production',
}
