import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import UserLogin from './modules/user/components/UserLogin.jsx';

import initializeApp from './app/init';
import checkAuth from './app/auth';
import CreateAccount from './modules/account/components/CreateAccount.jsx';
import ListAccount from './modules/account/components/ListAccount.jsx';
import Exception from './modules/errors/Exception.jsx';
import EmailValidation from './modules/sample/EmailValidation.jsx';

// Initializing different libraries
initializeApp()

// Check for login and initialize axios
checkAuth();

const router = createBrowserRouter([
  {
    path: "/login",
    element: <UserLogin/>
  },
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/account/list",
        element: <ListAccount/>,
        errorElement: <Exception/>,
      },
      {
        path: "/account/create",
        element: <CreateAccount/>
      },
      {
        path: "/email/validation",
        element: <EmailValidation/>
      }
    ]
    
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
