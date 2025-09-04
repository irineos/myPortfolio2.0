'use client'

import React, { useState } from 'react'

// Import your existing components
import Profile from './Profile/Profile'
import Navbar from './Navbar/Navbar'
import Home from '../pages/Home/Home'
import Portfolio from '../pages/Portfolio/Portfolio'

// Import custom hooks
import { useGoogleAnalytics } from '../hooks/useGoogleAnalytics'

// Import CSS
import '../App.css'
import '../index.css'

export default function PortfolioApp({ profileData, projectsData, resumeData }) {
  const [page, setPage] = useState('home')
  const { trackPageView } = useGoogleAnalytics()

  const changePage = (pageName) => {
    setPage(pageName)
    trackPageView(pageName)
  }

  return (
    <main>
      <Profile profileData={profileData} />
      <div className="main-content">
        <Navbar page={page} changePage={changePage} />
        {page === 'home' ? (
          <Home resumeData={resumeData} />
        ) : (
          <Portfolio projectsData={projectsData} />
        )}
      </div>
    </main>
  )
}