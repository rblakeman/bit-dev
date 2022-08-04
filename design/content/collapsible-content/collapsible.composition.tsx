import React from 'react';
import { Collapsible } from './collapsible';

const JsxTitle = () => <h3>JSX Title!</h3>;

const Content = () => <p>JSX Element</p>;

export const BasicCollapsible = () => (
  // @ts-ignore
  <Collapsible title="What is Bit?" content={<Content />} />
);

// @ts-ignore
export const JsxTitleCollapsible = () => <Collapsible title={<JsxTitle />} content={<Content />} />;

export const OpendedByDefault = () => <Collapsible title="What is Bit?" content={<Content />} isOpenByDefault />;
