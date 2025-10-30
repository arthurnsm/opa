import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import React from 'react';
import ReactDom from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Adocao from './pages/adocao.tsx'

import App from './App.tsx'
import About from './pages/about.tsx'
import Donate from './pages/donate.tsx'
import ErrorPage from './pages/error.tsx';
import Home from './pages/home.tsx';
import Eventos from './pages/eventos.tsx'
const router = createBrowserRouter([{
  
  path: "/",
  element: <App/>,
  errorElement: <ErrorPage/>,
  children:[
    {
      path:'/',
      element: <Home />
    },
    {
      path:'/sobre',
      element:<About/>
    },
    {
      path:'/doacao',
      element:<Donate/>
    },
    {
      path:'/eventos',
      element: <Eventos/>

    },

    {
      path:'/adocao',
      element:<Adocao/>

    }
  ]
}

])



createRoot(document.getElementById('root')!).render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>,
)
