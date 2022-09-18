import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import SpoonacularContext, { SpoonacularProvider } from "./context/SpoonacularContext";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SpoonacularProvider>
      <App />
    </SpoonacularProvider>
  </React.StrictMode>
);
