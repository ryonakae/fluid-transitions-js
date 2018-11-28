import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import autoExternal from 'rollup-plugin-auto-external'
import istanbul from 'rollup-plugin-istanbul'
import { terser } from 'rollup-plugin-terser'

const IS_DEV = process.env.NODE_ENV !== 'production'
let plugins = [babel()]

if (IS_DEV) {
  plugins.concat([
    resolve({
      browser: true
    }),
    commonjs(),
    istanbul({
      exclude: ['node_modules/**/*.js']
    })
  ])
} else {
  plugins.concat([autoExternal(), terser()])
}

export default {
  entry: 'src/index.js',
  output: {
    file: 'lib/index.js',
    format: 'cjs'
  },
  plugins
}
