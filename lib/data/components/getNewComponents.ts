import {load} from 'cheerio';
import getNewComponentsFileContentPromises from './getNewComponentsFileContentPromises';

export default async function getNewComponents() {
	const filesContent = await getNewComponentsFileContentPromises();

	const components = filesContent.map(fileContent => {
		try {
			const $ = load(fileContent);

			const element = $('new-component');

			if (!element) {
				throw new Error('Cannot found a element with component.');
			}

			const name = element.attr('name');

			if (!name) {
				throw new Error('Cannot get the name of component.');
			}

			return {
				element,
				name,
			};
		} catch (e) {
			const error = e as string;
			throw new Error(`Cannot get new-components by paths. ${error}`);
		}
	});

	return components;
}
