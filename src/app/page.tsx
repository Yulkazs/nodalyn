'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import Chart from './components/ui/Chart'
import { ArrowRight, TrendingUp, Shield, BookOpen, Zap } from 'lucide-react'
import { animateHeroElements, animateCards, animateChartEntrance, scrollReveal } from './utils/animations'

// Mock data for the chart
const priceData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  datasets: [
    {
      label: 'Bitcoin',
      data: [42000, 38000, 44500, 47000, 55000, 63000, 58000, 61000, 59000, 64000, 66000, 69000],
      borderColor: 'rgba(37, 99, 235, 1)',
      backgroundColor: 'rgba(37, 99, 235, 0.1)',
      fill: true,
      tension: 0.4,
    },
    {
      label: 'Ethereum',
      data: [3100, 2800, 3200, 3500, 3800, 3900, 3700, 3850, 3300, 3600, 3800, 4100],
      borderColor: 'rgba(139, 92, 246, 1)',
      backgroundColor: 'rgba(139, 92, 246, 0.1)',
      fill: true,
      tension: 0.4,
    }
  ],
}

const marketCapData = {
  labels: ['Bitcoin', 'Ethereum', 'Binance Coin', 'Solana', 'Cardano', 'XRP'],
  datasets: [
    {
      data: [42.5, 19.3, 5.2, 3.8, 2.1, 1.9],
      backgroundColor: [
        'rgba(255, 99, 132, 0.7)',
        'rgba(54, 162, 235, 0.7)',
        'rgba(255, 206, 86, 0.7)',
        'rgba(75, 192, 192, 0.7)',
        'rgba(153, 102, 255, 0.7)',
        'rgba(255, 159, 64, 0.7)',
      ],
      borderWidth: 1,
    },
  ],
}

