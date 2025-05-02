import type { Metadata } from 'next'
import { Poppins, Montserrat } from 'next/font/google'
import '@/styles/globals.css'
import Header from '@/components/Nav'

const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: ['300', '400', '700']
})

const montserrat = Montserrat({
  variable: '--font-montserrat',
  subsets: ['latin'],
  weight: ['700']
})

export const metadata: Metadata = {
  title: 'UI Lib',
  description: 'Personal UI Lib'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body
        className={`w-full h-dvh md:mt-15 ${poppins.variable} ${montserrat.variable} antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  )
}
