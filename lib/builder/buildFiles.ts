import {writeFile} from 'fs/promises';
import detailPages from './detailPages';
import getConfig from '../data/config/index';
import {join} from 'path';
import {minify} from 'html-minifier';

export default async function buildFiles() {
	const {outDir} = await getConfig();
	const detailedPages = await detailPages();

	detailedPages.forEach(async ({filename, content}) => {
		const filepath = join(outDir, filename);

		const minifiedContent = minify(content, {
			removeComments: true,
			collapseWhitespace: true,
		});

		await writeFile(filepath, minifiedContent, {
			encoding: 'utf-8',
		});
	});
}
