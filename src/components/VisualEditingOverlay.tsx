import { useEffect } from 'react'
import { enableOverlays, type HistoryAdapterNavigate } from '@sanity/overlays'

interface VisualEditingOverlayProps {
  children: React.ReactNode
}

export function VisualEditingOverlay({ children }: VisualEditingOverlayProps) {
  useEffect(() => {
    // Only enable overlays if visual editing is enabled via environment variable
    const isEnabled = import.meta.env.VITE_SANITY_ENABLE_OVERLAYS === 'true'
    
    if (!isEnabled) return

    const navigate: HistoryAdapterNavigate = (intent) => {
      if (intent.type === 'edit') {
        // Open Sanity Studio in the current window at /studio
        window.location.href = `/studio/desk/${intent.id};${intent.type}`
      }
    }

    // Enable visual editing overlays
    const disable = enableOverlays({
      history: { navigate },
      projectId: import.meta.env.VITE_SANITY_PROJECT_ID || 'of1onask',
      dataset: import.meta.env.VITE_SANITY_DATASET || 'production',
    })

    return () => {
      disable()
    }
  }, [])

  return <>{children}</>
}

export default VisualEditingOverlay