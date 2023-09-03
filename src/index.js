import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import ScrollToTop from './components/ScrollToTop';
import './css/theme.css';
import './css/navbar.css';
import './css/responsive.css';
import './css/admin.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import { DataProvider } from './context/ProductConetxt';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <DataProvider>
    <BrowserRouter>
      <React.StrictMode>
        <ScrollToTop />
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </DataProvider>
);
