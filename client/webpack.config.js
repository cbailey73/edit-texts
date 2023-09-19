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
      // Generate HTML files for your entry points
      new HtmlWebpackPlugin({
        template: './src/index.html', // Specify your HTML template file
        chunks: ['main'], // Specify which entry point to include in this HTML file
        filename: 'index.html', // Output HTML filename
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
            src: path.resolve('src/images/icon.png'), // Path to your app icon
            sizes: [96, 128, 192, 256, 384, 512], // Specify icon sizes
            destination: path.join('assets', 'icons'), // Destination directory for icons
          },
        ],
      }),

      // Injects the service worker into app
      new InjectManifest({
        swSrc: './src/service-worker.js', // Path to service worker file
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
