import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

// import App from './App.jsx'
import State from './Hooks/State.jsx'
import TwoWayBinding from './Props/TwoWayBinding.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <State />
    {/* <Form/> */}
    {/* <Portal/> */}
  </StrictMode>,
)
