import getNewComponentsFileContentPromises from '@lib/data/components/newComponent/getNewComponentsFileContentPromises';

describe('getNewComponentsFileContentPromisses', () => {
	beforeAll(() => {
		process.cwd = () => __dirname;
	});

	it('s', () => {
		const newComponentsFileContentPromises = getNewComponentsFileContentPromises();

		console.log('test');
	});
});
