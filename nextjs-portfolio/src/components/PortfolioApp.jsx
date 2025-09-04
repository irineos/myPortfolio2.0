'use client'

import React, { useState } from 'react'

// Import your existing components
import Profile from './Profile/Profile'
import Navbar from './Navbar/Navbar'
import Home from '../pages/Home/Home'
import Portfolio from '../pages/Portfolio/Portfolio'
import ProjectDetail from './ProjectDetail/ProjectDetail'

// Import custom hooks
import { useGoogleAnalytics } from '../hooks/useGoogleAnalytics'

// Import CSS
import '../App.css'
import '../index.css'

export default function PortfolioApp({ profileData, projectsData, resumeData }) {
  const [page, setPage] = useState('home')
  const [selectedProject, setSelectedProject] = useState(null)
  const { trackPageView } = useGoogleAnalytics()

  const changePage = (pageName) => {
    setPage(pageName)
    setSelectedProject(null) // Clear selected project when changing pages
    trackPageView(pageName)
  }

  const openProjectDetail = (project) => {
    setSelectedProject(project)
    trackPageView(`project-${project.title}`)
  }

  const closeProjectDetail = () => {
    setSelectedProject(null)
    trackPageView('portfolio')
  }

  const navigateProject = (direction) => {
    if (!projectsData?.projects || !selectedProject) return
    
    const currentIndex = projectsData.projects.findIndex(p => p.title === selectedProject.title)
    let nextIndex
    
    if (direction === 'next') {
      nextIndex = (currentIndex + 1) % projectsData.projects.length
    } else {
      nextIndex = currentIndex === 0 ? projectsData.projects.length - 1 : currentIndex - 1
    }
    
    const nextProject = projectsData.projects[nextIndex]
    setSelectedProject(nextProject)
    trackPageView(`project-${nextProject.title}`)
  }

  return (
    <main>
      <Profile profileData={profileData} />
      <div className="main-content">
        {selectedProject ? (
          <ProjectDetail 
            project={selectedProject}
            onBack={closeProjectDetail}
            onNext={() => navigateProject('next')}
            onPrevious={() => navigateProject('previous')}
          />
        ) : (
          <>
            <Navbar page={page} changePage={changePage} />
            {page === 'home' ? (
              <Home resumeData={resumeData} />
            ) : (
              <Portfolio 
                projectsData={projectsData} 
                onProjectClick={openProjectDetail}
              />
            )}
          </>
        )}
      </div>
    </main>
  )
}