import getNewComponents from '../data/new-component/index';

export default async function detailComponents($: cheerio.Root) {
	const newComponents = await getNewComponents();

	const components = $('component').toArray();
	const interpolationRegex = /{([^{}]+)}/gm;

	for (const component of components) {
		const componentName = $(component).attr('name');
		const newComponent = newComponents.find(newComponent => newComponent.name === componentName);

		if (!newComponent) {
			throw new Error(`Cannot found the component with the name ${componentName}.`);
		}

		let newContent = newComponent.content;

		const matches = newContent.matchAll(interpolationRegex);

		for (const match of matches) {
			const paramName = match[1];

			if (paramName.startsWith('_')) {
				continue;
			}

			// eslint-disable-next-line no-prototype-builtins
			if (newComponent.params.hasOwnProperty(paramName)) {
				const paramValue = $(component).attr(`param:${paramName}`);
				newContent = newContent.replace(match[0], paramValue ?? '');
			}
		}

		$(component).replaceWith(newContent);
	}

	if ($('component').toArray().length !== 0) {
		await detailComponents($);
	}
}
