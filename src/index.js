import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import AuthContextProvider from './context/auth-context'
import {HashRouter,BrowserRouter} from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <AuthContextProvider>
        {/* <BrowserRouter> */}
        <HashRouter>
          <App />
        </HashRouter>
        {/* </BrowserRouter> */}
      </AuthContextProvider>
  </React.StrictMode>
);
