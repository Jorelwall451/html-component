import getConfig from '@lib/data/getConfig';

describe('getConfig', () => {
	beforeAll(() => {
		process.cwd = () => __dirname;
	});

	it('should return configuration object', async () => {
		const config = await getConfig();
		expect(config).toBeDefined();
	});

	it('should throw error if configuration file is not found', async () => {
		jest.spyOn(process, 'cwd').mockReturnValue('/path/does/not/exist');
		await expect(getConfig()).rejects.toThrow('Cannot read the configuration file');
	});
});
