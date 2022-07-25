import React from 'react';
import { BitShowExplorer } from '@teambit/community.ui.bit-show-explorer';
import IdDesc from './bit-show-descriptions/node-id-desc.mdx';
import NameDesc from './bit-show-descriptions/name-desc.mdx';
import ScopeDesc from './bit-show-descriptions/scope-desc.mdx';
import EnvDesc from './bit-show-descriptions/node-env-desc.mdx';
import PackageNameDesc from './bit-show-descriptions/node-package-name-desc.mdx';
import DeprecatedDesc from './bit-show-descriptions/deprecated-desc.mdx';
import MainFileDesc from './bit-show-descriptions/main-file-desc.mdx';
import FilesDesc from './bit-show-descriptions/files-desc.mdx';
import DevFilesDesc from './bit-show-descriptions/dev-files-desc.mdx';
import AspectsDesc from './bit-show-descriptions/aspects-desc.mdx';
import DepsDesc from './bit-show-descriptions/deps-desc.mdx';
import DevDepsDesc from './bit-show-descriptions/dev-deps-desc.mdx';
import PeerDepsDesc from './bit-show-descriptions/peer-deps-desc.mdx';

const descriptions = [
  <IdDesc />,
  <ScopeDesc />,
  <NameDesc />,
  <EnvDesc />,
  <PackageNameDesc />,
  <DeprecatedDesc />,
  <MainFileDesc />,
  <FilesDesc />,
  <DevFilesDesc />,
  <AspectsDesc />,
  <DepsDesc />,
  <DevDepsDesc />,
  <PeerDepsDesc />,
];

const bitShowOutput = `
┌───────────────────┬───────────────────────────────────────────────────────────────┐
│ id                │ my-org.people/apps/greetings                                  │
├───────────────────┼───────────────────────────────────────────────────────────────┤
│ scope             │ my-org.people                                                 │
├───────────────────┼───────────────────────────────────────────────────────────────┤
│ name              │ apps/greetings                                                │
├───────────────────┼───────────────────────────────────────────────────────────────┤
│ env               │ teambit.harmony/node                                          │
├───────────────────┼───────────────────────────────────────────────────────────────┤
│ package name      │ @my-org/people.apps.greetings                                 │
├───────────────────┼───────────────────────────────────────────────────────────────┤
│ deprecated        │ false                                                         │
├───────────────────┼───────────────────────────────────────────────────────────────┤
│ main file         │ index.ts                                                      │
├───────────────────┼───────────────────────────────────────────────────────────────┤
│ files             │ greetings.composition.tsx                                     │
│                   │ greetings.docs.mdx                                            │
│                   │ greetings.spec.ts                                             │
│                   │ greetings.ts                                                  │
│                   │ index.ts                                                      │
│                   │ timezone.ts                                                   │
├───────────────────┼───────────────────────────────────────────────────────────────┤
│ dev files         │ greetings.spec.ts (teambit.defender/tester)                   │
│                   │ greetings.composition.tsx (teambit.compositions/compositions) │
│                   │ greetings.docs.mdx (teambit.docs/docs)                        │
├───────────────────┼───────────────────────────────────────────────────────────────┤
│ aspects           │ teambit.compilation/compiler                                  │
│                   │ teambit.compilation/compiler                                  │
│                   │ teambit.component/dev-files                                   │
│                   │ teambit.compositions/compositions                             │
│                   │ teambit.dependencies/dependency-resolver                      │
│                   │ teambit.docs/docs                                             │
│                   │ teambit.envs/envs                                             │
│                   │ teambit.harmony/node                                          │
│                   │ teambit.pipelines/builder                                     │
│                   │ teambit.pkg/pkg                                               │
├───────────────────┼───────────────────────────────────────────────────────────────┤
│ dev dependencies  │ @babel/runtime@7.12.18- (package)                             │
│                   │ @types/jest@26.0.20---- (package)                             │
│                   │ @types/node@12.20.4---- (package)                             │
│                   │ react@17.0.2----------- (package)                             │
├───────────────────┼───────────────────────────────────────────────────────────────┤
│ peer dependencies │                                                               │
└───────────────────┴───────────────────────────────────────────────────────────────┘
`;

export const BitShowExample = () => <BitShowExplorer bitShowOutput={bitShowOutput} descriptions={descriptions} />;
