import { ModuleFederationConfig } from '@nx/module-federation';

const config: ModuleFederationConfig = {
  name: '@nx-mf-integration/shell',
  /**
   * To use a remote that does not exist in your current Nx Workspace
   * You can use the tuple-syntax to define your remote
   *
   * remotes: [['my-external-remote', 'https://nx-angular-remote.netlify.app']]
   *
   * You _may_ need to add a `remotes.d.ts` file to your `src/` folder declaring the external remote for tsc, with the
   * following content:
   *
   * declare module 'my-external-remote';
   *
   */

  // for development
  // remotes: ['login', 'dashboard', 'list', 'details', 'job'],

  // for production
  remotes: [
    ['login', 'https://subtle-gumdrop-caa030.netlify.app/remoteEntry.js'],
    ['dashboard', 'https://67e4c532c3b4926ef70ae2f9--benevolent-marshmallow-e4627c.netlify.app/remoteEntry.js'],
    ['list', 'https://67e4c571e910496b65a72699--incomparable-puppy-c2989d.netlify.app/remoteEntry.js'],
    ['details', 'https://67e4c5a595674a89a331b74c--iridescent-pie-26c331.netlify.app/remoteEntry.js'],
    ['job', 'https://67e4c5d1677fb57e986abfed--moonlit-sfogliatella-cb7b73.netlify.app/remoteEntry.js'],
  ]

};

/**
 * Nx requires a default export of the config to allow correct resolution of the module federation graph.
 **/
export default config;
