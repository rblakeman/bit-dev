export const plugin = `/**
 * this is an app plugin file.
 * its extension 'react-app' is detected by the react application-type.
 * use this file to configure your apps' build and deployment.
 */

import { ReactAppOptions } from '@teambit/react';

export const ReactAppApp: ReactAppOptions = {
  name: 'react-app',
  entry: [require.resolve('./react-app.app-root')],
  prerender: {
    routes: ['/'],
  },
};

export default ReactAppApp;`;
