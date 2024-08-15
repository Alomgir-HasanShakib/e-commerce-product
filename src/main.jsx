import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './routes/Route'
import Authentication from './Context/Authentication/Authentication'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Authentication>

        <RouterProvider router={router}>
        </RouterProvider>
    </Authentication>
  </StrictMode>,
)
