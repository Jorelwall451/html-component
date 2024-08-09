import getNewComponents from '../../data/new-component/index';
import processComponent from './processComponent';

export default async function detailComponents($: cheerio.Root) {
	const newComponents = await getNewComponents();

	const components = $('component').toArray();

	await Promise.all(components.map(async component => processComponent($, $(component), newComponents)));

	if ($('component').toArray().length !== 0) {
		await detailComponents($);
	}
}
