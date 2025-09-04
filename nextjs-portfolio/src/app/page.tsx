import { Metadata } from 'next'
import PortfolioApp from '@/components/PortfolioApp'
import { getStaticProfileData, getStaticProjectsData, getStaticResumeData } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Irineos',
  description: 'Passionate Java Developer with 2 years of hands-on experience in building and maintaining high-quality software solutions.',
  keywords: ['Software Engineer', 'Java Developer', 'React', 'Next.js', 'Portfolio'],
  authors: [{ name: 'Irineos Kyritsis' }],
  openGraph: {
    title: 'Irineos',
    description: 'Passionate Java Developer with 2 years of hands-on experience in building and maintaining high-quality software solutions.',
    type: 'website',
    locale: 'en_US',
  },
}

export default async function HomePage() {
  // Fetch data at build time for static generation
  const profileData = await getStaticProfileData()
  const projectsData = await getStaticProjectsData()
  const resumeData = await getStaticResumeData()

  return (
    <PortfolioApp 
      profileData={profileData}
      projectsData={projectsData}
      resumeData={resumeData}
    />
  )
}