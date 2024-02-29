import {readFile} from 'fs/promises';
import path from 'path';
import type HtmlcConfig from '../types/HtmlcConfig';

export default async function htmlcConfig(callingFilePath: string): Promise<HtmlcConfig> {
	const filename = 'htmlcConfig.json';
	const callingDirectory = path.dirname(callingFilePath);
	const filePath = path.join(callingDirectory, filename);

	try {
		const fileContent = await readFile(filePath, {encoding: 'utf-8'});
		const fileContentJson = JSON.parse(fileContent) as HtmlcConfig;

		return {
			pagesPath: fileContentJson.pagesPath,
			componentsPath: fileContentJson.componentsPath,
		};
	} catch (error: any) {
		throw new Error(`${error}`);
	}
}
