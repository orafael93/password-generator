import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';

import { App } from '@/App.tsx';
import { theme } from '@/styles/theme';
import { GlobalStyles } from '@/styles/globalStyles';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <React.Fragment>
        <GlobalStyles />
        <App />
      </React.Fragment>
    </ThemeProvider>
  </React.StrictMode>,
);
