import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import { Router } from './routes/routes'
import { Provider } from 'react-redux'
import { store } from './reduxStore/store'
import { ToastContainer } from 'react-toastify'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store} >
         <RouterProvider router={Router}/>
         <ToastContainer />
    </Provider>
  </StrictMode>,
)
