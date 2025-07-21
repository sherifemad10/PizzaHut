import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { AuthProvider } from './contexts/authContext.tsx';
import { AddToCartProvider } from './contexts/AddCartContext.tsx';

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AuthProvider>
      {/* <AddToCartProvider> */}
    <App />
    {/* </AddToCartProvider> */}
    </AuthProvider>

  </React.StrictMode>
);
