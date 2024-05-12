import getPagesFileContentPromises from './getPagesFileContentPromises';

export default async function getPages() {
	const filesContent = await getPagesFileContentPromises();

	const pages = filesContent.map(fileContent => {
		try {
			// eslint-disable-next-line @typescript-eslint/naming-convention
			const DOM = new DOMParser().parseFromString(fileContent, 'text/html');
			const {documentElement} = DOM;

			return documentElement;
		} catch (e) {
			const error = e as string;
			throw new Error(`Cannot get components by paths. ${error}`);
		}
	});

	return pages;
}
