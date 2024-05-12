import type Config from '@lib/types/Config';
import path from 'path';
import {cwd} from 'process';

export default async function getConfig() {
	const filename = 'htmlc.config.js';
	const filepath = path.join(cwd(), filename);

	try {
		const config = await import(filepath) as Config;

		return config;
	} catch (e) {
		const error = e as string;
		throw new Error(`Cannot read the file html.config.js ${error}`);
	}
}
