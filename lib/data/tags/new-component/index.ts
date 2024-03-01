import {readFile} from 'fs/promises';
import htmlcConfig from '../../htmlcConfig';
import {parseString} from 'xml2js';
import type NewComponent from '../../../types/NewComponent';

export default async function newComponent() {
	const config = await htmlcConfig();

	config.componentsPath.forEach(async componentPath => {
		const componentContent = await readFile(componentPath, {
			encoding: 'utf-8',
		});

		parseString(componentContent, (error, result: NewComponent) => {
			if (error) {
				throw new Error(`${error.message}`);
			}
		});
	});
}
