import getConfig from '@lib/data/config';
import type NewComponent from '@lib/types/NewComponent';
import getNewComponentElement from './getNewComponentElement';

export default async function getEveryNewComponentElements() {
	const config = await getConfig();

	const newComponents: Array<Promise<NewComponent>> = [];

	for (const componentPath of config.componentsPath) {
		const newComponent = getNewComponentElement(componentPath);

		newComponents.push(newComponent);
	}

	return Promise.all(newComponents);
}
