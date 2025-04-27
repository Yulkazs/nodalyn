'use client'

import { useTheme } from '@/app/contexts/ThemeContext'
import { useEffect, useState } from 'react'

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
  width?: number,
  onError?: (error: Error) => void;
}

export default function Chart({
  type,
  data,
  options = {},
  title,
  height,
  width,
  onError,  // Accept onError as a prop
}: ChartProps) {
  const { theme } = useTheme()
  const [chartOptions, setChartOptions] = useState<ChartOptions<any>>({})

  useEffect(() => {
    const updatedOptions: ChartOptions<any> = {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: 'top' as const,
          labels: {
            color: theme === 'dark' ? '#080707' : '#171717'
          }
        },
        title: {
          display: !!title,
          text: title || '',
          color: theme === 'dark' ? '#080707' : '#171717'
        },
        tooltip: {
          bodyColor: theme === 'dark' ? '#080707' : '#171717',
          backgroundColor: theme === 'dark' ? '#3a3a3a' : '#ffffff',
          titleColor: theme === 'dark' ? '#080707' : '#171717',
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
            color: theme === 'dark' ? '#080707' : '#171717'
          }
        },
        y: {
          grid: {
            color: theme === 'dark' ? '#333333' : '#e5e5e5'
          },
          ticks: {
            color: theme === 'dark' ? '#080707' : '#171717'
          }
        }
      } : undefined
    }

    setChartOptions({
      ...updatedOptions,

      ...options,
      plugins: {
        ...updatedOptions.plugins,
        ...options.plugins
      }
    })
  }, [theme, options, title, type])


  const renderChart = () => {
    try {
      switch (type) {
        case 'line':
          return <Line data={data} options={chartOptions} />
        case 'bar':
          return <Bar data={data} options={chartOptions} />
        case 'pie':
          return <Pie data={data} options={chartOptions} />
        case 'doughnut':
          return <Doughnut data={data} options={chartOptions} />
        default:
          return <Line data={data} options={chartOptions} />
      }
    } catch (error) {
      if (onError) {
        onError(error as Error)  // Call onError if passed
      }
      return <div>Error loading chart.</div>
    }
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4 transition-colors" style={{ height, width }}>
      {renderChart()}
    </div>
  )
}
