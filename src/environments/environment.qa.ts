import { commonEnvironment } from './environment.common';

const env: Partial<typeof commonEnvironment> = {
  domain: 'https://azure-qa.com',
};

export const environment = { ...commonEnvironment, ...env };