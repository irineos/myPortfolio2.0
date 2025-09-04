import { useEffect, useState } from 'react'

export const useGoogleAnalytics = () => {
  const [gaInitialized, setGaInitialized] = useState(false)

  useEffect(() => {
    const initializeGA = async () => {
      if (
        typeof window !== 'undefined' && 
        process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID && 
        !gaInitialized
      ) {
        try {
          const { default: ReactGA } = await import('react-ga4')
          ReactGA.initialize(process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID, {
            debug: process.env.NODE_ENV === 'development'
          })
          setGaInitialized(true)
        } catch (error) {
          console.warn('Failed to initialize Google Analytics:', error)
        }
      }
    }

    initializeGA()
  }, [gaInitialized])

  const trackPageView = async (pageName) => {
    if (
      typeof window !== 'undefined' && 
      gaInitialized && 
      process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID
    ) {
      try {
        const { default: ReactGA } = await import('react-ga4')
        ReactGA.send({
          hitType: 'pageview',
          page: `/${pageName}`,
          title: `${pageName.charAt(0).toUpperCase() + pageName.slice(1)} - Portfolio`
        })
      } catch (error) {
        console.warn('Failed to track page view:', error)
      }
    }
  }

  const trackEvent = async (action, category, label, value) => {
    if (
      typeof window !== 'undefined' && 
      gaInitialized && 
      process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID
    ) {
      try {
        const { default: ReactGA } = await import('react-ga4')
        ReactGA.event(action, {
          event_category: category,
          event_label: label,
          value: value
        })
      } catch (error) {
        console.warn('Failed to track event:', error)
      }
    }
  }

  return {
    gaInitialized,
    trackPageView,
    trackEvent
  }
}
