import type Param from './NewComponentParam';

type NewComponent = {
	name: string;
	params: Param[];
	childNodes: NodeListOf<ChildNode>;
};

export default NewComponent;
