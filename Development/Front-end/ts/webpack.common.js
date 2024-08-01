const path = require('path');
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
  entry: {
    demoForm: './src/code/forms/demoForm.ts'
  },
  output: {
    filename: '[name].js',
    sourceMapFilename: 'maps/[name].js.map',
    path: path.resolve(__dirname, '../Webresources/js'),
    library: ['bebe', '[name]'],
    libraryTarget: 'var',
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      }
    ],
  },
  plugins: [
    new ESLintPlugin({fix: true, extensions: ['ts', 'tsx'], lintDirtyModulesOnly: true, failOnError: true, exclude: '/node_modules/'}),
  ],
  resolve: {
    extensions: ['.tsx', '.ts', '.js' ],
  },
  optimization: {
    usedExports:true
  }
};