import {load} from 'cheerio';
import getPages from '../data/pages';
import detailComponents from './detailComponents';

export default async function detailPages() {
	const pages = await getPages();

	const detailedPagesPromises = pages.map(async page => {
		const $ = load(page.content, {
			xmlMode: true,
			decodeEntities: false,
			recognizeSelfClosing: true,
		});

		await detailComponents($);

		return {
			filename: page.filename,
			content: $.html(),
		};
	});

	const detailedPages = await Promise.all(detailedPagesPromises);

	return detailedPages;
}
