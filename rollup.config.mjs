import path from 'path'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import legacy from '@rollup/plugin-legacy'
import inject from '@rollup/plugin-inject'

export default [
	{
		input: 'src/Potree.js',
		treeshake: false,
		output: {
			file: 'build/potree/potree.js',
			format: 'umd',
			name: 'Potree',
			sourcemap: true,
		},
		plugins: [
			legacy({
				'libs/other/BinaryHeap.js': 'BinaryHeap'
			}),
			inject({
				proj4: 'proj4',
				$: 'jquery',
				jQuery: 'jquery',
				TWEEN: path.resolve('libs/tween/Tween'),
				BinaryHeap: path.resolve('libs/other/BinaryHeap.js')
			}),
			nodeResolve(),
			commonjs()
		]
	}, {
		input: 'src/workers/BinaryDecoderWorker.js',
		output: {
			file: 'build/potree/workers/BinaryDecoderWorker.js',
			format: 'es',
			name: 'Potree',
			sourcemap: false
		}
	}, {
		input: 'src/modules/loader/2.0/DecoderWorker.js',
		output: {
			file: 'build/potree/workers/2.0/DecoderWorker.js',
			format: 'es',
			name: 'Potree',
			sourcemap: false
		}
	}, {
		input: 'src/modules/loader/2.0/DecoderWorker_brotli.js',
		output: {
			file: 'build/potree/workers/2.0/DecoderWorker_brotli.js',
			format: 'es',
			name: 'Potree',
			sourcemap: false
		}
	}
]