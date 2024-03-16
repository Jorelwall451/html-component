import getNewComponents from './getNewComponents';

export default async function getNewComponentByName(name: string) {
	const newComponents = await getNewComponents();

	const newComponent = newComponents.find(newComponent => newComponent);

	return newComponent;
}
