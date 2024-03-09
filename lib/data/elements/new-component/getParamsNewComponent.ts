
export default function getParamsNewComponent(element: Element) {
	const stackParams: Attr[] = [];

	for (const attribute of element.attributes) {
		if (attribute.name.startsWith('param-')) {
			stackParams.push(attribute);
		}
	}

	return stackParams;
}
