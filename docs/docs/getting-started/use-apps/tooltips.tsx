import React from 'react';
import { Tooltip } from '@teambit/community.ui.text-tooltip';

export const InstallExpress = ({ children }: { children: string }) => (
  <Tooltip content="bit install express" language="bash">
    {children}
  </Tooltip>
);

export const InstallReactRouterDom = ({ children }: { children: string }) => (
  <Tooltip content="bit install react-router-dom" language="bash">
    {children}
  </Tooltip>
);
