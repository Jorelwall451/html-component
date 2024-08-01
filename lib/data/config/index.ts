import {join} from 'path';
import {cwd} from 'process';
import type ConfigFile from '../../types/ConfigFile';
import {readdir} from 'fs/promises';
import type Config from '../../types/Config';

export default async function getConfig(): Promise<Config> {
	const filepath = join(cwd(), 'htmlc.json');

	const {pagesDir, componentsDir, outDir} = (await import(filepath)) as ConfigFile;

	const pagesDirPath = join(cwd(), pagesDir);
	const componentsDirPath = join(cwd(), componentsDir);

	let pagesPath = await readdir(pagesDirPath);
	let componentsPath = await readdir(componentsDirPath);

	pagesPath = pagesPath.map(path => join(pagesDirPath, path));
	componentsPath = componentsPath.map(path => join(componentsDirPath, path));

	return {
		pagesPath,
		componentsPath,
		outDir,
	};
}
