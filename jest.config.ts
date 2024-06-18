const { pathsToModuleNameMapper } = require('ts-jest');
const { compilerOptions } = require('./tsconfig.json');

export default {
  preset: "ts-jest",
  testEnvironment: "jest-environment-jsdom",
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  rootDir: ".",
  moduleNameMapper: {
    "\\.(gif|ttf|eot|svg|png)$": "<rootDir>/src/__mocks__/fileMock.js",
    "\\.(css|less|sass|scss)$": "identity-obj-proxy",
    ...pathsToModuleNameMapper(compilerOptions.paths, { prefix: "<rootDir>/" }),
  },
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.ts"],
};
