import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { PokeProvider } from './components/context/PokeContext.jsx'

createRoot(document.getElementById('root')).render(
  
  <StrictMode>
  <PokeProvider>
    <App />
  </PokeProvider>
  </StrictMode>,
)
