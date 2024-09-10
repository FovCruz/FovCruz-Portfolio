import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { AuthProvider } from './auth.tsx';

const container = document.getElementById('root');
const root = createRoot(container!);  // Aquí se usa createRoot en lugar de ReactDOM.render
root.render(
  <AuthProvider>
    <App />
  </AuthProvider>
);
