const { default: commonjs } = require("@rollup/plugin-commonjs");
const { default: nodeResolve } = require("@rollup/plugin-node-resolve");
const { default: babel } = require('@rollup/plugin-babel');

const babelOptions = {
	presets: [
		'@babel/preset-react',
		'@babel/preset-env'
	],
	extensions: ['js', 'jsx'],
	babelHelpers: 'bundled',
	exclude: 'node_modules/**'
}
module.exports =  {
	input: 'main.js',
	output: [
		{
			file: 'dist/main.js',
			format: 'cjs'
		}
	],
	plugins: [
		nodeResolve({
			extensions: ['js', 'jsx'],
			preferBuiltins: true
		}),
		commonjs(),
		babel(babelOptions),
		
	],
	external: ['express', 'react', 'react-dom']
}