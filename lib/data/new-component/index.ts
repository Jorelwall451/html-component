import {load} from 'cheerio';
import getNewComponentFiles from './getNewComponentFiles';
import type Component from '../../types/Component';
import getNewComponentParams from './getNewComponentParams';

export default async function getNewComponents() {
	const newComponentFiles = await getNewComponentFiles();

	const newComponents: Component[] = [];

	for (const newComponent of newComponentFiles) {
		const $ = load(newComponent.content, {
			xmlMode: true,
			decodeEntities: false,
			recognizeSelfClosing: true,
		});

		const newComponentElement = $('new-component');

		if (newComponentElement.length === 0) {
			throw new Error(`Don't exists a component with the name ${newComponent.filename}`);
		}

		const newComponentAttributes = newComponentElement.attr();

		const {name} = newComponentAttributes;
		const params = getNewComponentParams(newComponentAttributes);
		const content = newComponentElement.html();

		if (!name) {
			console.warn(`Component with name ${newComponent.filename} not found.`);
			continue;
		}

		if (!content) {
			console.warn(`Component with name ${newComponent.filename} not have a content`);
			continue;
		}

		newComponents.push({
			name,
			params,
			content,
		});
	}

	return newComponents;
}
