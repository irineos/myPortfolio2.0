import React from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import './ProjectDetail.css'
import IonIcon from '../IonIcon'

function ProjectDetail({ project, onBack, onNext, onPrevious }) {
  if (!project) {
    return <div>Loading project...</div>
  }

  return (
    <article className="project-detail">
      <header className="project-detail-header">
        <button className="back-button" onClick={onBack}>
          <IonIcon name="arrow-back"></IonIcon>
          Back to Portfolio
        </button>
        
        <div className="project-navigation">
          {onPrevious && (
            <button className="nav-button prev-button" onClick={onPrevious}>
              <IonIcon name="chevron-back"></IonIcon>
              Previous
            </button>
          )}
          {onNext && (
            <button className="nav-button next-button" onClick={onNext}>
              Next
              <IonIcon name="chevron-forward"></IonIcon>
            </button>
          )}
        </div>
      </header>

      <div className="project-detail-content">
        <div className="project-hero">
          <img 
            src={project.image} 
            alt={project.title} 
            className="project-hero-image"
          />
          <div className="project-hero-info">
            <h1 className="project-title">{project.title}</h1>
            <p className="project-tag">{project.tag}</p>
            <p className="project-description">{project.description}</p>
            
            <div className="project-links">
              {project.links?.map((link, index) => (
                <a 
                  key={index}
                  href={link.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  <IonIcon name={link.icon}></IonIcon>
                  {link.icon === 'logo-github' ? 'View Code' : 
                   link.icon === 'globe' ? 'Live Demo' : 'View Project'}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="project-details-section">
          <div className="markdown-content">
            {project.details ? (
              <div dangerouslySetInnerHTML={{ __html: project.details.replace(/\\"/g, '"').replace(/\\n/g, '\n').replace(/\\t/g, '\t').replace(/\\r/g, '\r') }} />
            ) : (
              <ReactMarkdown 
                remarkPlugins={[remarkGfm]}
              >
                {`
## About ${project.title}

${project.description}

### Technologies Used
- ${project.tag}

### Features
- Modern and responsive design
- Clean code architecture
- User-friendly interface

### Getting Started
Visit the repository link above to see the source code and setup instructions.
                `}
              </ReactMarkdown>
            )}
          </div>
        </div>
      </div>
    </article>
  )
}

export default ProjectDetail
