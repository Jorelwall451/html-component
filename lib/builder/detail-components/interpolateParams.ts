import type Component from '../../types/Component';

export default function interpolateParams(newContent: string, componentElement: cheerio.Cheerio, newComponent: Component, $: cheerio.Root) {
	const interpolationRegex = /{([^{}]+)}/gm;
	const matches = newContent.matchAll(interpolationRegex);

	for (const match of matches) {
		const paramName = match[1];

		if (paramName.startsWith('_')) {
			continue;
		}

		if (Object.getOwnPropertyDescriptor(newComponent.params, paramName)) {
			const paramValue = $(componentElement).attr(`param:${paramName}`);
			newContent = newContent.replace(match[0], paramValue ?? newComponent.params[paramName] ?? '');
		}
	}

	return newContent;
}
