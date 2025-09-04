import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Irineos',
  description: 'Passionate Java Developer with 2 years of hands-on experience in building and maintaining high-quality software solutions.',
  keywords: ['Software Engineer', 'Java Developer', 'React', 'Next.js', 'Portfolio', 'Spring', 'Netty'],
  authors: [{ name: 'Irineos Kyritsis', url: 'https://github.com/irineos' }],
  creator: 'Irineos Kyritsis',
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico', sizes: '32x32' }
    ],
    apple: [
      { url: '/favicon.svg', type: 'image/svg+xml' }
    ]
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://irineos.github.io/myPortfolio2.0',
    title: 'Irineos',
    description: 'Passionate Java Developer with 2 years of hands-on experience in building and maintaining high-quality software solutions.',
    siteName: 'Irineos Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Irineos',
    description: 'Passionate Java Developer with 2 years of hands-on experience in building and maintaining high-quality software solutions.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Ionicons for your existing icons */}
        <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js" async></script>
        <script src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js" async></script>
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}