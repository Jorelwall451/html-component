import getConfig from '../config';
import {readFile} from 'fs/promises';

export default async function getNewComponentsFileContentPromises() {
	const {componentsPath} = await getConfig();

	const newComponentsPromises = componentsPath.map(async componentPath =>
		readFile(componentPath, {
			encoding: 'utf-8',
		}),
	);

	return Promise.all(newComponentsPromises);
}
