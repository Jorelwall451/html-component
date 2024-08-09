import getPages from '../data/pages/index';
import detailComponents from './detail-components';

export default async function detailPages() {
	const pages = await getPages();

	const detailedPagesPromises = pages.map(async ({filename, content}) => {
		await detailComponents(content);

		return {
			filename,
			content: content.html(),
		};
	});

	const detailedPages = await Promise.all(detailedPagesPromises);

	return detailedPages;
}
