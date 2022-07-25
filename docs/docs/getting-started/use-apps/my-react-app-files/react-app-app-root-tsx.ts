export const appRoot = `/**
 * this is the entry file for app's bundler
 * (not to be used by other components)
 */

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ReactAppApp } from './app';

ReactDOM.render((
  <BrowserRouter>
    <ReactAppApp />
  </BrowserRouter>
), document.getElementById('root'));`;
