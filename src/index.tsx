import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Auth0Provider
    domain="dev-2f3ifwrrlxacydim.us.auth0.com"
    clientId="Lm8whbwhEo8CD3iOyNhjVmZsqMsoQcCE"
    authorizationParams={{
      redirect_uri: 'http://localhost:3000/home',
    }}
  >
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </Auth0Provider>
);
