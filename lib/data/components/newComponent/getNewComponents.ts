import getNewComponentParams from './getNewComponentParams';
import getNewComponentsFileContentPromises from './getNewComponentsFileContentPromises';

export default async function getNewComponents() {
	const filesContent = await getNewComponentsFileContentPromises();

	// eslint-disable-next-line array-callback-return
	const newComponents = filesContent.map(fileContent => {
		try {
			// eslint-disable-next-line @typescript-eslint/naming-convention
			const DOM = new DOMParser().parseFromString(fileContent, 'text/html');
			const {documentElement} = DOM;

			const element = documentElement.querySelector('new-component');

			if (!element) {
				throw new Error();
			}

			const name = element.getAttribute('name');
			const params = getNewComponentParams(element);

			if (!name) {
				throw new Error();
			}

			return {
				element,
				name,
				params,
			};
		} catch (error: any) {

		}
	});

	return newComponents;
}
