import {readFile} from 'fs/promises';
import getConfig from '../config';

export default async function getPages() {
	const {pagesPath} = await getConfig();

	const pagesPromises = pagesPath.map(async pagePath => {
		const filename = pagePath.split('/').pop();
		const content = await readFile(pagePath, {
			encoding: 'utf-8',
		});

		if (!filename) {
			throw new Error();
		}

		return {
			filename,
			content,
		};
	});

	const pages = await Promise.all(pagesPromises);

	return pages;
}
