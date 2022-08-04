/* eslint-disable react/jsx-curly-brace-presence */
import React from 'react';
import { Terminal } from '@teambit/community.ui.bit-cli.terminal';
import { CommandsExplorer } from '@teambit/community.ui.bit-cli.commands-explorer';
import styles from './styles.module.scss';

export const ConfigGetExample = () => {
  const example = {
    key: 'user.token',
  };

  return <CommandsExplorer commandName="config" subCommandName="get" commandExample={example} />;
};

export const TagSoftExample = () => {
  const example = {
    soft: true,
    message: '"my message"',
  };
  return <CommandsExplorer commandName="tag" commandExample={example} />;
};

export const CommitAndPush = () => (
  <Terminal>
    <span>git commit -am </span>
    <span className={styles.component}>{`"my message" `}</span>
    <span>{`&& git push`}</span>
  </Terminal>
);

export const BuildExample = () => <CommandsExplorer commandName="build" commandExample={{}} />;

export const TagPersistExample = () => {
  const example = {
    persist: true,
  };
  return <CommandsExplorer commandName="tag" commandExample={example} />;
};

export const ExportExample = () => <CommandsExplorer commandName="export" commandExample={{}} />;

export const GitAdd = () => (
  <Terminal>
    <span>git add </span>
    <span className={styles.component}>.bitmap</span>
  </Terminal>
);

export const GitCommit = () => (
  <Terminal>
    <span>git commit -m </span>
    <span className={styles.component}>{`"update .bitmap with new component versions (automated). [skip-ci]"`}</span>
  </Terminal>
);

export const GitPush = () => <Terminal>git push</Terminal>;
