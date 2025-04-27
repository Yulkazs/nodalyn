'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Chart from '@/app/components/ui/Chart';
import { ArrowRight, TrendingUp, Shield, BookOpen, Zap } from 'lucide-react';
import { animateHeroElements, animateCards, animateChartEntrance, scrollReveal } from './utils/animations';
import ErrorBoundary from '@/app/components/ErrorBoundary';

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
};

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
};

export default function Home() {
  const chartRef = useRef<HTMLDivElement>(null);
  const [hasChartError, setHasChartError] = useState(false);

  useEffect(() => {
    try {
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
    } catch (error) {
      console.error('Error during animations setup:', error);
    }
  }, []);

  // Error handling for Chart Component
  const handleChartError = () => {
    setHasChartError(true);
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b to-blue-80 dark:from-gray-900 dark:to-gray-800 py-20 md:py-32">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-300 dark:bg-purple-900 rounded-full opacity-30 blur-3xl"></div>
          <div className="absolute top-40 -left-20 w-60 h-60 bg-blue-300 dark:bg-blue-900 rounded-full opacity-30 blur-3xl"></div>
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
              <p className="hero-subtitle text-xl md:text-1xl text-gray-300 light:text-gray-800 mb-8">
                Real-time crypto currency data, insights, and educational resources in one place.
              </p>
              <div className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
                <Link
                  href="/market"
                  className="hero-cta inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-black bg-white hover:bg-gray-100 hover:text-black shadow-md transition-colors"
                >
                  Explore Markets <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  href="/crypto-basics"
                  className="hero-cta inline-flex items-center justify-center px-6 py-3 border border-gray-300 dark:border-gray-700 text-base font-medium rounded-md text-black bg-white hover:bg-gray-100 hover:text-black shadow-md transition-colors"
                >
                  Learn Basics
                </Link>
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <div className="hero-image relative mx-auto max-w-lg">
                <div className="rounded-lg shadow-xl dark:bg-gray-800 p-4 transform rotate-1">
                  {/* Wrap the Chart in an ErrorBoundary */}
                  <ErrorBoundary>
                    <Chart
                      type="line"
                      data={priceData}
                      height={300}
                      title="Bitcoin & Ethereum Price Trends (USD)"
                    />
                  </ErrorBoundary>
                </div>
                <div className="absolute -z-10 -right-4 -bottom-4 w-full h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg transform -rotate-2 opacity-50"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Home Page */}
      <section className="py-20 dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 scroll-reveal">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Dive into the World of Crypto Currencies
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
      <section ref={chartRef} className="py-20 dark:bg-gray-500">
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
            <div className="chart-container dark:bg-gray-900 rounded-lg shadow-lg p-6">
              <Chart
                type="line"
                data={priceData}
                height={400}
                title="Price History (USD)"
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
              <Link href="/crypto-basics" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-black hover:bg-blue-50 shadow-md transition-colors">
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
      <section className="py-20 dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 scroll-reveal">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Learn Crypto - From Beginner to Expert
            </h2>
            <p className="max-w-2xl mx-auto text-xl text-gray-600 dark:text-gray-400">
              Take your crypto knowledge to the next level with curated educational content.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Beginner Section */}
            <div className="scroll-reveal bg-gray-50 dark:bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Beginner</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                New to crypto? Learn the basics from the ground up.
              </p>
              <Link href="/crypto-basics" className="text-blue-600 dark:text-blue-400 hover:text-blue-800">
                Start with the Basics <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>

            {/* Intermediate Section */}
            <div className="scroll-reveal bg-gray-50 dark:bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Intermediate</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Dive deeper into blockchain technology and its applications.
              </p>
              <Link href="/intermediate" className="text-blue-600 dark:text-blue-400 hover:text-blue-800">
                Explore Intermediate Content <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>

            {/* Advanced Section */}
            <div className="scroll-reveal bg-gray-50 dark:bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Advanced</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Take your expertise to the next level with deep technical insights and advanced topics.
              </p>
              <Link href="/advanced" className="text-blue-600 dark:text-blue-400 hover:text-blue-800">
                Master Advanced Concepts <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}