import React from 'react';
import { ExpandCode } from '@teambit/community.ui.expand-code';
import { FileExplorer } from '@teambit/community.ui.file-explorer';
import { docs } from './my-node-app-files/express-app-docs-mdx';
import { plugin } from './my-node-app-files/express-app-node-app-ts';
import { index } from './my-node-app-files/index-ts';
import { appRoot } from './my-node-app-files/express-app-app-root-ts';
import { mockRoutes } from './my-node-app-files/mock-routes-ts';
import { route } from './my-node-app-files/route-ts';
import { getPort } from './my-node-app-files/get-port-ts';

const files = {
  'my-expres-app.docs.mdx': docs,
  'mock-routes.ts': mockRoutes,
  'my-express-app.react-app.tsx': plugin,
  'my-express-app.app-root.tsx': appRoot,
  'route.ts': route,
  'get-port.ts': getPort,
  'index.ts': index,
};

const NodeAppDir = () => (
  <FileExplorer
    options={{
      contentFontSize: 13,
      fileTreeWidth: 230,
      codeHeight: 400,
      isDirOpen: true,
      title: 'my-scope/apps/my-express-app',
      wordWrap: 'off',
    }}
    files={files}
    defaultFile="my-express-app.react-app.tsx"
  />
);

export const ExpandNodeAppDir = () => (
  <ExpandCode customTitle="Explore the generated component directory" snippet={NodeAppDir} />
);
