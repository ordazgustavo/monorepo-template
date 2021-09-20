const baseConfig = require('./jest.config.base');

/** @type {import('@jest/types').Config.InitialOptions} */
const config = {
  ...baseConfig,
  projects: ['<rootDir>/packages/*'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
};

module.exports = config;
