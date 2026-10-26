import React, { useState } from 'react'

export default function Header({ currentPage, setCurrentPage }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'about', label: 'About Us' },
    { id: 'contact', label: 'Contact' },
  ]

  const handleNav = (id) => {
    setCurrentPage(id)
    setMobileMenuOpen(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-surface/90 backdrop-blur-md shadow-[0_1px_8px_rgba(0,0,0,0.04)] transition-all">
      <div className="h-20 max-w-[1440px] mx-auto px-margin lg:px-margin-desktop flex items-center justify-between">
        {/* Brand Logo */}
        <button 
          onClick={() => handleNav('home')} 
          className="flex items-center gap-space-md text-left focus:outline-none group"
        >
          <span className="font-headline-sm text-headline-sm uppercase text-on-surface tracking-wider font-normal group-hover:text-secondary transition-colors">
            ZENZA
          </span>
          <span className="hidden sm:inline-block font-label-caps text-label-caps uppercase text-secondary tracking-widest pl-space-xs">
            HAIR STUDIO
          </span>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-gutter-desktop">
          {navItems.map((item) => {
            const isActive = currentPage === item.id
            return (
              <button
                key={item.id}
                onClick={() => handleNav(item.id)}
                className={`font-label-caps text-label-caps uppercase tracking-widest transition-colors py-2 relative ${
                  isActive 
                    ? 'text-on-surface font-semibold' 
                    : 'text-on-surface-variant hover:text-on-surface'
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-secondary animate-pulse" />
                )}
              </button>
            )
          })}
        </nav>

        {/* Action Button & Profile */}
        <div className="flex items-center gap-space-md">
          <button
            onClick={() => handleNav('booking')}
            className="bg-secondary text-on-secondary px- space-md py-space-sm font-label-caps text-label-caps uppercase tracking-widest hover:bg-on-surface transition-all shadow-sm active:scale-95 px-5 py-2.5"
          >
            Book Appointment
          </button>
          
          <img
            alt="Profile avatar"
            className="w-8 h-8 rounded-full object-cover border border-secondary/20 hidden sm:block"
            src="https://lh3.googleusercontent.com/aida/AEtjO1Ws-VfcQHvzwgnASt0BceRTtq33K09FtBFabXV8mPKO3lZ_vfHH0_Wu0uaWoeAAn0osTY6ALwXb-RWWXdeuFnAxL7l3UVxjg7r9JnkZqGtMHp6rMmC1Usiii9pi93hKolPwcOonwmfBLX-al0b4OOwSBgAVevT-Wfs6rF51jMsS1-jIx2ctbkbku70-VPUqqmuGA8kwdiqv_G-GJbF_XMhpg4dCTjyEBzwY8KwH_3KbU98jNoKSQnsRcYCK"
          />

          {/* Mobile Menu Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-on-surface hover:text-secondary focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            <span className="material-symbols-outlined text-2xl">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-surface border-t border-surface-container px-margin py-6 shadow-xl space-y-4 animate-fadeIn">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNav(item.id)}
              className={`block w-full text-left py-2.5 font-label-caps text-label-caps uppercase tracking-widest transition-colors ${
                currentPage === item.id ? 'text-secondary font-bold' : 'text-on-surface'
              }`}
            >
              {item.label}
            </button>
          ))}
          <div className="pt-2 border-t border-surface-container">
            <button
              onClick={() => handleNav('booking')}
              className="w-full bg-secondary text-on-secondary py-3 font-label-caps text-label-caps uppercase tracking-widest text-center block"
            >
              Book Consultation
            </button>
          </div>
        </div>
      )}
    </header>
  )
}
