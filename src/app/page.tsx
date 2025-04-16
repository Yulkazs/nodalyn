'use client'

import { useState } from 'react'
import Chart from "./components/ui/Chart"
import { Alert, useAlert } from "./components/ui/Alert"

export default function Home() {
  const { showAlert } = useAlert()
  const [showLocalAlert, setShowLocalAlert] = useState(false)
  
  // Chart data
  const chartData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Website Traffic',
        data: [65, 59, 80, 81, 56, 55],
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
      {
        label: 'Conversion Rate',
        data: [28, 48, 40, 19, 86, 27],
        backgroundColor: 'rgba(153, 102, 255, 0.2)',
        borderColor: 'rgba(153, 102, 255, 1)',
        borderWidth: 1,
      },
    ],
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <section className="mb-16 text-center">
        <h1 className="text-4xl font-bold mb-6">Welcome to Nodalyn</h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          A modern web application built with Next.js, featuring dark/light mode, 
          charts, alerts, and more.
        </p>
      </section>

      {/* Alert Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6 text-center">Alert Components</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h3 className="font-medium mb-2">Local Alerts</h3>
            {showLocalAlert && (
              <Alert 
                type="success" 
                message="This is a local success alert!" 
                autoClose 
                duration={5000}
                onClose={() => setShowLocalAlert(false)}
              />
            )}
            <button
              onClick={() => setShowLocalAlert(true)}
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
            >
              Show Local Alert
            </button>
          </div>
          
          <div className="space-y-4">
            <h3 className="font-medium mb-2">Global Alerts (Top-Right Corner)</h3>
            <div className="space-x-2">
              <button
                onClick={() => showAlert('success', 'Operation completed successfully!')}
                className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors"
              >
                Success
              </button>
              <button
                onClick={() => showAlert('error', 'An error has occurred!')}
                className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors"
              >
                Error
              </button>
              <button
                onClick={() => showAlert('warning', 'This is a warning message!')}
                className="px-4 py-2 bg-yellow-600 text-white rounded hover:bg-yellow-700 transition-colors"
              >
                Warning
              </button>
              <button
                onClick={() => showAlert('info', 'Here is some useful information.')}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
              >
                Info
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Chart Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6 text-center">Interactive Charts</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <Chart 
              type="line"
              data={chartData}
              height={300}
              title="Line Chart Example"
            />
          </div>
          <div>
            <Chart 
              type="bar"
              data={chartData}
              height={300}
              title="Bar Chart Example"
            />
          </div>
          <div>
            <Chart 
              type="pie"
              data={{
                labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple'],
                datasets: [
                  {
                    data: [12, 19, 3, 5, 2],
                    backgroundColor: [
                      'rgba(255, 99, 132, 0.6)',
                      'rgba(54, 162, 235, 0.6)',
                      'rgba(255, 206, 86, 0.6)',
                      'rgba(75, 192, 192, 0.6)',
                      'rgba(153, 102, 255, 0.6)',
                    ],
                    borderColor: [
                      'rgba(255, 99, 132, 1)',
                      'rgba(54, 162, 235, 1)',
                      'rgba(255, 206, 86, 1)',
                      'rgba(75, 192, 192, 1)',
                      'rgba(153, 102, 255, 1)',
                    ],
                    borderWidth: 1,
                  },
                ],
              }}
              height={300}
              title="Pie Chart Example"
            />
          </div>
          <div>
            <Chart 
              type="doughnut"
              data={{
                labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple'],
                datasets: [
                  {
                    data: [12, 19, 3, 5, 2],
                    backgroundColor: [
                      'rgba(255, 99, 132, 0.6)',
                      'rgba(54, 162, 235, 0.6)',
                      'rgba(255, 206, 86, 0.6)',
                      'rgba(75, 192, 192, 0.6)',
                      'rgba(153, 102, 255, 0.6)',
                    ],
                    borderColor: [
                      'rgba(255, 99, 132, 1)',
                      'rgba(54, 162, 235, 1)',
                      'rgba(255, 206, 86, 1)',
                      'rgba(75, 192, 192, 1)',
                      'rgba(153, 102, 255, 1)',
                    ],
                    borderWidth: 1,
                  },
                ],
              }}
              height={300}
              title="Doughnut Chart Example"
            />
          </div>
        </div>
      </section>
    </div>
  )
}