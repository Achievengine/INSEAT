export async function initSanityOverlays(): Promise<void> {
  try {
    // Opt-in via env flag
    if (!(import.meta as any).env?.VITE_SANITY_ENABLE_OVERLAYS) return

    const { enableOverlays } = await import('@sanity/overlays')
    const projectId = (import.meta as any).env?.VITE_SANITY_PROJECT_ID
    const dataset = (import.meta as any).env?.VITE_SANITY_DATASET || 'production'

    if (!projectId) return

    // Use local Studio mounted at /studio by default
    const studioUrl = (origin: string) => new URL('/studio', origin).toString()

    // Minimal config; works with @sanity/client/stega markers
    enableOverlays({ projectId, dataset, studioUrl })
  } catch (_) {
    // Silently no-op if overlays are unavailable
  }
}
