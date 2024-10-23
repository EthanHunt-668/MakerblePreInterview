import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Body from './Body.jsx'

const router=createBrowserRouter(
  [{
    path:"/",
    element:<App/>,
    children:[
      {
        path:"/",
        element:<Body/>,
      },
      {
        path:"/player"
      }
    ],
  }]
);

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}></RouterProvider>
)
