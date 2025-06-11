const { ModuleFederationPlugin } = require('webpack').container;
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  devServer: {
    port: 3002,
    historyApiFallback: true,
  },
  output: {
    publicPath: 'auto',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,             // Podpira JS in JSX
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',        // Uporabi Babel za React kodo
          options: {
            presets: ['@babel/preset-react'], // Prepričaj se, da imaš to nameščeno
          },
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],         // Omogoči uvoz brez končnic
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'magazinesApp',
      filename: 'remoteEntry.js',
      exposes: {
        './MagazinesModule': './src/MagazinesModule.jsx', // Popravi na točno ime in končnico
      },
      shared: {
  react: {
    singleton: true,
    eager: true,
    requiredVersion: require('./package.json').dependencies.react,
  },
  'react-dom': {
    singleton: true,
    eager: true,
    requiredVersion: require('./package.json').dependencies['react-dom'],
  },
},



    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
};
