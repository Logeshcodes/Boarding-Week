import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'


import State from './Hooks/State.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <State />
  </StrictMode>,
)
