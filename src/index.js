import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import 'modern-normalize/modern-normalize.css';
import { Global } from 'components/styles/Global';
import { ThemeProvider } from 'styled-components';
import { theme } from './components/styles/theme';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      {' '}
      <App />
      <Global />
    </ThemeProvider>
  </React.StrictMode>
);
