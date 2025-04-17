import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

// import App from './App.jsx'
import Ref from './Ref/Ref.jsx'
import Portal from './Extra/Portal.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Ref />
    {/* <Portal/> */}
  </StrictMode>,
)
