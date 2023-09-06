const path =  require('path');
module.exports = {
  entry: './template.js',
  output: {
    path: path.resolve(__dirname, './'),
    filename: 'blank.js'
  },
  mode: 'production',
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
