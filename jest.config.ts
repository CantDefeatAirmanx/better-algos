export default {
    globals: {
        'ts-jest': {
            isolatedModules: true,
        },
    },
    moduleDirectories: ['node_modules'],
    moduleFileExtensions: ['js', 'ts', 'tsx', 'json'],
    moduleNameMapper: {
        '^\\$books/(.*)$': '<rootDir>/src/controllers/$1',
        '^\\$codewars/(.*)$': '<rootDir>/src/routes/$1',
        '^\\$leetcode/(.*)$': '<rootDir>/src/shared/$1',
        '^\\$react-hooks/(.*)$': '<rootDir>/src/shared/$1',
        '^\\$random-sources/(.*)$': '<rootDir>/src/shared/$1',
        'global-mocks/(.*)$': '<rootDir>/__mocks__/$1',
    },
    preset: 'ts-jest/presets/js-with-ts',
    testPathIgnorePatterns: ['/node_modules/', '__mocks__', '/src/common/components/application'],
    transform: {
        '^.+\\.js?$': 'babel-jest',
    },
    transformIgnorePatterns: ['/node_modules\\/(?!@ls)/'],
    verbose: true,
};
