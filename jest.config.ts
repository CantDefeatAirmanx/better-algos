import type { Config } from 'jest';

const config: Config = {
    globals: {
        'ts-jest': {
            isolatedModules: true,
        },
    },
    moduleDirectories: ['node_modules'],
    moduleFileExtensions: ['js', 'ts', 'tsx', 'json'],
    moduleNameMapper: {
        '^\\$algos/(.*)$': '<rootDir>/src/algos/$1',
        '^\\$shared/(.*)$': '<rootDir>/src/shared/$1',
    },
    preset: 'ts-jest/presets/js-with-ts',
    testPathIgnorePatterns: ['/node_modules/', '__mocks__', '/src/common/components/application'],
    transform: {
        '^.+\\.js?$': 'babel-jest',
    },
    transformIgnorePatterns: ['/node_modules\\/(?!@ls)/'],
    verbose: true,
};

export default config;
