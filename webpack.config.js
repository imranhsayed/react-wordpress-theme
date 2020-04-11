const HtmlWebPackPlugin = require( 'html-webpack-plugin' );
const path              = require( 'path' );

/**
 * Webpack module exports.
 *
 * @type {Object}
 */
module.exports = {
	context: __dirname,
	entry: './src/index.js',
	output: {
		path: path.resolve( __dirname, 'build' ),
		filename: 'main.js',
	},
	devServer: {
		historyApiFallback: true
	},
	module: {
		rules: [
			{
				test: /\.js?$/,
				exclude: /node_module/,
				use: 'babel-loader',
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
				test: /\.(png|jp?g|svg)$/,
				use: [{
					loader: "file-loader",
					options: {
						name: '[name].[ext]',
						outputPath: 'images/',
						publicPath: 'images/'
					}
				}]
			}
		]
	},
	plugins: [
		new HtmlWebPackPlugin( {
			template: path.resolve( __dirname, 'public/index.html' ),
			filename: 'index.html'
		} )
	]
};
