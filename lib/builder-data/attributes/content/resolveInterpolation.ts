
type Params = {
	name: string;
	value: string;
};

export default async function resolveInterpolation(attributeValue: string, params: Params[]) {
	const regex = /\{([^]*)}/g;
	const interpolations = attributeValue.match(regex);
	const values: string[] = [];

	if (!interpolations) {
		return;
	}

	interpolations.forEach(interpolationName => {
		params.some(param => () => {
			if (param.name !== interpolationName) {
				console.warn(`There is no parameter with the name ${interpolationName}`);
				values.push(param.name);
				return;
			}

			values.push(param.value);
		});
	});

	return values;
}
