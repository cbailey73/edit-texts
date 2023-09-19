const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const path = require('path');
const { InjectManifest } = require('workbox-webpack-plugin');

module.exports = () => {
  return {
    mode: 'development',
    entry: {
      main: './src/js/index.js',
      install: './src/js/install.js'
    },
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
      // Generate HTML files for entry points
      new HtmlWebpackPlugin({
        template: './src/index.html', 
        chunks: ['main'], 
        filename: 'index.html',
      }),

      // Generate a Web App Manifest file
      new WebpackPwaManifest({
        name: 'Your PWA Name',
        short_name: 'PWA Short Name',
        description: 'Your PWA Description',
        background_color: '#ffffff',
        theme_color: '#000000',
        icons: [
          {
            src: path.resolve('src/images/icon.png'),
            sizes: [96, 128, 192, 256, 384, 512],
            destination: path.join('assets', 'icons'), 
          },
        ],
      }),

      // Injects the service worker into app
      new InjectManifest({
        swSrc: './src/service-worker.js', 
      }),
    ],

    module: {
      rules: [
        // Add rules for CSS files (use style-loader and css-loader)
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
        },

        // Add Babel loader for JavaScript files
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
            },
          },
        },
      ],
    },
  };
};
