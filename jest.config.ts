module.exports = {
    preset: 'ts-jest',  // Tells Jest to use ts-jest for TypeScript files
    testEnvironment: 'node',
    testMatch: ['**/?(*.)+(spec|test).ts'],  // Include .ts files in tests
  };