import React, { ReactNode } from 'react';
import { Skeleton, WordSkeleton, LineSkeleton, CircleSkeleton, BlockSkeleton } from '@teambit/base-ui.loaders.skeleton';
import styles from './styles.module.scss';

export type DocsSkeletonProps = {
  /**
   * a node to be rendered in the special component.
   */
  children?: ReactNode;
};

export function DocsSkeleton() {
  return (
    <div className={styles.skeletonContainer}>
      <WordSkeleton length={40} className={styles.title} />
    </div>
  );
}
