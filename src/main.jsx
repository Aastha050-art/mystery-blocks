 import{RouterProvider,createBrowserRouter} from 'react-router-dom'
 const router = createBrowserRouter([
  {path:'/wel', element:<WelcomeScreen/>},
  {path:'/',element:<App/>},
  {path:'/start',element:<Game2/>},
  
    
 ])
 import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import App from './App.jsx'


import WelcomeScreen from './components/WelcomeScreen.jsx'

import Game2 from './components/game2.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
