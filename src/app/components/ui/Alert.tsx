'use client'

import { useState, useEffect } from 'react'
import { X, CheckCircle, XCircle, AlertCircle, Info } from 'lucide-react';

export type AlertType = 'success' | 'error' | 'warning' | 'info'

interface AlertProps {
  type: AlertType
  message: string
  isOpen?: boolean
  autoClose?: boolean
  duration?: number
  onClose?: () => void
}

const alertStyles = {
  success: 'bg-green-50 text-green-800 dark:bg-green-900/30 dark:text-green-300 border-green-500',
  error: 'bg-red-50 text-red-800 dark:bg-red-900/30 dark:text-red-300 border-red-500',
  warning: 'bg-yellow-50 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300 border-yellow-500',
  info: 'bg-blue-50 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300 border-blue-500'
}

const alertIcons = {
  success: <CheckCircle className="w-5 h-5" />,
  error: <XCircle className="w-5 h-5" />,
  warning: <AlertCircle className="w-5 h-5" />,
  info: <Info className="w-5 h-5" />
}

export function Alert({
  type,
  message,
  isOpen = true,
  autoClose = false,
  duration = 5000,
  onClose
}: AlertProps) {
  const [visible, setVisible] = useState(isOpen)

  useEffect(() => {
    setVisible(isOpen)
  }, [isOpen])

  useEffect(() => {
    if (autoClose && visible) {
      const timer = setTimeout(() => {
        setVisible(false)
        if (onClose) onClose()
      }, duration)
      
      return () => clearTimeout(timer)
    }
  }, [autoClose, duration, onClose, visible])

  if (!visible) return null

  return (
    <div className={`flex items-center p-4 mb-4 rounded-lg border ${alertStyles[type]} transition-all`}>
      <div className="mr-2">
        {alertIcons[type]}
      </div>
      <div className="flex-1 text-sm font-medium">
        {message}
      </div>
      <button
        type="button"
        onClick={() => {
          setVisible(false)
          if (onClose) onClose()
        }}
        className="ml-auto -mx-1.5 -my-1.5 rounded-lg p-1.5 hover:bg-gray-100 dark:hover:bg-gray-900 focus:ring-2 focus:ring-gray-300"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  )
}

// Alert context for global alerts
import { createContext, useContext, ReactNode } from 'react'

interface AlertContextType {
  showAlert: (type: AlertType, message: string, duration?: number) => void
}

const AlertContext = createContext<AlertContextType | undefined>(undefined)

export function AlertProvider({ children }: { children: ReactNode }) {
  const [alerts, setAlerts] = useState<{id: number, type: AlertType, message: string, duration?: number}[]>([])
  let alertId = 0

  const showAlert = (type: AlertType, message: string, duration = 5000) => {
    const id = alertId++
    setAlerts(prev => [...prev, { id, type, message, duration }])
    
    if (duration) {
      setTimeout(() => {
        setAlerts(prev => prev.filter(alert => alert.id !== id))
      }, duration)
    }
  }

  return (
    <AlertContext.Provider value={{ showAlert }}>
      <div className="fixed top-4 right-4 z-50 w-72 space-y-2">
        {alerts.map(alert => (
          <Alert 
            key={alert.id}
            type={alert.type}
            message={alert.message}
            autoClose
            duration={alert.duration}
            onClose={() => setAlerts(prev => prev.filter(a => a.id !== alert.id))}
          />
        ))}
      </div>
      {children}
    </AlertContext.Provider>
  )
}

export function useAlert() {
  const context = useContext(AlertContext)
  if (context === undefined) {
    throw new Error('useAlert must be used within an AlertProvider')
  }
  return context
}