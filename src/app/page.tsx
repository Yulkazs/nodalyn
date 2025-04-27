'use client'

import { useEffect, useState } from 'react'

export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <div className="p-8"><h1 className="text-3xl">Loading...</h1></div>
  }

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6 text-black dark:text-white">Welcome to the Theme Switcher!</h1>
      
      <div className="grid gap-6 md:grid-cols-2">
        <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md transition-colors">
          <h2 className="text-xl font-semibold mb-2 text-black dark:text-white">Light/Dark Theme</h2>
          <p className="text-gray-700 dark:text-gray-300">This container will change colors based on the selected theme. Click the Sun/Moon icon in the header to toggle between light and dark modes.</p>
        </div>
        
        <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md transition-colors">
          <h2 className="text-xl font-semibold mb-2 text-black dark:text-white">Theme Features</h2>
          <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
            <li>System preference detection</li>
            <li>Theme persistence across sessions</li>
            <li>Smooth transition animations</li>
            <li>Tailwind CSS integration</li>
          </ul>
        </div>
      </div>
    </div>
  );
}