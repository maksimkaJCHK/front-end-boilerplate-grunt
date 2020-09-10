const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  webpack: {
    entry: './src/script/main.js',
    output: {
      path: process.cwd() + '/public/js/',
      filename: 'main.js',
    },
    mode: 'production',
    optimization: {
      minimize: true,
      minimizer: [new TerserPlugin({
        cache: true,
        extractComments: true,
        terserOptions: {
          output: {
            comments: false,
          },
          extractComments: 'all',
          compress: {
            drop_console: true,
          },
        },
      })],
    },
    module: {
      rules: [
        {
          test: /\.js|.jsx?$/,
          exclude: /(node_modules)/,
          loaders: ["babel-loader"]
        }, {
          test: /\.css$/,
          exclude: /(node_modules)/,
          use: [
            'style-loader',
            'css-loader',
            {
              loader: "postcss-loader",
              options: {
                config: {path: 'postcss.config.js'},
              }
            }
          ]
        }, {
          test: /\.scss$/,
          use: [
            "style-loader",
            "css-loader",
            {
              loader: "postcss-loader",
              options: {config: {path: 'postcss.config.js'}}
            },
            "sass-loader" 
          ]
        }, {
          test: /\.(png|jpg|gif|svg)$/i,
          use: [
            {
              loader: 'url-loader',
              options: {
                limit: 8192,
                esModule: false,
              },
            },
          ],
        }
      ]
    },
  }
};