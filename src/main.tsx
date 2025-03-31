
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { CartProvider } from './contexts/CartContext.tsx';
import { CartSheet } from './components/CartSheet';
import { BrowserRouter } from 'react-router-dom';

// Adds a class to help prevent Flash of Unstyled Text (FOUT)
document.documentElement.classList.add('font-loaded');

// Create a function to measure and report performance
const reportWebVitals = () => {
  if (window.performance && 'getEntriesByType' in window.performance) {
    // Report Performance metrics
    const performanceEntries = performance.getEntriesByType('navigation');
    if (performanceEntries.length > 0) {
      const navigationEntry = performanceEntries[0];
      console.log('Page loaded in:', navigationEntry.duration, 'ms');
    }
  }
};

// Render the app
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

// Report performance after initial render
window.addEventListener('load', reportWebVitals);
