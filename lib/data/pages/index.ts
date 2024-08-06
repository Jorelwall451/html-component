import getConfig from '../config/index';
import processPage from './processPage';

export default async function getPages() {
	const {pagesPath} = await getConfig();

	const pagesPromises = pagesPath.map(processPage);
	const pages = await Promise.all(pagesPromises);

	return pages;
}
