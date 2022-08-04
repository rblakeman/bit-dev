import React from 'react';
import { FileExplorer } from '@teambit/community.ui.file-explorer';
import { composition } from './node-demo-component-files/composition';
import { docs } from './node-demo-component-files/docs';
import { spec } from './node-demo-component-files/spec';
import { greetings } from './node-demo-component-files/greetings';
import { index } from './node-demo-component-files/index';

const files = {
  'greetings.composition.tsx': composition,
  'greetings.docs.mdx': docs,
  'greetings.spec.ts': spec,
  'greetings.ts': greetings,
  'index.ts': index,
};

export const ExploreComponentFiles = () => (
  <FileExplorer
    options={{
      contentFontSize: 13,
      fileTreeWidth: 230,
      codeHeight: 400,
      isDirOpen: true,
      title: 'people/apps/greetings',
      wordWrap: 'off',
    }}
    files={files}
    defaultFile="index.ts"
  />
);
