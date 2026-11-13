import { useCallback, useEffect, useState } from 'react'

const getInitial = () => document.documentElement.dataset.theme || 'light'

export function useTheme() {
  const [theme, setTheme] = useState(getInitial)

  useEffect(() => {
    document.documentElement.dataset.theme = theme
  }, [theme])

  const toggle = useCallback(() => {
    setTheme((current) => {
      const next = current === 'dark' ? 'light' : 'dark'
      try {
        localStorage.setItem('theme', next)
      } catch {
        // Storage unavailable (private mode etc.) — theme still applies for this visit.
      }
      return next
    })
  }, [])

  return { theme, toggle }
}
