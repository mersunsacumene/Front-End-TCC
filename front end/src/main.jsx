import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'


import { createBrowserRouter, RouterProvider } from"react-router-dom";      

import Home from './views/Home.jsx';
import About from './views/About.jsx';
import Contact from './views/Contact.jsx';
import ErrorPage from './views/ErrorPage.jsx';
import Login from './views/Login.jsx';
import SignUp from './views/SignUp.jsx';
import EsqueceuSenha from './views/EsqueceuSenha.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "contact",
        element: <Contact />
      },
      {
        path: "about",
        element: <About />
      },
       {
         path: "login",
         element: <Login />
       },
       {
        path: "signup",
        element: <SignUp />
       },
       {
        path: "esqueceusenha",
        element: <EsqueceuSenha />
       }
    ],
   },
]);
 
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
