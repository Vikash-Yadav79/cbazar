import React from 'react';
import ReactDOM from 'react-dom/client'; // Notice the change here
import './index.css';
import App from './App';
import { CartProvider } from './components/cartcontext/CartContext';

const root = ReactDOM.createRoot(document.getElementById('root')); // Use createRoot instead of render
root.render(
  <React.StrictMode>
    <CartProvider>
      <App />
    </CartProvider>
  </React.StrictMode>
);
