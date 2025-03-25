
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { CartProvider } from './contexts/CartContext.tsx';
import { CartSheet } from './components/CartSheet';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <CartProvider>
      <BrowserRouter>
        <CartSheet />
        <App />
      </BrowserRouter>
    </CartProvider>
  </React.StrictMode>,
);
