import React from 'react';
import { ExpandCode } from '@teambit/community.ui.expand-code';
import { FileExplorer } from '@teambit/community.ui.file-explorer';
import { composition } from './my-react-app-files/react-app-composition-tsx';
import { docs } from './my-react-app-files/react-app-docs-mdx';
import { app } from './my-react-app-files/app-tsx';
import { plugin } from './my-react-app-files/react-app-react-app-ts';
import { index } from './my-react-app-files/index-ts';
import { appRoot } from './my-react-app-files/react-app-app-root-tsx';

const files = {
  'my-react-app.composition.tsx': composition,
  'my-react-app.docs.mdx': docs,
  'my-react-app.react-app.tsx': plugin,
  'app.tsx': app,
  'my-react-app.app-root.tsx': appRoot,
  'index.ts': index,
};

const ReactAppDir = () => (
  <FileExplorer
    options={{
      contentFontSize: 13,
      fileTreeWidth: 230,
      codeHeight: 400,
      isDirOpen: true,
      title: 'my-scope/apps/my-react-app',
      wordWrap: 'off',
    }}
    files={files}
    defaultFile="my-react-app.react-app.tsx"
  />
);

export const ExpandReactAppDir = () => (
  <ExpandCode customTitle="Explore the generated component directory" snippet={ReactAppDir} />
);
