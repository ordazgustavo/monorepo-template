const config = require('../../jest.config.base');
const package = require('./package.json');

/** @type {import('@jest/types').Config.InitialOptions} */
module.exports = {
  ...config,
  displayName: package.name,
  setupFilesAfterEnv: ['../../jest.setup.js'],
};
