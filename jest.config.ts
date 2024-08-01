/* eslint-disable @typescript-eslint/naming-convention */
import type {Config} from '@jest/types';

const config: Config.InitialOptions = {
	preset: 'ts-jest',
	testEnvironment: 'node',
	moduleFileExtensions: ['ts', 'js', 'json', 'node'],
	rootDir: '.',
	testRegex: '(/tests/.*|(\\.|/)(test|spec))\\.tsx?$',
	transform: {
		'^.+\\.tsx?$': 'ts-jest',
	},
	moduleNameMapper: {
		'^@/(.*)$': '<rootDir>/$1',
	},
	collectCoverage: true,
	coverageDirectory: 'coverage',
	coverageReporters: ['html', 'text', 'text-summary'],
};

export default config;
