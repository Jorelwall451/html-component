import type Config from '../../types/Config';
import path from 'path';
import {cwd} from 'process';

export default async function getConfig() {
	const filename = 'htmlc.config.js';
	const filepath = path.resolve(cwd(), filename);

	try {
		// eslint-disable-next-line @typescript-eslint/no-require-imports
		const config = (await require(filepath)).default as Config;

		return config;
	} catch (e) {
		const error = e as string;
		throw new Error(`Cannot read the file html.config.js ${error}`);
	}
}
