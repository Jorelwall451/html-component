import htmlcConfig from '../../../lib/data/htmlcConfig';

describe('htmlcConfig', () => {
	beforeAll(() => {
		process.cwd = () => __dirname;
	});

	it('should parse HTMLC config file correctly', async () => {
		const config = await htmlcConfig();
		expect(config).toHaveProperty('pagesPath');
		expect(config).toHaveProperty('componentsPath');
	});
});
