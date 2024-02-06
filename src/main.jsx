import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import Routers from './Routes/Route.jsx'
import UserProviderByContext from './components/UserProviderByContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserProviderByContext>
      <RouterProvider router={Routers}></RouterProvider>
    </UserProviderByContext>
  </React.StrictMode>,
)
