var webpack = require('webpack');
var webpackConfig = require('./webpack.config.js');

webpackConfig.entry = {};

module.exports = function(config) {
  config.set({

    basePath: '.',

    frameworks: ['jasmine'],

    files: [
      './src/app/common/star-rating/star-rating.controller.jasmine.ts'
    ],

    // proxied base paths
    proxies: {
      './src/app/common/star-rating/*.ts': ["webpack", "sourcemap"]
    },

    port: 9876,

    logLevel: config.LOG_INFO,

    colors: true,

    autoWatch: true,

    browsers: ['Chrome'],

    // Karma plugins loaded
    plugins: [
      'karma-jasmine',
      'karma-coverage',
      'karma-chrome-launcher'
    ],

    // Coverage reporter generates the coverage
    reporters: ['progress', 'dots', 'coverage'],

    // Source files that you wanna generate coverage for.
    // Do not include tests or libraries (these files will be instrumented by Istanbul)
    preprocessors: {
        './src/app/common/star-rating/star-rating.controller.ts': ['webpack', 'coverage']
      },

      webpack: {
        //devtool: "inline-source-map",
        resolve: {
          extensions: ["", ".ts", ".js"]
        },
        module: {
          loaders: [
            { test: /\.ts$/, loader: "ts-loader" },
            { test: /\.html$/, loader: "raw" },
            { test: /\.(jpg|png|woff|woff2|eot|ttf|svg|scss)$/, loader: "null" },
          ]
        }
      },

      webpackMiddleware: {
        noInfo: true
      },

    coverageReporter: {
      reporters:[
        {dir : 'coverage/'},
        {type:'text'}
      ]
    },

    singleRun: true
  })
};
