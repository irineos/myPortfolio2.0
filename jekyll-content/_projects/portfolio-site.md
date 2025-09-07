---
tag: 'Next.js, React, Jekyll, GitHub Actions'
image: '/assets/images/projects/portfolio-website.png'
title: 'Modern Portfolio Website'
description: "A hybrid portfolio built with Jekyll CMS and Next.js, automatically deployed to GitHub Pages"
order: 8
links:
  - link: 'https://github.com/irineos/myPortfolio2.0'
    icon: 'logo-github'
  - link: 'https://irineosk.com'
    icon: 'globe'
---

## Modern Portfolio Website

A sophisticated, hybrid portfolio website that combines the power of Jekyll for content management with Next.js for modern frontend development. This project showcases a complete CI/CD pipeline with automated deployment to GitHub Pages, demonstrating modern web development practices and DevOps workflows.

### 🚀 Project Overview

This portfolio represents a complete evolution from a traditional static site to a modern, maintainable web application. The architecture separates content management from presentation, allowing for easy updates while maintaining a professional, responsive design.

### ⚡ Key Features

- **Hybrid Architecture**: Jekyll for content management, Next.js for frontend
- **Automated Deployment**: GitHub Actions CI/CD pipeline
- **Content Management**: Markdown-based project and resume management
- **Responsive Design**: Mobile-first approach with modern CSS
- **Performance Optimized**: Static site generation with Next.js
- **SEO Optimized**: Meta tags, sitemap, and structured data
- **Custom Domain**: Professional deployment with custom domain

### 🏗️ Technical Architecture

```
Portfolio Architecture:
├── jekyll-content/          # Content management system
│   ├── _data/              # Profile and resume data
│   ├── _projects/          # Project markdown files
│   └── _site/              # Generated JSON outputs
├── nextjs-portfolio/       # Frontend application
│   ├── src/components/     # React components
│   ├── src/pages/          # Page components
│   └── public/             # Static assets
└── .github/workflows/      # CI/CD automation
```

### 🔧 Technology Stack

#### Backend & Content Management
- **Jekyll**: Static site generator for content management
- **YAML**: Data structure for profile and resume information
- **Markdown**: Project documentation and content
- **Ruby/Bundler**: Dependency management for Jekyll

#### Frontend & User Interface
- **Next.js 15**: React framework with App Router
- **React 19**: Modern React with hooks and functional components
- **CSS3**: Custom styling with modern features
- **Ionicons**: Icon library for UI elements
- **TypeScript**: Type-safe development

#### DevOps & Deployment
- **GitHub Actions**: Automated CI/CD pipeline
- **GitHub Pages**: Static site hosting
- **Custom Domain**: Professional domain configuration
- **Automated Builds**: Jekyll → Next.js → Deploy workflow

### 📋 Development Workflow

#### Content Management Process
1. **Add New Projects**: Create markdown files in `_projects/`
2. **Update Profile**: Edit YAML files in `_data/`
3. **Commit Changes**: Push to main branch
4. **Automated Build**: GitHub Actions triggers deployment
5. **Live Site**: Changes appear automatically

#### Build Pipeline
```yaml
# GitHub Actions Workflow
1. Build Jekyll Content → Generate JSON files
2. Copy Assets → Transfer to Next.js public folder
3. Install Dependencies → npm ci for Next.js
4. Build Next.js → Static site generation
5. Deploy to GitHub Pages → Automatic deployment
```

### 🎨 Design & User Experience

#### Modern UI Components
- **Responsive Navigation**: Mobile-friendly navigation system
- **Project Showcase**: Interactive project gallery with filtering
- **Timeline View**: Professional experience and education timeline
- **Contact Integration**: Direct links to GitHub, LinkedIn, and email
- **Dark Theme**: Professional dark color scheme

#### Performance Optimizations
- **Static Generation**: Pre-built pages for fast loading
- **Image Optimization**: Optimized project screenshots
- **Code Splitting**: Efficient JavaScript loading
- **CSS Optimization**: Minimal, focused stylesheets

### 🔍 Technical Challenges Solved

#### Hydration Mismatch Resolution
- **Problem**: Server-side rendering conflicts with client-side hydration
- **Solution**: Custom IonIcon component with client-side only rendering
- **Result**: Eliminated React hydration warnings

#### GitHub Pages Asset Loading
- **Problem**: 404 errors for static assets on custom domain
- **Solution**: Removed basePath configuration and added .nojekyll file
- **Result**: Perfect asset loading on custom domain

#### Automated Content Pipeline
- **Problem**: Manual content updates and deployment
- **Solution**: Jekyll → Next.js → GitHub Pages automation
- **Result**: Seamless content management workflow

### 📊 Project Statistics

- **Lines of Code**: 2,000+ lines across multiple technologies
- **Components**: 15+ React components
- **Pages**: 3 main sections (Home, Portfolio, Resume)
- **Projects**: 8+ showcased projects
- **Build Time**: ~2 minutes automated deployment
- **Performance**: 95+ Lighthouse score

### 🚀 Deployment Architecture

#### GitHub Pages Configuration
- **Source**: GitHub Actions (not Jekyll)
- **Custom Domain**: irineosk.com with proper DNS configuration
- **SSL Certificate**: Automatic HTTPS with GitHub Pages
- **CDN**: Global content delivery network

#### CI/CD Pipeline Features
- **Smart Triggers**: Only builds when relevant files change
- **Parallel Jobs**: Ruby and Node.js setup in parallel
- **Caching**: Dependency caching for faster builds
- **Error Handling**: Comprehensive error reporting

### 💡 Key Learnings

#### Technical Skills Developed
- **Hybrid Architecture**: Combining different technologies effectively
- **CI/CD Pipelines**: Automated deployment workflows
- **Performance Optimization**: Static site generation and optimization
- **Problem Solving**: Debugging complex deployment issues

#### DevOps Practices
- **Infrastructure as Code**: GitHub Actions workflow configuration
- **Automated Testing**: Build validation and error checking
- **Version Control**: Git workflow for content and code
- **Monitoring**: Build logs and deployment status tracking

### 🎯 Project Impact

This portfolio project demonstrates:
- **Full-Stack Development**: Backend content management and frontend development
- **DevOps Expertise**: Automated deployment and CI/CD practices
- **Modern Web Technologies**: Latest React, Next.js, and deployment practices
- **Problem-Solving Skills**: Complex technical challenges resolved
- **Professional Presentation**: Clean, modern, and responsive design

The project serves as both a professional portfolio and a technical demonstration of modern web development practices, showcasing the ability to build, deploy, and maintain complex web applications.
