const path =  require('path');
module.exports = {
  entry: './template.js',
  output: {
    path: path.resolve(__dirname, './'),
    filename: 'blank.js'
  },
  mode: process.env.NODE_ENV || 'production',
  module: {
    rules: [
      {
        use: [
          {
            loader: path.resolve('loader.js')
          }
        ]
      }
    ]
  }
}
