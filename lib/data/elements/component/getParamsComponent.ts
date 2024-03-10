import type Param from '@lib/types/ComponentParam';

export default function getParamsComponent(element: Element) {
	const params: Param[] = [];

	for (const attribute of element.attributes) {
		if (attribute.name.startsWith('param:')) {
			const {name, value} = attribute;
			const attributeNameAsArray = name.split(':');

			params.push({
				name: attributeNameAsArray[1],
				value,
			});
		}
	}

	return params;
}
