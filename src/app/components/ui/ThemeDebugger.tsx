'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export default function ThemeDebugger() {
  const { theme, resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="fixed bottom-4 right-4 p-4 bg-white dark:bg-[#2b2b2b] border rounded-lg shadow-lg text-black dark:text-white">
      <h3 className="font-bold mb-2">Theme Debugger</h3>
      <div className="space-y-1 text-sm">
        <p>Current theme: <strong>{theme}</strong></p>
        <p>Resolved theme: <strong>{resolvedTheme}</strong></p>
        <p>Is dark mode: <strong>{resolvedTheme === 'dark' ? 'Yes' : 'No'}</strong></p>
        <div className="mt-2 space-x-2">
          <button 
            onClick={() => setTheme('light')} 
            className="px-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Set Light
          </button>
          <button 
            onClick={() => setTheme('dark')} 
            className="px-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Set Dark
          </button>
          <button 
            onClick={() => setTheme('system')} 
            className="px-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Set System
          </button>
        </div>
      </div>
    </div>
  )
}