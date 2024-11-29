import babel from '@rollup/plugin-babel'
import { terser } from 'rollup-plugin-terser'
import scss from 'rollup-plugin-scss'
import resolve from 'rollup-plugin-node-resolve'

const config = [
  {
    input: 'src/index.js',
    external: ['react'],
    output: {
      format: 'umd',
      file: 'dist/react-yarn-visual-novel.js',
      name: 'ReactYarnVisualNovel'
    },
    plugins: [
      resolve({
        only: ['yarn-bound', 'react-dialogue-tree', /^@mnbroatch\/.*$/]
      }),
      babel({
        exclude: /node_modules\/(?!yarn-bound|react-dialogue-tree|@mnbroatch).+/
      }),
      scss()
    ]
  },
  {
    input: 'src/index.js',
    external: ['react'],
    output: {
      format: 'umd',
      file: 'dist/react-yarn-visual-novel.min.js',
      name: 'ReactYarnVisualNovel'
    },
    plugins: [
      resolve({
        only: ['yarn-bound', 'react-dialogue-tree', /^@mnbroatch\/.*$/]
      }),
      babel({
        exclude: /node_modules\/(?!yarn-bound|react-dialogue-tree|@mnbroatch).+/
      }),
      scss({ outputStyle: 'compressed' }),
      terser()
    ]
  }
]

export default config
