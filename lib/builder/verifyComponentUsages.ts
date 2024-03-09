import getEveryComponentsElements from '@lib/data/elements/component';
import getEveryNewComponentsElements from '@lib/data/elements/new-component';

export default async function verifyComponentUsages() {
	const newComponents = await getEveryNewComponentsElements();
	const components = await getEveryComponentsElements();

	const usedComponents = components.filter(component =>
		newComponents.some(newComponent => newComponent.name === component.name),
	);

	const unusedComponents = components.filter(component =>
		!usedComponents.some(usedComponent => usedComponent.name === component.name),
	);

	const notExistsComponents = unusedComponents.filter(component =>
		!newComponents.some(newComponent => newComponent.name === component.name),
	);

	const noUsedComponents = unusedComponents.filter(component =>
		!notExistsComponents.some(notExistsComponent => notExistsComponent.name === component.name),
	);

	if (noUsedComponents.length !== 0) {
		console.warn(`The following components were not used: ${noUsedComponents.map(component => component.name).join(', ')}`);
	}

	if (notExistsComponents.length !== 0) {
		console.warn(`The following components do not exist: ${notExistsComponents.map(component => component.name).join(', ')}`);
	}

	return usedComponents;
}
