import React from 'react';
import NodeApp from './node-app.mdx';
import ReactApp from './react-app.mdx';
import styles from './styles.module.scss';

export const appTypes = [
  {
    title: () => <span className={styles.title}>React app</span>,
    Body: ReactApp,
  },
  {
    title: () => <span className={styles.title}>Node app</span>,
    Body: NodeApp,
  },
];
