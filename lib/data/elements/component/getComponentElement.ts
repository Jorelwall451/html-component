import type Component from '@lib/types/Component';
import {readFile} from 'fs/promises';
import getParamsComponent from './getParamsComponent';

export default async function getComponentElement(componentPath: string) {
	const componentFileContent = await readFile(componentPath, {
		encoding: 'utf-8',
	});

	// eslint-disable-next-line @typescript-eslint/naming-convention
	const componentDOM = new DOMParser().parseFromString(componentFileContent, 'text/html');

	const componentElement = componentDOM.querySelector('component')!;

	if (!componentElement) {
		throw new Error(`No have a elementName component in component path ${componentPath}`);
	}

	const name = componentElement.getAttribute('name');
	const params = getParamsComponent(componentElement);
	const {childNodes} = componentElement;

	if (!name) {
		throw new Error(`It's missing the attribute name in component element at file ${componentPath}`);
	}

	const result: Component = {
		name,
		params,
		childNodes,
	};

	return result;
}
