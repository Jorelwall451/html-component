import type Param from '@lib/types/Param';

export default function getNewComponentParams(element: Element) {
	const params: Param[] = [];
	const options = new Set<string>(['optional']);

	const {attributes} = element;
	params.length = attributes.length;

	for (const {name} of attributes) {
		const [prefix, paramName] = name.split(':');

		if (prefix === 'param') {
			const usedOptions = name
				.split(':')
				.filter(option => options.has(option));

			params.push({
				name: paramName,
				optional: usedOptions.includes('optional'),
			});
		}
	}

	return params;
}
