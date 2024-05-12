import getConfig from '../config';
import {readFile} from 'fs/promises';

export default async function getPagesFileContentPromises() {
	const {pagesPath} = await getConfig();

	const pagesPromises = pagesPath.map(async pagePath =>
		readFile(pagePath, {
			encoding: 'utf-8',
		}),
	);

	return Promise.all(pagesPromises);
}
