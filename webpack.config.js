const path =  require('path');
module.exports = {
  entry: './three.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'three.min.js'
  },
  mode: process.env.NODE_ENV || 'production',
}
