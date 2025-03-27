import { composePlugins, withNx, withReact } from '@nx/rspack';
import { withModuleFederation } from '@nx/module-federation/rspack';
import { ModuleFederationConfig } from '@nx/module-federation';

import baseConfig from './module-federation.config';

const prodConfig: ModuleFederationConfig = {
  ...baseConfig,
  /*
   * Remote overrides for production.
   * Each entry is a pair of a unique name and the URL where it is deployed.
   *
   * e.g.
   * remotes: [
   *   ['app1', 'http://app1.example.com'],
   *   ['app2', 'http://app2.example.com'],
   * ]
   *
   * You can also use a full path to the remoteEntry.js file if desired.
   *
   * remotes: [
   *   ['app1', 'http://example.com/path/to/app1/remoteEntry.js'],
   *   ['app2', 'http://example.com/path/to/app2/remoteEntry.js'],
   * ]
   */
  // remotes: [
  //   ['login', 'http://localhost:4201/'],
  //   ['dashboard', 'http://localhost:4202/'],
  //   ['list', 'http://localhost:4203/'],
  //   ['job', 'http://localhost:4204/'],
  //   ['details', 'http://localhost:4205/'],
  // ],
  remotes: [
    ['login', 'https://subtle-gumdrop-caa030.netlify.app/remoteEntry.js'],
    ['dashboard', 'https://67e4c532c3b4926ef70ae2f9--benevolent-marshmallow-e4627c.netlify.app/remoteEntry.js'],
    ['list', 'https://67e4c571e910496b65a72699--incomparable-puppy-c2989d.netlify.app/remoteEntry.js'],
    ['details', 'https://67e4c5a595674a89a331b74c--iridescent-pie-26c331.netlify.app/remoteEntry.js'],
    ['job', 'https://67e4c5d1677fb57e986abfed--moonlit-sfogliatella-cb7b73.netlify.app/remoteEntry.js'],
  ]
};

// Nx plugins for rspack to build config object from Nx options and context.
/**
 * DTS Plugin is disabled in Nx Workspaces as Nx already provides Typing support for Module Federation
 * The DTS Plugin can be enabled by setting dts: true
 * Learn more about the DTS Plugin here: https://module-federation.io/configure/dts.html
 */
export default composePlugins(
  withNx(),
  withReact(),
  withModuleFederation(prodConfig, { dts: false })
);
