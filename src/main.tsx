import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';

import ThemeProvider from './context/ThemeContext';
import { Provider } from 'react-redux';
import { store } from './store/index.ts';

import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);
