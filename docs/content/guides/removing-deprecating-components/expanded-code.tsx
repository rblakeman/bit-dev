import React from 'react';
import { ExpandCode } from '@teambit/community.ui.expand-code';
import { BitDeprecate, BitRemove } from './commands';

export const ExpandedDeprecate = () => <ExpandCode snippet={BitDeprecate} />;

export const ExpandedRemove = () => <ExpandCode snippet={BitRemove} />;
