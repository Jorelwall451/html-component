import type Config from '@lib/types/Config';
import path from 'path';
import {cwd} from 'process';
import {glob} from 'glob';

export default async function getConfig() {
	const filename = 'htmlc.config.js';
	const filepath = path.join(cwd(), filename);

	try {
		const filepaths = await glob(filepath);

		return config;
	} catch (error: any) {
		if (error.code === 'ENOENT') {
			throw new Error(`Configuration file not found: ${filepath}`);
		}

		throw new Error(`Error reading configuration file: ${error.message}`);
	}
}
