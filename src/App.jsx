import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Services from './pages/Services'
import About from './pages/About'
import Gallery from './pages/Gallery'
import Contact from './pages/Contact'
import Booking from './pages/Booking'

export default function App() {
  const getInitialPage = () => {
    const hash = window.location.hash.replace('#', '').toLowerCase()
    if (['home', 'services', 'about', 'gallery', 'contact', 'booking'].includes(hash)) {
      return hash
    }
    return 'home'
  }

  const [currentPage, setCurrentPage] = useState(getInitialPage)

  const handleNavigate = (page) => {
    setCurrentPage(page)
    window.location.hash = page
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '').toLowerCase()
      if (['home', 'services', 'about', 'gallery', 'contact', 'booking'].includes(hash)) {
        setCurrentPage(hash)
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }
    }

    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  const renderPage = () => {
    switch (currentPage) {
      case 'services':
        return <Services onNavigate={handleNavigate} />
      case 'about':
        return <About onNavigate={handleNavigate} />
      case 'gallery':
        return <Gallery onNavigate={handleNavigate} />
      case 'contact':
        return <Contact onNavigate={handleNavigate} />
      case 'booking':
        return <Booking onNavigate={handleNavigate} />
      case 'home':
      default:
        return <Home onNavigate={handleNavigate} />
    }
  }

  return (
    <div className="min-h-screen flex flex-col bg-surface font-body-md text-body-md text-on-surface antialiased selection:bg-secondary-container selection:text-on-secondary-container">
      <Header currentPage={currentPage} setCurrentPage={handleNavigate} />
      <div className="flex-grow">
        {renderPage()}
      </div>
      <Footer onNavigate={handleNavigate} />
    </div>
  )
}
