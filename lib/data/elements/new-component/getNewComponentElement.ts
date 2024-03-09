import {readFile} from 'fs/promises';
import getParamsNewComponent from './getParamsNewComponent';
import type NewComponent from '@lib/types/NewComponent';

export default async function getNewComponentElement(newComponentPath: string) {
	const componentFileContent = await readFile(newComponentPath, {
		encoding: 'utf-8',
	});

	// eslint-disable-next-line @typescript-eslint/naming-convention
	const componentDOM = new DOMParser().parseFromString(componentFileContent, 'text/html');

	const componentElement = componentDOM.querySelector('new-component')!;

	if (!componentElement) {
		throw new Error(`No have a elementName component in component path ${newComponentPath}`);
	}

	const params = getParamsNewComponent(componentElement);
	const name = componentElement.getAttribute('name');
	const {childNodes} = componentElement;

	if (!name) {
		throw new Error(`It's missing the attribute name in component element at file ${newComponentPath}`);
	}

	const result: NewComponent = {
		name,
		params,
		childNodes,
	};

	return result;
}
