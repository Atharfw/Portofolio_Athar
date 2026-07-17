'use client'

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from 'react'
import { X, ChevronLeft,ChevronRight } from 'lucide-react'

type LightboxPayload = { 
  images: string[]
  alt: string
  index?: number
 }

type LightboxContextValue = {
  open: (payload: LightboxPayload) => void
}

const LightboxContext = createContext<LightboxContextValue | null>(null)

export function useLightbox() {
  const ctx = useContext(LightboxContext)
  if (!ctx) throw new Error('useLightbox must be used within LightboxProvider')
  return ctx
}

export function LightboxProvider({ children }: { children: ReactNode }) {
  const [payload, setPayload] = useState<LightboxPayload | null>(null)
  const [currentIndex, setCurrentIndex] = useState(0)

  const open = useCallback((next: LightboxPayload) => {
    setPayload(next)
    setCurrentIndex(next.index ?? 0)
  }, [])
  const close = useCallback(() => setPayload(null), [])
  const total = payload?.images.length ?? 0
  const hasMultiple = total > 1
  
  const goToNext = useCallback(() => {
    if (!payload) return
    setCurrentIndex((prev) => (prev + 1) % total)
  }, [total])

  const goToPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + total) % total)
  }, [total])

  useEffect(() => {
    if (!payload) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
        if (!hasMultiple) return
        if (e.key === 'ArrowRight') goToNext()
        if (e.key === 'ArrowLeft') goToPrev() 
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [close, goToNext, goToPrev, hasMultiple, payload])

  return (
    <LightboxContext.Provider value={{ open }}>
      {children}
      {payload && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={payload.alt}
          onClick={close}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm animate-in fade-in duration-200"
        >
          <button
            onClick={close}
            aria-label="Close image"
            className="absolute right-5 top-5 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-card/80 text-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            <X className="h-5 w-5" />
          </button>
          {hasMultiple && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  goToPrev()
                }}
                aria-label="Previous image"
                className="absolute left-4 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-card/80 text-foreground transition-colors hover:bg-primary hover:text-primary-foreground sm:left-8"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  goToNext()
                }}
                aria-label="Next image"
                className="absolute right-4 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-card/80 text-foreground transition-colors hover:bg-primary hover:text-primary-foreground sm:right-8"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </>
          )}
          <img
            key={currentIndex}
            src={payload.images[currentIndex] || '/placeholder.svg'}
            alt={`${payload.alt}${hasMultiple ? ` (${currentIndex + 1} of ${total})` : ''}`}
            onClick={(e) => e.stopPropagation()}
            className="max-h-[85vh] max-w-5xl rounded-lg object-contain shadow-2xl animate-in zoom-in-95 duration-200"
          />
          {hasMultiple && (
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 rounded-full bg-card/80 px-4 py-1.5 text-sm font-medium text-foreground tabular-nums">
              {currentIndex + 1} / {total}
            </div>
          )}
        </div>
      )}
      </LightboxContext.Provider>
  )
}
