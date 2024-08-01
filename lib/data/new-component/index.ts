import {load} from 'cheerio';
import getNewComponentFiles from './getNewComponentFiles';
import type Component from '../../types/Component';

export default async function getNewComponents() {
	const componentFiles = await getNewComponentFiles();

	const newComponents: Component[] = [];

	for (const component of componentFiles) {
		const $ = load(component.content, {
			xmlMode: true,
			decodeEntities: false,
			recognizeSelfClosing: true,
		});
		const newComponent = $('new-component');

		if (newComponent.length === 0) {
			throw new Error(`Don't exists a component with the name ${component.filename}`);
		}

		const newComponentAttributes = newComponent.attr();

		const {name} = newComponentAttributes;
		const params = Object.entries(newComponentAttributes)
			.filter(([key]) => key.startsWith('param:'))
			.reduce((params: Record<string, undefined>, [key]) => {
				const paramName = key.slice(6);
				params[paramName] = undefined;

				return params;
			}, {});
		const content = newComponent.html();

		if (!name) {
			continue;
		}

		if (!content) {
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
