import React, { ReactNode, HTMLAttributes } from 'react';
import cx from 'classnames';
import styles from './styles.module.scss';

export type TerminalElement = {
  children: ReactNode;
  className?: string;
  bold?: boolean;
} & HTMLAttributes<HTMLSpanElement>;

export const Neutral = ({ children, className, bold, ...rest }: TerminalElement) => (
  <span className={cx(bold && styles.bold, styles.className)} {...rest}>
    {children}
  </span>
);

export const Blue = ({ children, className, bold, ...rest }: TerminalElement) => (
  <span className={cx(styles.blue, bold && styles.bold, styles.className)} {...rest}>
    {children}
  </span>
);

export const Red = ({ children, className, bold, ...rest }: TerminalElement) => (
  <span className={cx(styles.red, bold && styles.bold, styles.className)} {...rest}>
    {children}
  </span>
);

export const Green = ({ children, className, bold, ...rest }: TerminalElement) => (
  <span className={cx(styles.green, bold && styles.bold, styles.className)} {...rest}>
    {children}
  </span>
);

export const Heading = ({ children, className, bold, ...rest }: TerminalElement) => (
  <span className={cx(styles.heading, bold && styles.bold, styles.className)} {...rest}>
    {children}
  </span>
);