export default function Home() {
  const chartRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Run animations when the component mounts
    animateHeroElements();
    scrollReveal();
    
    // Animate chart when it's in view
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && chartRef.current) {
          animateChartEntrance('.chart-container');
          observer.unobserve(chartRef.current);
        }
      },
      { threshold: 0.1 }
    );
    
    if (chartRef.current) {
      observer.observe(chartRef.current);
    }
    
    return () => {
      if (chartRef.current) observer.unobserve(chartRef.current);
    };
  }, []);

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-white to-blue-50 dark:from-gray-900 dark:to-gray-800 py-20 md:py-32">
        {/* Background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-300 dark:bg-purple-900 rounded-full opacity-30 blur-3xl"></div>
          <div className="absolute top-40 -left-20 w-60 h-60 bg-blue-300 dark:bg-blue-900 rounded-full opacity-20 blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="w-full lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0">
              <h1 className="hero-title text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
                <span className="anime-text inline-block">Crypto</span>{' '}
                <span className="anime-text inline-block">Intelligence</span>{' '}
                <span className="anime-text inline-block">for</span>{' '}
                <span className="anime-text inline-block">Everyone</span>
              </h1>
              <p className="hero-subtitle text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8">
                Real-time cryptocurrency data, insights, and educational resources in one place.
              </p>
              <div className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
                <Link href="/market" className="hero-cta inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 shadow-md transition-colors">
                  Explore Markets <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link href="/crypto-basics" className="hero-cta inline-flex items-center justify-center px-6 py-3 border border-gray-300 dark:border-gray-700 text-base font-medium rounded-md text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 shadow-md transition-colors">
                  Learn Basics
                </Link>
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <div className="hero-image relative mx-auto max-w-lg">
                {/* Crypto illustration/animation placeholder */}
                <div className="rounded-lg shadow-xl bg-white dark:bg-gray-800 p-4 transform rotate-1">
                  <Chart 
                    type="line"
                    data={priceData}
                    height={300}
                    title="Bitcoin & Ethereum Price Trends (USD)"
                  />
                </div>
                {/* Decorative elements */}
                <div className="absolute -z-10 -right-4 -bottom-4 w-full h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg transform -rotate-2 opacity-50"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 scroll-reveal">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Dive into the World of Cryptocurrencies
            </h2>
            <p className="max-w-2xl mx-auto text-xl text-gray-600 dark:text-gray-400">
              Everything you need to stay informed and make data-driven decisions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Feature 1 */}
            <div className="scroll-reveal bg-gray-50 dark:bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="inline-flex items-center justify-center p-3 bg-blue-100 dark:bg-blue-900 rounded-md mb-4">
                <TrendingUp className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Live Market Data</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Track prices, market caps, and trading volumes for thousands of cryptocurrencies in real-time.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="scroll-reveal bg-gray-50 dark:bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="inline-flex items-center justify-center p-3 bg-purple-100 dark:bg-purple-900 rounded-md mb-4">
                <Shield className="h-6 w-6 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Project Deep Dives</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Detailed analysis of cryptocurrency projects, their technology, teams, and use cases.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="scroll-reveal bg-gray-50 dark:bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="inline-flex items-center justify-center p-3 bg-green-100 dark:bg-green-900 rounded-md mb-4">
                <BookOpen className="h-6 w-6 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Educational Content</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Beginner-friendly guides and resources to help you understand blockchain technology.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="scroll-reveal bg-gray-50 dark:bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="inline-flex items-center justify-center p-3 bg-amber-100 dark:bg-amber-900 rounded-md mb-4">
                <Zap className="h-6 w-6 text-amber-600 dark:text-amber-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Latest News</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Stay updated with the latest cryptocurrency news, regulatory changes, and market trends.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Charts Section */}
      <section ref={chartRef} className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 scroll-reveal">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Market at a Glance
            </h2>
            <p className="max-w-2xl mx-auto text-xl text-gray-600 dark:text-gray-400">
              Interactive charts and visualizations to help you understand market trends
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="chart-container bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6">
              <Chart 
                type="line"
                data={priceData}
                height={400}
                title="Price History (USD)"
              />
            </div>
            <div className="chart-container bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6">
              <Chart 
                type="doughnut"
                data={marketCapData}
                height={400}
                title="Market Cap Distribution (%)"
              />
            </div>
          </div>

          <div className="mt-8 text-center">
            <Link href="/market" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 shadow-md transition-colors">
              View All Market Data <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center scroll-reveal">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Ready to Dive Deeper into Crypto?
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Explore our comprehensive resources and stay ahead of the curve.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link href="/crypto-basics" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-white hover:bg-blue-50 shadow-md transition-colors">
                Start Learning
              </Link>
              <Link href="/market" className="inline-flex items-center justify-center px-6 py-3 border border-white text-base font-medium rounded-md text-white bg-transparent hover:bg-white/10 shadow-md transition-colors">
                View Market Data
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Educational Teaser Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 scroll-reveal">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Learn Crypto Step by Step
            </h2>
            <p className="max-w-2xl mx-auto text-xl text-gray-600 dark:text-gray-400">
              From blockchain basics to advanced concepts, we've got you covered
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="scroll-reveal bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="h-40 bg-gradient-to-r from-blue-400 to-blue-600 flex items-center justify-center">
                <h3 className="text-2xl font-bold text-white">Beginner</h3>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Crypto Fundamentals</h4>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-gray-700 dark:text-gray-300">
                    <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    What is Blockchain?
                  </li>
                  <li className="flex items-center text-gray-700 dark:text-gray-300">
                    <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    Bitcoin Explained
                  </li>
                  <li className="flex items-center text-gray-700 dark:text-gray-300">
                    <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    Setting Up a Wallet
                  </li>
                </ul>
                <Link href="/crypto-basics" className="inline-flex items-center font-medium text-blue-600 dark:text-blue-400 hover:underline">
                  Get Started <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="scroll-reveal bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="h-40 bg-gradient-to-r from-purple-400 to-purple-600 flex items-center justify-center">
                <h3 className="text-2xl font-bold text-white">Intermediate</h3>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Expanding Knowledge</h4>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-gray-700 dark:text-gray-300">
                    <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    Smart Contracts
                  </li>
                  <li className="flex items-center text-gray-700 dark:text-gray-300">
                    <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    DeFi Concepts
                  </li>
                  <li className="flex items-center text-gray-700 dark:text-gray-300">
                    <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    NFTs Explained
                  </li>
                </ul>
                <Link href="/crypto-basics" className="inline-flex items-center font-medium text-blue-600 dark:text-blue-400 hover:underline">
                  Explore Topics <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="scroll-reveal bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="h-40 bg-gradient-to-r from-indigo-400 to-indigo-600 flex items-center justify-center">
                <h3 className="text-2xl font-bold text-white">Advanced</h3>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Deep Dive</h4>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-gray-700 dark:text-gray-300">
                    <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    Layer 2 Solutions
                  </li>
                  <li className="flex items-center text-gray-700 dark:text-gray-300">
                    <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    Tokenomics Analysis
                  </li>
                  <li className="flex items-center text-gray-700 dark:text-gray-300">
                    <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    Interoperability
                  </li>
                </ul>
                <Link href="/crypto-basics" className="inline-flex items-center font-medium text-blue-600 dark:text-blue-400 hover:underline">
                  Learn Advanced <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center scroll-reveal">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Stay Updated
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
              Get the latest crypto news, updates, and insights delivered to your inbox
            </p>
            <form className="flex flex-col sm:flex-row gap-3 sm:gap-0">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-5 py-3 rounded-md sm:rounded-r-none flex-grow focus:outline-none focus:ring-2 focus:ring-blue-500 border border-gray-300 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
                required
              />
              <button 
                type="submit"
                className="px-6 py-3 bg-blue-600 text-white rounded-md sm:rounded-l-none hover:bg-blue-700 transition-colors font-medium"
              >
                Subscribe
              </button>
            </form>
            <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}