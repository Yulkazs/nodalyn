import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { AlertProvider } from '@/app/components/ui/Alert'
import { ThemeProvider } from '@/app/contexts/ThemeContext'
import Header from '@/app/components/layout/Header'
import Footer from '@/app/components/layout/Footer'
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "CryptoVision | Cryptocurrency Information & Statistics",
  description: "Explore the world of cryptocurrencies with real-time data, educational resources, and market analysis.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased min-h-screen flex flex-col`}>
        <ThemeProvider>
          <AlertProvider>
            <Header />
            <main className="flex-grow">{children}</main>
            <Footer />
          </AlertProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}