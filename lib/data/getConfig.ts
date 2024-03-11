import type Config from '@lib/types/Config';
import path from 'path';
import {cwd} from 'process';

let cachedConfig: Config | undefined;

export default async function getConfig(byCache = true) {
	if (byCache && !cachedConfig) {
		return;
	}

	const filename = 'htmlc.config.js';
	const filepath = path.join(cwd(), filename);

	try {
		const config = await import(filepath) as Config;

		cachedConfig = config;

		return config;
	} catch (error: any) {
		if (error.code === 'ENOENT') {
			throw new Error(`Configuration file not found: ${filepath}`);
		} else {
			throw new Error(`Error reading configuration file: ${error.message}`);
		}
	}
}
