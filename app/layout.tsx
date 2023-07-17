

// custom components
import { Footer, Navbar } from '@/components'

// styles
import './globals.css'

// fonts
import { Urbanist } from 'next/font/google'
const font = Urbanist({ subsets: ['latin'] })

// metadata
import type { Metadata } from 'next'

// providers
import {ModalProvider, ToasterProvider} from '@/providers'

export const metadata: Metadata = {
  title: 'Store App',
  description: 'e-commerce app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ModalProvider />
        <ToasterProvider />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
