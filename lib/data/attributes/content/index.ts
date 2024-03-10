import getConfig from '@lib/data/config';
import getEveryNewComponentsElements from '@lib/data/elements/new-component';
import type NewComponentParam from '@lib/types/NewComponentParam';

type ElementAndParams = {
	element: Element;
	newComponentParams: NewComponentParam[];
};

export default async function getEveryContentAttributes() {
	const {prefix} = await getConfig();
	const attributeName = `${prefix}content`;
	const newComponents = await getEveryNewComponentsElements();
	const attributedElements: ElementAndParams[]
    = [];

	for (const newComponent of newComponents) {
		for (const childNode of newComponent.childNodes) {
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
