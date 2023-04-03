 const path = require('path');

// chained module loaders 
 module.exports = {
  entry: {
    index: './src/index.js',
    print: './src/print.js',
  },
   output: {
    filename: '[name].bundle.js',
     path: path.resolve(__dirname, 'dist'),
   },
 
  module: {
    rules: [
       // this module loader allows us to import css into 
      // our javascript modules.
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      //this one allows for images and icons
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      //font loader
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
      // loading data (XML and CSV)
      {
        test: /\.(csv|tsv)$/i,
        use: ['csv-loader'],
      },
      {
        test: /\.xml$/i,
        use: ['xml-loader'],
      },
      
    ],
  },
 };