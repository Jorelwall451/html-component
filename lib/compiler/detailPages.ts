import getNewComponentByName from '../data/components/getNewComponentByName';
import getPages from '../data/pages/getPages';

export default async function detailPages() {
	const pages = await getPages();
	const detailedPages: Element[] = [];

	pages.forEach(async page => {
		const components = page.getElementsByTagName('component');

		for (const componentEl of components) {
			const componentName = componentEl.getAttribute('name');

			if (!componentName) {
				console.warn('Don\'t have a name in the component.');
				componentEl.outerHTML = '';
				continue;
			}

			// eslint-disable-next-line no-await-in-loop
			const newComponent = await getNewComponentByName(componentName);

			if (!newComponent) {
				console.warn(`Don't have a component name with the name ${componentName}`);
				continue;
			}

			componentEl.outerHTML = newComponent.element.innerHTML;
		}
	});

	return detailedPages;
}
