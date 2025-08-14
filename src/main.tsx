import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { StagewiseToolbar } from '@stagewise/toolbar-react'
import { initSanityOverlays } from './sanity/overlays'

// Create main app root
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

// Initialize stagewise toolbar in development mode only
if (import.meta.env.MODE === 'development') {
  const stagewiseConfig = {
    plugins: []
  }
  
  // Create a separate root for the toolbar to avoid interfering with the main app
  const toolbarContainer = document.createElement('div')
  toolbarContainer.id = 'stagewise-toolbar-root'
  document.body.appendChild(toolbarContainer)
  
  createRoot(toolbarContainer).render(
    <StagewiseToolbar config={stagewiseConfig} />
  )
}

// Initialize optional Sanity Visual Editing overlays (if enabled)
initSanityOverlays()
