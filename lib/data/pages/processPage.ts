import {load} from 'cheerio';
import {readFile} from 'fs/promises';

export default async function processPage(pagePath: string) {
	const filename = pagePath.split('/').pop();

	if (!filename) {
		console.warn(`Filename not found for path: ${pagePath}`);
		throw new Error();
	}

	const fileContent = await readFile(pagePath, {encoding: 'utf-8'});
	const content = load(fileContent, {
		xmlMode: true,
		decodeEntities: false,
		recognizeSelfClosing: true,
	});

	return {
		filename,
		content,
	};
}
