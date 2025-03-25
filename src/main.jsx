
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  
  RouterProvider,
} from "react-router-dom";
import { router } from './Routes/Routes';
import { Auth0Provider } from '@auth0/auth0-react';
import { Provider } from 'react-redux';
import Store from './store';




createRoot(document.getElementById('root')).render(
  <Provider store={Store}>
  <Auth0Provider
    domain="dev-x5onul8cy8moqbp3.us.auth0.com"
    clientId="nbY6DXMY8ifvJg3TusQUxij336zdDEzW"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
   
   <RouterProvider router={router} />
   
</Auth0Provider>
</Provider>
)
