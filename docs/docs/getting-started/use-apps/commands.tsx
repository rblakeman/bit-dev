import React from 'react';
import { CommandsExplorer } from '@teambit/community.ui.bit-cli.commands-explorer';
import { Terminal } from '@teambit/community.ui.bit-cli.terminal';
import styles from './styles.module.scss';

const REACT_APP_ID = 'my-org.my-scope/apps/my-react-app';
const REACT_APP_NAME = 'apps/my-react-app';
const NODE_APP_ID = 'my-org.my-scope/apps/my-express-app';
const NODE_APP_NAME = 'my-express-app';

/* react app commands */

export const CreateReactApp = () => {
  const example = {
    'component-names...': REACT_APP_NAME,
    'template-name': 'react-app',
  };
  return <CommandsExplorer commandName="create" commandExample={example} />;
};

export const CreateReactAppOutput = () => (
  <Terminal isOutput>
    <span className={styles.greenHighlight}>1 component(s) were created</span>
    <br />
    <br />
    <span className={styles.bold}>{REACT_APP_ID}</span>
    <br />
    <span>{`    location: my-scope/apps/my-react-app`}</span>
    <br />
    <span>{`    env:      teambit.harmony/aspect (set by template)`}</span>
  </Terminal>
);

export const UseReactApp = () => {
  const example = {
    'component-id': REACT_APP_ID,
  };
  return <CommandsExplorer commandName="use" commandExample={example} />;
};

export const RunReactApp = () => {
  const example = {
    'app-name': REACT_APP_NAME,
  };
  return <CommandsExplorer commandName="run" commandExample={example} />;
};

export const RunReactAppOutput = () => (
  <Terminal isOutput>{`${REACT_APP_NAME} app is running on http://localhost:3000`}</Terminal>
);

/* node app commands */

export const CreateNodeApp = () => {
  const example = {
    'component-names...': NODE_APP_NAME,
    'template-name': 'express-app',
  };
  return <CommandsExplorer commandName="create" commandExample={example} />;
};

export const CreateNodeAppOutput = () => (
  <Terminal isOutput>
    <span className={styles.greenHighlight}>1 component(s) were created</span>
    <br />
    <br />
    <span className={styles.bold}>{NODE_APP_ID}</span>
    <br />
    <span>{`    location: my-scope/apps/my-express-app`}</span>
    <br />
    <span>{`    env:      teambit.harmony/aspect (set by template)`}</span>
  </Terminal>
);

export const UseNodeApp = () => {
  const example = {
    'component-id': NODE_APP_ID,
  };
  return <CommandsExplorer commandName="use" commandExample={example} />;
};

export const RunNodeApp = () => {
  const example = {
    'app-name': NODE_APP_NAME,
  };
  return <CommandsExplorer commandName="run" commandExample={example} />;
};

export const RunNodeAppOutput = () => (
  <Terminal isOutput>my-express-app app is running on http://localhost:3003</Terminal>
);

export const ForkReactApp = () => {
  const example = {
    'source-component-id': 'my-org.tasks-scope/apps/to-do',
  };
  return <CommandsExplorer commandName="fork" commandExample={example} />;
};

export const ForkNodeApp = () => {
  const example = {
    'source-component-id': 'my-org.people/apps/greetings',
  };
  return <CommandsExplorer commandName="fork" commandExample={example} />;
};

export const UseForkedReactApp = () => {
  const example = {
    'component-id': 'my-org.tasks-scope/apps/to-do',
  };
  return <CommandsExplorer commandName="use" commandExample={example} />;
};

export const UseForkedNodeApp = () => {
  const example = {
    'component-id': 'my-org.people/apps/greetings',
  };
  return <CommandsExplorer commandName="use" commandExample={example} />;
};

export const RunForkedReactApp = () => {
  const example = {
    'app-name': 'todo-app',
  };
  return <CommandsExplorer commandName="run" commandExample={example} />;
};

export const RunForkedNodeApp = () => {
  const example = {
    'app-name': 'greetings-app',
  };
  return <CommandsExplorer commandName="run" commandExample={example} />;
};
