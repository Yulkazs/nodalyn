'use client'

import Link from 'next/link'
import { Twitter, Github, Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <span className="text-xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">CryptoVision</span>
            </Link>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Empowering you with cryptocurrency knowledge and insights
            </p>
            <div className="flex space-x-4">
              <a href="https://twitter.com" className="text-gray-500 hover:text-blue-500 dark:hover:text-blue-400" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="https://github.com" className="text-gray-500 hover:text-gray-900 dark:hover:text-white" aria-label="GitHub">
                <Github size={20} />
              </a>
              <a href="https://linkedin.com" className="text-gray-500 hover:text-blue-700 dark:hover:text-blue-400" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="https://discord.com" className="text-gray-500 hover:text-indigo-600 dark:hover:text-indigo-400" aria-label="Discord">
              </a>
            </div>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/crypto-basics" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
                  Crypto Basics
                </Link>
              </li>
              <li>
                <Link href="/glossary" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
                  Glossary
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Data */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-4">Data</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/market" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
                  Market Data
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/news" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
                  News
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
          <p className="text-center text-gray-500 dark:text-gray-400 text-sm">
            © {new Date().getFullYear()} CryptoVision. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}