const path = require('path');
const nextJest = require('next/jest');

const createJestConfig = nextJest({
  dir: './',
});

// Add any custom config to be passed to Jest
const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jest-environment-jsdom',
  testPathIgnorePatterns: [path.join(__dirname, 'tests-e2e')], // Exclude e2e tests
  testRegex: 'test.tsx?$',
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig);
