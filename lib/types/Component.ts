import type Param from './ComponentParam';

type Component = {
	name: string;
	params: Param[];
	childNodes: NodeListOf<ChildNode>;
};

export default Component;
