import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter'
})

export const metadata: Metadata = {
  title: 'Capacitación con Hernán Ferraro | Club Atlético Liniers',
  description: 'Capacitación profesional de vóley con Hernán Ferraro en Bahía Blanca. Experiencia intensiva para entrenadores y profesores de educación física. Cupos limitados.',
  keywords: ['vóley', 'volleyball', 'capacitación', 'Hernán Ferraro', 'Bahía Blanca', 'entrenadores', 'deporte'],
  authors: [{ name: 'Club Atlético Liniers' }],
  openGraph: {
    title: 'Capacitación con Hernán Ferraro | Club Atlético Liniers',
    description: 'Capacitación profesional de vóley con Hernán Ferraro en Bahía Blanca. Experiencia intensiva para entrenadores y profesores de educación física.',
    type: 'website',
    locale: 'es_AR',
    siteName: 'Capacitación Hernán Ferraro',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Capacitación con Hernán Ferraro',
    description: 'Capacitación profesional de vóley en Bahía Blanca. Cupos limitados.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport: Viewport = {
  themeColor: '#050505',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${inter.variable} bg-background`}>
      <body className="font-sans antialiased bg-background text-foreground overflow-x-hidden">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
