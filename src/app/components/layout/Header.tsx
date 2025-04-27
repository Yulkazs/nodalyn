'use client'

import { useTheme } from 'next-themes'
import { Sun, Moon } from 'lucide-react'
import { useEffect, useState } from 'react'

export default function Header() {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Only show the theme toggle after mounting to prevent hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  function toggleTheme() {
    // Get the current theme
    const currentTheme = resolvedTheme || 'light'
    // Set the theme to the opposite of the current theme
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark'
    
    console.log('Current theme:', currentTheme)
    console.log('Setting theme to:', newTheme)
    
    setTheme(newTheme)
  }

  return (
    <header className="fixed top-0 left-0 right-0 bg-white dark:bg-[#060806] z-10 shadow-sm">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="font-semibold text-lg text-black dark:text-white">Nodalyn</div>
        
        {mounted && (
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-full bg-[#e6e8e6] dark:bg-[#2b2b2b] text-black dark:text-white 
                     hover:bg-gray-200 dark:hover:bg-gray-700"
            aria-label="Toggle theme"
          >
            {resolvedTheme === 'dark' ? (
              <Sun className="w-5 h-5" />
            ) : (
              <Moon className="w-5 h-5" />
            )}
          </button>
        )}
      </div>
    </header>
  )
}