import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import enTranslations from '@shopify/polaris/locales/en.json';
import {AppProvider, Page, LegacyCard, Button} from '@shopify/polaris';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from "react-redux";
import store from './store';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppProvider i18n={enTranslations}>
  
    <BrowserRouter>
    <Provider store={store}>
        <App />
        </Provider>
        </BrowserRouter>
      
  </AppProvider>,
  </React.StrictMode>



);



