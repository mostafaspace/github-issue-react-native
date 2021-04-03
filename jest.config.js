module.exports = {
    preset: 'react-native',
    // setupFiles: ['./node_modules/react-native-gesture-handler/jestSetup.js'],
    setupFiles: ['<rootDir>/jest/setup.js'],
    setupFilesAfterEnv: ['@testing-library/jest-native'],
    transformIgnorePatterns: [],
    moduleNameMapper: {
        'test-utils': '<rootDir>/jest/test-utils.js',
    },
    globals: {
        'ts-jest': {
            babelConfig: true,
        },
    },
    cacheDirectory: '.jest/cache',
};
