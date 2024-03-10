import getEveryNewComponentsElements from '@lib/data/elements/new-component';
import getUsableComponent from '../../data-utils/elements/component/getUsableComponents';

export default async function resolveParamsAttributes() {
	const [components, newComponents] = await Promise.all([getUsableComponent(), getEveryNewComponentsElements()]);

	for (const component of components) {
		const newComponent = newComponents.find(newComponent => newComponent.name === component.name)!;
	}
}
