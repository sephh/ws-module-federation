const path = require('path');
const dependencies = require('./package.json').dependencies;
const Dotenv = require('dotenv-webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

const envPaths = {
  production: path.resolve('./', `.env.production`),
  development: path.resolve('./', `.env.development`),
};

module.exports = (_, args) => {
  const envPath = envPaths[args.mode] || envPaths.development;

  require('dotenv').config({ path: envPath });

  return {
    mode: args.mode,

    optimization: {
      minimize: args.mode === 'production',
    },

    performance: {
      hints: args.mode === 'production' ? 'warning' : false,
    },

    output: {
      publicPath: 'auto',
    },

    devServer: {
      contentBase: path.join(__dirname, 'dist'),
      publicPath: '/',
      historyApiFallback: true,
      port: 3001,
    },

    resolve: {
      extensions: ['.jsx', '.js', '.json'],
    },

    module: {
      rules: [
        {
          test: /\.js?$/,
          loader: 'babel-loader',
          exclude: /node_modules/,
          options: {
            presets: ['@babel/preset-react'],
          },
        },
        {
          test: /\.css$/i,
          use: [
            // Creates `style` nodes from JS strings
            'style-loader',
            // Translates CSS into CommonJS
            'css-loader',
          ],
        },
        {
          test: /\.s[ac]ss$/i,
          use: [
            // Creates `style` nodes from JS strings
            'style-loader',
            // Translates CSS into CommonJS
            'css-loader',
            // Compiles Sass to CSS
            'sass-loader',
          ],
        },
        {
          test: /\.m?js/,
          resolve: {
            fullySpecified: false,
          },
        },
        {
          test: /\.(png|svg|jpg|gif)$/,
          use: ['file-loader'],
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[name].[ext]',
                outputPath: 'fonts/',
              },
            },
          ],
        },
      ],
    },

    plugins: [
      new ModuleFederationPlugin({
        name: 'auth',
        filename: 'remoteEntry.js',
        exposes: {
          './routes': './src/router/routes',
          './PrivateRoute': './src/router/PrivateRoute',
          './AuthProvider': './src/providers/AuthProvider',
        },
        remotes: {},
        shared: {
          ...dependencies,
          'react-router-dom': {
            requiredVersion: dependencies['react-router-dom'],
            singleton: true,
          },
          'react-dom': {
            requiredVersion: dependencies['react-dom'],
            singleton: true,
          },
          react: {
            requiredVersion: dependencies['react'],
            singleton: true,
          },
          '@material-ui/styles': {
            singleton: true,
          },
        },
      }),
      new HtmlWebpackPlugin({
        template: './public/index.html',
        base: process.env.PUBLIC_URL || '/',
      }),
      new Dotenv({
        safe: true,
          path: envPath
      }),
    ],
  };
};
