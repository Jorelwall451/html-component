import getEveryContentAttributes from '@lib/data/attributes/content';

export default async function resolveContentAttribute() {
	const {attributeName, attributedElements}
    = await getEveryContentAttributes();

	attributedElements.map(elementAndParams => () => {
		const {element, newComponentParams} = elementAndParams;
		const content = element.getAttribute(attributeName);

		element.textContent = content;
	});
}
