import { commonEnvironment } from './environment.common';

const env: Partial<typeof commonEnvironment> = {
  titleApp: 'DEVELOPMENT APP',
};

export const environment = { ...commonEnvironment, ...env };
