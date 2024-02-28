import {readFile} from 'fs/promises';
import path from 'path';
import {cwd} from 'process';
import type HtmlcConfig from '../types/HtmlcConfig';

export default async function htmlcConfig(): Promise<HtmlcConfig> {
	const filename = 'htmlcCOnfig.json';

	const filePath = path.join(cwd(), filename);

	try {
		const fileContent = await readFile(filePath, {
			encoding: 'utf-8',
		});

		const fileContentJson = JSON.parse(fileContent) as HtmlcConfig;

		return {
			pagesPath: fileContentJson.pagesPath,
			componentsPath: fileContentJson.componentsPath,
		};
	} catch (error: any) {
		throw new Error(`${error}`);
	}
}
