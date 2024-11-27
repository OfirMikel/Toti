import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

// Wait for 4 seconds before adding the "fade-away" class
setTimeout(() => {
    document.getElementById('loading')?.classList.add('fade-away');
}, 3000);