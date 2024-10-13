import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'widgets',

  exposes: {
    './Module': './src/remote-entry.ts',
  },
};

export default config;
