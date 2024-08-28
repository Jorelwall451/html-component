import {defineConfig} from 'tsup';

export default defineConfig({
	entry: ['lib/**/*.ts'],
	splitting: false,
	sourcemap: true,
	minifyWhitespace: true,
	minify: true,
	minifySyntax: true,
	minifyIdentifiers: true,
	clean: false,
	outDir: './dist',
});
