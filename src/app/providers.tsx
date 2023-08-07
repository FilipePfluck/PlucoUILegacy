'use client'

import { ThemeProvider } from 'next-themes'
import { ReactNode, useEffect } from 'react'

export const Providers = ({ children }: { children: ReactNode }) => {
  useEffect(() => {
    document.body.classList.add('using-mouse')
    document.body.addEventListener('mousedown', function () {
      document.body.classList.add('using-mouse')
    })

    const keys = [
      'Tab',
      'ArrowDown',
      'ArrowUp',
      'ArrowLeft',
      'ArrowRight',
      'Space',
      'Enter',
      'Escape',
    ]

    const onKeyDown = (e: KeyboardEvent) => {
      if (keys.includes(e.key)) {
        document.body.classList.remove('using-mouse')
      }
    }

    // Re-enable focus styling when a key is pressed
    document.body.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.removeEventListener('keydown', onKeyDown)
      document.body.removeEventListener('mousedown', function () {
        document.body.classList.add('using-mouse')
      })
    }
  }, [])

  return <ThemeProvider attribute="class">{children}</ThemeProvider>
}
