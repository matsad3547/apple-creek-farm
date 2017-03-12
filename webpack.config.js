const webpack = require('webpack')

module.exports = {
 context: __dirname + "/src",
 entry: "./scripts/index.js",
 output: {
   path: __dirname + "/public",
   filename: "./bundle.js"
 },
 module: {
   rules: [
     {
     test: /\.css$/,
     use: [ "style-loader", "css-loader" ]
     }
   ]
 },
}
