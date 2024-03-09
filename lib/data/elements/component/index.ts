import getConfig from '@lib/data/config';
import type Component from '@lib/types/Component';
import {readFile} from 'fs/promises';

export default async function getEveryComponentsElements() {
	const config = await getConfig();
	const components: Component[] = [];

	config.componentsPath.forEach(async componentPath => {
		const componentFileContent = await readFile(componentPath, {
			encoding: 'utf-8',
		});

		// eslint-disable-next-line @typescript-eslint/naming-convention
		const componentDOM = new DOMParser().parseFromString(componentFileContent, 'text/html');

		const componentTag = componentDOM.querySelector('component')!;

		if (!componentTag) {
			throw new Error(`No have a tagName component in component path ${componentPath}`);
		}

		const name = componentTag.getAttribute('name');
		const params = componentTag.attributes;
		const {childNodes} = componentTag;

		if (!name) {
			throw new Error(`It's missing the attribute name in component tag at file ${componentPath}`);
		}

		return components.push({
			name,
			params,
			childNodes,
		});
	});

	return components;
}
