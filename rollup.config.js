const { default: commonjs } = require("@rollup/plugin-commonjs");
const { default: nodeResolve } = require("@rollup/plugin-node-resolve");

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
			preferBuiltins: true
		}),
		commonjs()
	],
	external: ['express', 'react', 'react-dom']
}