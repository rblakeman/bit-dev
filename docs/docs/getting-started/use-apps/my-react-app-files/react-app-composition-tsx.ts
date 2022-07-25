export const composition = `import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { ReactAppApp } from './app';

export const ReactAppBasic = () => {
  return (
    <MemoryRouter>
      <ReactAppApp />
    </MemoryRouter>
  );
};`;
