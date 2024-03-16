import getConfig from '@lib/data/getConfig';

describe('getConfig', () => {
	beforeAll(() => {
		process.cwd = () => __dirname;
	});

	it('should return configuration object', async () => {
		const config = await getConfig();
		expect(config).toBeDefined();
	});
});
