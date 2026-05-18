import type { Metadata } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/layout/Navbar'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-heading',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
})

export const metadata: Metadata = {
  title: 'Academic Website',
  description: 'Personal academic website',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${playfair.variable} ${inter.variable} bg-[#FAFAF8] dark:bg-[#0A0A0A] text-[#0A0A0A] dark:text-[#FAFAF8] font-body`}>
        <Navbar />
        <div style={{ paddingTop: 'var(--navbar-height)' }}>
          {children}
        </div>
      </body>
    </html>
  )
}
