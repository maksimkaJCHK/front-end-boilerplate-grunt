const TerserPlugin = require('terser-webpack-plugin');

module.exports = function(grunt) {
  let target = grunt.cli.tasks.join(',').indexOf('dev') !== -1;
  return {
    webpack: {
      entry: './src/script/main.js',
      output: {
        path: process.cwd() + '/public/js/',
        filename: '[name].js',
      },
      mode: 'production',
      target: ['web', 'es5'],
      devtool: target ? 'inline-source-map' : false,
      //target: 'web'
      module: {
        rules: [
          {
            test: /\.js|.jsx?$/,
            exclude: /(node_modules)/,
            use: ["babel-loader"]
          },
          {
            test: /\.css$/,
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
              },
              "sass-loader" 
            ]
          }, {
            test: /\.less$/i,
            use: [
              "style-loader",
              "css-loader",
              {
                loader: "postcss-loader",
              },
              "less-loader"
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
      optimization: {
        minimize: true,
        usedExports: true,
        minimizer: [new TerserPlugin({
          test: /\.js(\?.*)?$/i,
          parallel: true,
          extractComments: true,
          terserOptions: {
            output: {
              comments: false,
            },
            compress: {
              drop_console: !target,
            },
          }
        })],
        splitChunks: {
          chunks: 'async',
          minSize: 100000,
          minRemainingSize: 0,
          maxSize: 500000,
          minChunks: 1,
          maxAsyncRequests: 30,
          maxInitialRequests: 30,
          automaticNameDelimiter: '-',
          enforceSizeThreshold: 50000,
          cacheGroups: {
            commons: {
              test: /[\\/]node_modules[\\/]/,
              name(module, chunks, cacheGroupKey) {
                const allChunksNames = chunks.map((item) => item.name).join('-');
                return `common`;
              },
              chunks: 'all'
            },
            defaultVendors: {
              test: /[\\/]node_modules[\\/]/,
              priority: -10,
              reuseExistingChunk: true
            },
            default: {
              minChunks: 2,
              priority: -20,
              reuseExistingChunk: true
            }
          }
        }
      },
    }
  }
};