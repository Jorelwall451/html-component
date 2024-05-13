import getPagesFileContentPromises from './getPagesFileContentPromises';
import cheerio, {load} from 'cheerio';

export default async function getPages() {
	const filesContent = await getPagesFileContentPromises();

	const pages = filesContent.map(fileContent => {
		try {
			const documentElement = load(fileContent);

			return documentElement;
		} catch (e) {
			const error = e as string;
			throw new Error(`Cannot get components by paths. ${error}`);
		}
	});

	return pages;
}
