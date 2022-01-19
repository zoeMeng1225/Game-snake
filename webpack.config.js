const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  entry: "./src/index.ts",
  output:{
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',

    environment:{
      arrowFunction: false,
      const: false
    }
  },
  module:{
    rules:[
      {
        test:/\.ts$/,
        use:"ts-loader",
        exclude: /node-modules/
      },
      {
        test: /\.less$/,
        use:[
          "style-loader",
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              postcssOptions:{
              plugins: [
                [
                  "postcss-preset-env",
                  {
                    browser: "last 2 versions"
                  }
                ]
              ]
              }
            }
          },
          "less-loader"
        ]
      }
    ]
  },
  plugins:[
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template:"./src/index.html"
    })
  ],
  
  resolve: {
    extensions: [".ts", ".js"]
  }

}