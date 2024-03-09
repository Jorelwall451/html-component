import type Config from '@lib/types/Config';
import path from 'path';
import {cwd} from 'process';

export default async function getConfig() {
	const configFilename = 'htmlc.config.js';
	const configFilePath = path.join(cwd(), configFilename);

	const configContent = await import(configFilePath) as Config;

	if (!configContent) {
		throw new Error(`Cannot read the config content of filepath ${configFilePath}`);
	}

	return configContent;
}
