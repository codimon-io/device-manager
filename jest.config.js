module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  verbose: true,
  testPathIgnorePatterns: ['build'],
  transform: {
    '^.+\\.(ts)$': 'ts-jest',
  },
};
