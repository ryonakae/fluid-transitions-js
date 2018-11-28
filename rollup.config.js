import clear from 'rollup-plugin-clear'
import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import serve from 'rollup-plugin-serve'
import livereload from 'rollup-plugin-livereload'
import { terser } from 'rollup-plugin-terser'

const IS_DEV = process.env.NODE_ENV !== 'production'

let plugins = [
  clear({
    targets: ['lib']
  }),
  babel()
]
let external = []

if (IS_DEV) {
  plugins = plugins.concat([
    resolve({
      browser: true
    }),
    commonjs(),
    serve({
      open: true,
      openPage: '/sandbox/index.html',
      contentBase: './'
    }),
    livereload('./')
  ])
} else {
  plugins = plugins.concat([terser()])
  external = external.concat(['lodash', 'victor'])
}

export default {
  entry: 'src/fluid-transitions.js',
  output: {
    file: 'lib/fluid-transitions.js',
    format: 'cjs',
    sourcemap: IS_DEV
  },
  plugins,
  external
}
