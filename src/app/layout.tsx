import { Poppins } from 'next/font/google';
import { AlertProvider } from './components/ui/Alert';
import './globals.css';

const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export const metadata = {
  title: 'Nodalyn',
  description: 'Explore the world of cryptocurrencies with real-time data, educational resources, and market analysis.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.variable} antialiased min-h-screen`}>
          <AlertProvider>
            <main className="flex-grow pt-16">{children}</main>
          </AlertProvider>
      </body>
    </html>
  );
}