import htmlcConfig from '../../lib/htmlcConfig';

describe('htmlcConfig', () => {
	it('should parse HTMLC config file correctly', async () => {
		const config = await htmlcConfig(__filename);
		expect(config).toHaveProperty('pagesPath');
		expect(config).toHaveProperty('componentsPath');
	});
});
