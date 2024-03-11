import type Config from '@lib/types/Config';
import {access} from 'fs/promises';
import path from 'path';
import {cwd} from 'process';

export default async function getConfig() {
	const filename = 'htmlc.config.js';
	const filepath = path.join(cwd(), filename);

	try {
		await access(filepath);
		const fileConfig = await import(filepath) as Config;

		return fileConfig;
	} catch (error: any) {
		throw new Error(`Cannot read the configuration file: ${error}`);
	}
}
