import generatePackageJson from 'rollup-plugin-generate-package-json';
import typescript from 'rollup-plugin-typescript2';
import pkg from './package.json';

export default {
  input: 'src/index.ts',
  output: [
    {
      file: pkg.main,
			format: 'iife',
			name: 'grid'
    },
    {
      file: pkg.module,
			format: 'esm',
			name: 'grid'
    },
  ],
  external: [
    ...Object.keys(pkg.dependencies || {}),
    ...Object.keys(pkg.peerDependencies || {}),
	],
	plugins: [
    generatePackageJson({baseContents: {...pkg}}),
    typescript({
			typescript: require('typescript')
    })
  ],
}