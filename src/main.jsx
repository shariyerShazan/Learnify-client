import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import { Router } from './routes/routes'
import { Provider } from 'react-redux'
import { store } from './reduxStore/store'
import { ToastContainer } from 'react-toastify'
import { PersistGate } from 'redux-persist/integration/react'
import {persistStore} from "redux-persist";

let persist = persistStore(store)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store} >
      <PersistGate  loading={null} persistor={persist}>
         <RouterProvider router={Router}/>
         <ToastContainer />       
      </PersistGate>
    </Provider>
  </StrictMode>,
)
