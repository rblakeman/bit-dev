import React from 'react';
import { ContentTabs } from '@teambit/community.ui.content-tabs';
import CreateReact from './create-react.mdx';
import CreateNode from './create-node.mdx';
import styles from './styles.module.scss';

const content = [
  {
    title: () => <span className={styles.title}>React component</span>,
    Body: CreateReact,
  },
  {
    title: () => <span className={styles.title}>Node component</span>,
    Body: CreateNode,
  },
];

export const ComponentTypeTabs = () => <ContentTabs content={content} tabsUrlParam="component_type" />;
