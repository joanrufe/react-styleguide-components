const HtmlWebpackPlugin = require('html-webpack-plugin'); //installed via npm
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require('path');
const webpack = require('webpack');

module.exports = function (env) {
	const styleguide = {
		entry: [
			'./src/styleguide/index.js',
		],
		output: {
			path: path.resolve(__dirname, 'dist/styleguide/'),
			filename: 'module.bundle.js'
		},
		
		// Development settings
		devServer: !env.production? {
			hot: true,
			open: true,
			contentBase: path.resolve(__dirname, 'public/'),
			publicPath: '/'
		}: {},

		plugins: [
			new HtmlWebpackPlugin({
				template: './src/styleguide/index.html'
			}),
			new MiniCssExtractPlugin({ 
				filename: '[name].css', 
				chunkFilename: '[id].css', 
			}),

			// Define here global variables for usage in js runtime
			new webpack.DefinePlugin({
        PRODUCTION: env.production ? JSON.stringify(true) : JSON.stringify(false),
			}),

			// More development settings
			...(env.production? [] : [
				new webpack.HotModuleReplacementPlugin(),
				new webpack.NamedModulesPlugin()
			])
		],
		module: {
			rules: [{
					test: /\.ejs$/,
					use: {
						loader: "ejs-webpack-loader"
					}
				},
				{
					test: /\.(sa|sc|c)ss$/,
					use: [
						...(env.production ? [MiniCssExtractPlugin.loader] : ['style-loader']),
						'css-loader',
						"postcss-loader",
						'sass-loader',
					],
				},
				{
					test: /\.js$/,
					exclude: /(node_modules|bower_components)/,
					use: {
						loader: 'babel-loader'
					}
				},
				{
					test: /\.md$/,
					loaders: [
						'json-loader',
						'front-matter-loader'
					]
				}
			]
		},
		// devtool: 'inline-source-map',
		devtool: 'source-map',
		// devtool: 'eval-source-map',
		node: {
			fs: 'empty'
		}
	}

	const components = {
		entry: './src/common-ux/index.js',
		mode: env.production ? 'production' : 'development',
		output: {
			path: path.resolve(__dirname, 'lib/'),
			filename: 'index.js',
			libraryTarget: 'umd',
			umdNamedDefine: true
		},

		plugins: [
			new MiniCssExtractPlugin({ 
				filename: '[name].css', 
				chunkFilename: '[id].css', 
			}),

			// Define here global variables for usage in js runtime
			new webpack.DefinePlugin({
        		PRODUCTION: env.production ? JSON.stringify(true) : JSON.stringify(false),
			}),

			// More development settings
			...(env.production? [] : [
				new webpack.HotModuleReplacementPlugin(),
				new webpack.NamedModulesPlugin()
			])
		],
		module: {
			rules: [
				{
					test: /\.(sa|sc|c)ss$/,
					use: [
						...(env.production ? [MiniCssExtractPlugin.loader] : ['style-loader']),
						'css-loader',
						"postcss-loader",
						'sass-loader',
					],
				},
				{
					test: /\.js$/,
					exclude: /(node_modules|bower_components)/,
					use: {
						loader: 'babel-loader'
					}
				}
			]
		},
		...(!env.production ? {devtool: 'source-map'} : {})
	}
	console.log(`Production is ${env.production}`)

	// return components 
	if(env.devServer) return styleguide;
	return [ components, styleguide ];
}