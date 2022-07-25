export const app = `import React from 'react';
import { Routes, Route } from 'react-router-dom';

export function ReactAppApp() {
  return (
    <>
        <Routes>
          <Route path="/" element={<div>Hello World!!</div>}>
          </Route>
          <Route path="/about">
          </Route>
        </Routes>
    </>
  );
}`;
