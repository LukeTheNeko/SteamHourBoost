import { Config } from './types';
import { login } from './steamFunctions';

let config: Config = { accounts: [] };

try {
  config = require('../config.dev.json');
} catch (error) {
  console.error('Error reading the configuration file:', error);
  process.exit(1);
}

const steamUsers = config.accounts.map(login);