const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  entry: {
    main: path.resolve(__dirname, 'src/index.js'),
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js',
    clean: true,
    assetModuleFilename: '[name][ext]',
  },
  devtool: 'source-map',
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'dist'),
    },
    port: 3000,
    open: true,
    hot: true,
    compress: true,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [['autoprefixer']],
              },
            },
          },
          'sass-loader',
        ],
      },
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
      {
        test: /\.(png|svg|jpg|jpeg|gif|ico|pdf)$/i,
        type: 'asset/resource',
      },
    ],
  },
  optimization: {
    minimizer: [
      new ImageMinimizerPlugin({
        minimizer: {
          implementation: ImageMinimizerPlugin.imageminMinify,
          options: {
            plugins: [
              ['gifsicle', { interlaced: true }],
              ['jpegtran', { progressive: true }],
              ['optipng', { optimizationLevel: 5 }],
            ],
          },
        },
      }),
      new TerserPlugin({
        test: /\.js(\?.*)?$/i,
        exclude: /node_modules/,
      }),
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      meta: {
        keywords: 'raven, barrogo, raven barrogo, portfolio, front-end developer, web designer',
        description:
          "I’m Raven Barrogo, a creative front-end developer based in the Philippines. It's my passion to create, design, and develop stunning projects.",
        author: 'Raven Barrogo',
        opType: { property: 'og:type', content: 'website' },
        ogUrl: { property: 'og:url', content: 'https://ravenbarrogo.live/' },
        ogTitle: {
          property: 'og:title',
          content: 'Raven Barrogo | Front-End Developer',
        },
        ogDesc: {
          property: 'og:description',
          content:
            "I’m Raven Barrogo, a creative front-end developer based in the Philippines. It's my passion to create, design, and develop stunning projects.",
        },
        ogImage: { property: 'og:image', content: 'display-picture.png' },
        ogImageWidth: { property: 'og:image:width', content: '1200' },
        ogImageHeight: { property: 'og:image:height', content: '630' },
      },
      title: 'Raven Barrogo | Front-End Developer',
      filename: 'index.html',
      template: 'public/index.html',
    }),
  ],
};
