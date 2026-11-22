import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

const siteUrl = 'https://irineosk.com'
const name = 'Irineos Kyritsis'
const jobTitle = 'Senior Software Engineer'
const description =
  'Irineos Kyritsis is a Senior Software Engineer in Athens with 5 years of experience building high-performance Java, Spring and microservices systems.'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${name} | ${jobTitle}`,
    template: `%s | ${name}`,
  },
  description,
  keywords: [
    'Irineos Kyritsis',
    'Eirinaios Kyritsis',
    'Senior Software Engineer',
    'Java Developer',
    'Backend Engineer',
    'Software Engineer Athens',
    'Java',
    'Spring',
    'Netty',
    'Microservices',
    'Distributed Systems',
    'Concurrency',
    'Performance Optimization',
    'Terraform',
    'Ansible',
    'React',
    'Next.js',
    'Portfolio',
  ],
  authors: [{ name, url: 'https://github.com/irineos' }],
  creator: name,
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico', sizes: '32x32' },
    ],
    apple: [{ url: '/favicon.svg', type: 'image/svg+xml' }],
  },
  openGraph: {
    type: 'profile',
    locale: 'en_US',
    url: siteUrl,
    title: `${name} | ${jobTitle}`,
    description,
    siteName: `${name} Portfolio`,
    firstName: 'Irineos',
    lastName: 'Kyritsis',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${name} | ${jobTitle}`,
    description,
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

// Structured data so Google can show you as a person (name, title, employer, profiles)
const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name,
  alternateName: 'Eirinaios Kyritsis',
  jobTitle,
  url: siteUrl,
  worksFor: { '@type': 'Organization', name: 'Netcompany' },
  alumniOf: { '@type': 'CollegeOrUniversity', name: 'University of Ioannina' },
  address: { '@type': 'PostalAddress', addressLocality: 'Athens', addressCountry: 'GR' },
  sameAs: [
    'https://github.com/irineos',
    'https://www.linkedin.com/in/irineos-kyritsis/',
  ],
  knowsAbout: [
    'Java',
    'Spring',
    'Netty',
    'Microservices',
    'Distributed Systems',
    'Concurrency',
    'Performance Optimization',
    'Infrastructure as Code',
  ],
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
