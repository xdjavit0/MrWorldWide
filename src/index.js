import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { worldwideTheme } from './styles';
import { ThemeProvider } from '@emotion/react'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode >
    <ThemeProvider theme={worldwideTheme}>
    <App />
    </ThemeProvider>
  </React.StrictMode>
);