/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { ReactNode, useState, useRef } from 'react';
import copy from 'copy-to-clipboard';
import { CopiedMessage } from '@teambit/documenter.ui.copied-message';
// @ts-ignore
import styles from './styles.module.scss';

export type TerminalProps = {
  /**
   * a node to be rendered in the special component.
   */
  children?: ReactNode;
  isOutput?: boolean;
};

export function Terminal({ children, isOutput = false }: TerminalProps) {
  const commandSpan = useRef<HTMLSpanElement>(null);
  const [isCopied, setIsCopied] = useState(false);
  const htmlRegex = /(<([^>]+)>)/gi;
  const spacesRegex = /\s\s+/g;

  const handleClick = () => {
    if (!commandSpan.current) return;
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 1000);
    copy(commandSpan.current.innerHTML.replace(htmlRegex, ' ').replace(spacesRegex, ' ').trim());
  };

  return (
    <div className={styles.wrapper} data-testid="terminal-wrapper">
      <div className={styles.terminal} data-testid="terminal">
        {!isOutput && <span className={styles.dollarSign}>$</span>}
        <span ref={commandSpan} data-testid="terminal-text-field">
          {children}
        </span>
        {!isOutput && (
          <div className={styles.copy}>
            <CopiedMessage show={isCopied} />
            <img
              src="https://static.bit.cloud/Community/icons/copy.svg"
              onClick={handleClick}
              className={styles.copyIcon}
              alt="copy"
            />
          </div>
        )}
      </div>
    </div>
  );
}
