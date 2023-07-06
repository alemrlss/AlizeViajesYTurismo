import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import { AppRouter } from './router/AppRouter'
import { AuthProvider } from './context/AuthContext';
import { UiProvider } from './context/UiContext';
import { DataProvider } from './context/DataContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthProvider>
    <DataProvider>
      <UiProvider>
        <AppRouter />
      </UiProvider>
    </DataProvider>
  </AuthProvider>
);
