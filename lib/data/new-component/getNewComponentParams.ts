
export default function getNewComponentParams(newComponentAttributes: Record<string, string>) {
	return Object.entries(newComponentAttributes)
		.filter(([key]) => key.startsWith('param:'))
		.reduce((params: Record<string, string>, [key, value]) => {
			const paramName = key.slice(6);
			params[paramName] = value;

			return params;
		}, {});
}
