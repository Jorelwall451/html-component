import getConfig from '@lib/data/config';
import getEveryNewComponentsElements from '@lib/data/elements/new-component';

type ElementAndParams = {
	element: Element;
	newComponentParams: Attr[];
};

export default async function getEveryContentAttributes() {
	const {prefix} = await getConfig();
	const attributeName = `${prefix}content`;
	const newComponents = await getEveryNewComponentsElements();
	const attributedElements: ElementAndParams[]
    = [];

	for (const newComponent of newComponents) {
		for (const childNode of Array.from(newComponent.childNodes)) {
			if (childNode.nodeType !== Node.ELEMENT_NODE) {
				continue;
			}

			const element = childNode as Element;

			if (element.hasAttribute(attributeName)) {
				const newComponentParams = newComponent.params;
				attributedElements.push({
					element,
					newComponentParams,
				});
			}
		}
	}

	return {
		attributeName,
		attributedElements,
	};
}
