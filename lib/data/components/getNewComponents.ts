import getNewComponentsFileContentPromises from './getNewComponentsFileContentPromises';

export default async function getNewComponents() {
	const filesContent = await getNewComponentsFileContentPromises();

	const components = filesContent.map(fileContent => {
		try {
			// eslint-disable-next-line @typescript-eslint/naming-convention
			const DOM = new DOMParser().parseFromString(fileContent, 'text/html');
			const {documentElement} = DOM;

			const element = documentElement.querySelector('new-component');

			if (!element) {
				throw new Error('Cannot found a element with component.');
			}

			const name = element.getAttribute('name');

			if (!name) {
				throw new Error('Cannot get the name of component.');
			}

			return {
				element,
				name,
			};
		} catch (e) {
			const error = e as string;
			throw new Error(`Cannot get new-components by paths. ${error}`);
		}
	});

	return components;
}
