import getConfig from '@lib/data/config';
import type Component from '@lib/types/Component';
import getComponentElement from './getComponentElement';

export default async function getEveryComponentsElements() {
	const config = await getConfig();
	const components: Array<Promise<Component>> = [];

	for (const componentPath of config.componentsPath) {
		const component = getComponentElement(componentPath);

		components.push(component);
	}

	return Promise.all(components);
}
