'use client'

import { useTheme } from '../../contexts/ThemeContext'

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions,
  ChartData
} from 'chart.js'
import { Line, Bar, Pie, Doughnut } from 'react-chartjs-2'

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
)

type ChartType = 'line' | 'bar' | 'pie' | 'doughnut'

interface ChartProps {
  type: ChartType
  data: ChartData<any>
  options?: ChartOptions<any>
  title?: string
  height?: number
  width?: number
}

export default function Chart({ 
  type, 
  data, 
  options = {}, 
  title,
  height,
  width
}: ChartProps) {
  const { theme } = useTheme()
  
  // Adjust colors based on theme
  const defaultOptions: ChartOptions<any> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top' as const,
        labels: {
          color: theme === 'dark' ? '#ededed' : '#171717'
        }
      },
      title: {
        display: !!title,
        text: title || '',
        color: theme === 'dark' ? '#ededed' : '#171717'
      },
      tooltip: {
        bodyColor: theme === 'dark' ? '#ededed' : '#171717',
        backgroundColor: theme === 'dark' ? '#3a3a3a' : '#ffffff',
        titleColor: theme === 'dark' ? '#ededed' : '#171717',
        borderColor: theme === 'dark' ? '#555555' : '#e5e5e5',
        borderWidth: 1
      }
    },
    scales: type === 'line' || type === 'bar' ? {
      x: {
        grid: {
          color: theme === 'dark' ? '#333333' : '#e5e5e5'
        },
        ticks: {
          color: theme === 'dark' ? '#ededed' : '#171717'
        }
      },
      y: {
        grid: {
          color: theme === 'dark' ? '#333333' : '#e5e5e5'
        },
        ticks: {
          color: theme === 'dark' ? '#ededed' : '#171717'
        }
      }
    } : undefined
  }

  // Merge default options with provided options
  const mergedOptions = {
    ...defaultOptions,
    ...options,
    plugins: {
      ...defaultOptions.plugins,
      ...options.plugins
    }
  }

  // Render the appropriate chart type
  const renderChart = () => {
    switch (type) {
      case 'line':
        return <Line data={data} options={mergedOptions} />
      case 'bar':
        return <Bar data={data} options={mergedOptions} />
      case 'pie':
        return <Pie data={data} options={mergedOptions} />
      case 'doughnut':
        return <Doughnut data={data} options={mergedOptions} />
      default:
        return <Line data={data} options={mergedOptions} />
    }
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4 transition-colors" style={{ height, width }}>
      {renderChart()}
    </div>
  )
}