import React from 'react';
import { Terminal, Green, Neutral } from '@teambit/community.ui.bit-cli.terminal';
import { CommandsExplorer } from '@teambit/community.ui.bit-cli.commands-explorer';
import styles from './styles.module.scss';

const COMPONENT_NAME = 'foo/bar';
const COMPONENT_ID = `my-org.my-scope/${COMPONENT_NAME}`;

export const BitDeprecate = () => <CommandsExplorer commandName="deprecate" className={styles.noMarginBottom} />;

export const DeprecateExample = () => {
  const example = {
    'component-name': COMPONENT_NAME,
  };
  return <CommandsExplorer commandName="deprecate" commandExample={example} />;
};

export const DeprecateOutput = () => (
  <Terminal isOutput>
    <Green>{`the component ${COMPONENT_NAME} has been deprecated successfully`}</Green>
  </Terminal>
);

export const RemoveExample = () => {
  const example = {
    'component-ids...': COMPONENT_NAME,
  };

  return <CommandsExplorer commandName="remove" commandExample={example} />;
};

export const BitRemove = () => {
  return <CommandsExplorer commandName="remove" className={styles.noMarginBottom} />;
};

export const RemoveOutput = () => (
  <Terminal isOutput>
    <Green>
      successfully removed components from the local scope (to remove from the remote scope, please re-run the command
      with --remote flag):
    </Green>
    <br />
    <Neutral>{COMPONENT_NAME}</Neutral>
  </Terminal>
);

export const RemoveRemoteExample = () => {
  const example = {
    'component-ids...': COMPONENT_ID,
    remote: true,
  };

  return <CommandsExplorer commandName="remove" commandExample={example} />;
};

export const RemoveRemoteOutput = () => (
  <Terminal isOutput>
    <Green>successfully removed components from the remote scope</Green>
    <br />
    <Neutral>{COMPONENT_ID}</Neutral>
  </Terminal>
);
