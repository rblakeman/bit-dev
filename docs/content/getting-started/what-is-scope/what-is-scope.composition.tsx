import React from 'react';
import { ThemeCompositions } from '@teambit/documenter.theme.theme-compositions';
import { MDXLayout } from '@teambit/mdx.ui.mdx-layout';
import { WhatIsScope } from './index';

export const BasicCreateWorkspace = () => (
  <ThemeCompositions>
    <MDXLayout>
      <WhatIsScope />
    </MDXLayout>
  </ThemeCompositions>
);