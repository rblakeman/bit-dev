/* eslint-disable react/jsx-curly-brace-presence */
import React from 'react';
import { CommandsExplorer } from '@teambit/community.ui.bit-cli.commands-explorer';
import { Terminal, Green } from '@teambit/community.ui.bit-cli.terminal';
import { Commands } from '@teambit/community.ui.bit-cli.commands-explorer/commands';

export const UseCustomAspectInWs = () => {
  const example = {
    'component-id': 'learnbit.extending-bit/metadata/todos/todos-aspect',
  };
  return <CommandsExplorer commandName="use" commandExample={example} />;
};

export const UseCustomAspectInWsOutput = () => (
  <Terminal isOutput>
    <Green>
      {`aspect "learnbit.extending-bit/metadata/todos/todos-aspect" has been saved into the workspace.jsonc file.`}
    </Green>
  </Terminal>
);

export const BitAspect = () => <CommandsExplorer commandName="aspect" subCommandName="set" />;
