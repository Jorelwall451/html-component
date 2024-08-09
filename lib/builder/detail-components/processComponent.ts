import {load} from 'cheerio';
import type Component from '../../types/Component';
import interpolateParams from './interpolateParams';
import replaceContentElement from './replaceContentElement';

export default async function processComponent($: cheerio.Root, componentElement: cheerio.Cheerio, newComponents: Component[]) {
	const componentName = componentElement.attr('name');
	const newComponent = newComponents.find(newComponent => newComponent.name === componentName);

	if (!newComponent) {
		throw new Error(`Cannot find the component with the name ${componentName}.`);
	}

	const newComponentContent = load(newComponent.content, {
		xmlMode: true,
		decodeEntities: false,
		recognizeSelfClosing: true,
	});

	replaceContentElement(newComponentContent, componentElement);

	let newContent = newComponentContent.html();
	newContent = interpolateParams(newContent, componentElement, newComponent, $);

	$(componentElement).replaceWith(newContent);
}
