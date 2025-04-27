import type { Metadata } from "next";  
import { Poppins } from "next/font/google";
import { AlertProvider } from './components/ui/Alert'
import { ThemeProvider } from './contexts/ThemeContext'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Nodalyn",
  description: "Explore the world of cryptocurrencies with real-time data, educational resources, and market analysis.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.variable} antialiased min-h-screen flex flex-col bg-white dark:bg-gray-900 text-gray-900 dark:text-white`}>
        <ThemeProvider>
          <AlertProvider>
            <Header />
            <main className="flex-grow pt-16">{children}</main>
            <Footer />
          </AlertProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}