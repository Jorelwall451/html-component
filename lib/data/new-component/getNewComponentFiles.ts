import {readFile} from 'fs/promises';
import getConfig from '../config/index';

export default async function getNewComponentFiles() {
	const {componentsPath} = await getConfig();

	const componentsPromises = componentsPath.map(async componentPath => {
		const filename = componentPath.split('/').pop();
		const content = await readFile(componentPath, {
			encoding: 'utf-8',
		});

		if (!filename) {
			throw new Error('The filename is undefined');
		}

		return {
			filename,
			content,
		};
	});

	const components = await Promise.all(componentsPromises);

	return components;
}
