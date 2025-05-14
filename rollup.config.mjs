import typescript from '@rollup/plugin-typescript';

export default [
  {
    input: './index.ts',
    output: [
      {
        file: 'dist/cjs/index.js',
        format: 'cjs',
        sourcemap: true
      },
      {
        file: 'dist/ejs/index.js',
        format: 'es',
        sourcemap: true
      }
    ],
    plugins: [typescript()]
  }
]
