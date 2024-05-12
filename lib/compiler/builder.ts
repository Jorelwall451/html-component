import {writeFile} from 'fs/promises';
import detailPages from './detailPages';
import getConfig from '@lib/data/config';
import path from 'path';
import {cwd} from 'process';
import {randomUUID} from 'crypto';

export default async function builder() {
	try {
		const detailedPages = await detailPages();
		const {outDir} = await getConfig();
		const outdirPath = path.join(cwd(), outDir);
		const writeFilePromises = [];

		for (const page of detailedPages) {
			const pageAsString = page.innerHTML;
			const filename = `${randomUUID()}.html`;

			writeFilePromises.push(writeFile(path.join(outdirPath, filename), pageAsString));
		}

		await Promise.allSettled(writeFilePromises);
	} catch (error) {
		console.error('Error to generate pages:', error);
	}
}
