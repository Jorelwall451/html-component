import getNewComponentsFileContentPromises from './getNewComponentsFileContentPromises';

export default async function getNewComponents() {
	const filesContent = await getNewComponentsFileContentPromises();

	for (const fileContent of filesContent) {
		// eslint-disable-next-line @typescript-eslint/naming-convention
		const DOM = new DOMParser().parseFromString(fileContent, 'text/html');
		const {documentElement} = DOM;

		const element = documentElement.querySelector('new-component');
	}
}
