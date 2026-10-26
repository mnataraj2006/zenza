import React, { useState } from 'react'

export default function Footer({ onNavigate }) {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e) => {
    e.preventDefault()
    if (email) {
      setSubscribed(true)
      setEmail('')
      setTimeout(() => setSubscribed(false), 5000)
    }
  }

  return (
    <footer className="w-full bg-tertiary-container text-surface-bright pt-space-2xl pb-space-xl">
      <div className="max-w-[1440px] mx-auto px-margin lg:px-margin-desktop">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-gutter-desktop pb-space-2xl">
          
          {/* Brand Info & Newsletter */}
          <div className="lg:col-span-4 flex flex-col justify-between space-y-space-md">
            <div className="space-y-space-xs">
              <button 
                onClick={() => onNavigate('home')} 
                className="text-left font-headline-md text-headline-md tracking-wider text-surface-bright uppercase hover:text-secondary-fixed transition-colors"
              >
                ZENZA
              </button>
              <p className="font-label-caps text-label-caps uppercase tracking-widest text-secondary-fixed">
                Hair Studio
              </p>
            </div>
            
            <p className="font-body-lg text-body-lg italic text-tertiary-fixed-dim pr-space-lg">
              Where Artistry Meets Individuality.
            </p>

            <div className="pt-space-sm">
              <p className="font-label-caps text-label-caps uppercase tracking-widest text-secondary-fixed mb-space-xs">
                Exclusive Dispatches
              </p>
              {subscribed ? (
                <div className="bg-surface-container-lowest/10 p-3 text-secondary-fixed font-body-sm">
                  ✓ Welcome to the private circle. Check your inbox shortly.
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex items-center bg-surface-container-lowest/5 p-space-xs max-w-sm border border-surface-container-lowest/10">
                  <input
                    className="bg-transparent font-body-sm text-body-sm text-surface-bright placeholder:text-outline-variant px-space-sm py-space-xs focus:outline-none flex-grow"
                    placeholder="Enter your email address"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <button
                    className="bg-secondary-fixed text-on-secondary-fixed font-label-caps text-label-caps uppercase tracking-widest px-space-md py-space-xs hover:bg-surface-bright transition-colors"
                    type="submit"
                  >
                    Join
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Studio Hours */}
          <div className="lg:col-span-3 space-y-space-md">
            <p className="font-label-caps text-label-caps uppercase tracking-widest text-secondary-fixed">
              Studio Hours
            </p>
            <div className="space-y-space-xs font-body-sm text-body-sm text-tertiary-fixed-dim">
              <div className="flex justify-between py-space-xs border-b border-surface-container-lowest/5">
                <span>Monday – Saturday</span>
                <span className="text-surface-bright">10:00 AM – 9:00 PM</span>
              </div>
              <div className="flex justify-between py-space-xs border-b border-surface-container-lowest/5">
                <span>Sunday</span>
                <span className="text-surface-bright">11:00 AM – 7:00 PM</span>
              </div>
              <p className="font-caption text-caption text-outline-variant pt-space-xs">
                Private atelier reservations available upon consultation.
              </p>
            </div>
          </div>

          {/* Ateliers */}
          <div className="lg:col-span-3 space-y-space-md">
            <p className="font-label-caps text-label-caps uppercase tracking-widest text-secondary-fixed">
              Ateliers
            </p>
            <div className="space-y-space-md font-body-sm text-body-sm text-tertiary-fixed-dim">
              <div className="space-y-space-xs">
                <p className="font-title-md text-title-md text-surface-bright">Mumbai Atelier</p>
                <p>42 Altamount Road, Cumballa Hill</p>
                <p>Mumbai, Maharashtra 400026</p>
                <p className="text-surface-bright pt-space-xs">+91 22 2380 4411</p>
              </div>
              <div className="space-y-space-xs">
                <p className="font-title-md text-title-md text-surface-bright">Delhi Atelier</p>
                <p>The Manor, 77 Friends Colony West</p>
                <p>New Delhi, Delhi 110065</p>
                <p className="text-surface-bright pt-space-xs">+91 11 4105 8820</p>
              </div>
            </div>
          </div>

          {/* Connect */}
          <div className="lg:col-span-2 space-y-space-md">
            <p className="font-label-caps text-label-caps uppercase tracking-widest text-secondary-fixed">
              Connect
            </p>
            <div className="flex flex-col space-y-space-sm font-label-caps text-label-caps uppercase tracking-widest text-tertiary-fixed-dim">
              <a
                className="hover:text-surface-bright transition-colors flex items-center gap-space-xs"
                href="https://wa.me/912223804411"
                target="_blank"
                rel="noreferrer"
              >
                <span className="material-symbols-outlined text-[16px]">chat</span>
                WhatsApp Concierge
              </a>
              <a
                className="hover:text-surface-bright transition-colors flex items-center gap-space-xs"
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
              >
                <span className="material-symbols-outlined text-[16px]">photo_camera</span>
                Instagram Journal
              </a>
              <a
                className="hover:text-surface-bright transition-colors flex items-center gap-space-xs"
                href="mailto:atelier@zenzastudio.com"
              >
                <span className="material-symbols-outlined text-[16px]">mail</span>
                atelier@zenzastudio.com
              </a>
              <button
                onClick={() => onNavigate('contact')}
                className="text-left hover:text-surface-bright transition-colors flex items-center gap-space-xs pt-2"
              >
                <span className="material-symbols-outlined text-[16px]">location_on</span>
                Directions & Concierge
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-space-lg flex flex-col md:flex-row items-center justify-between font-caption text-caption text-outline-variant gap-space-md border-t border-surface-container-lowest/10">
          <p>© 2025 ZENZA Hair Studio Private Limited. All privileges reserved.</p>
          <div className="flex items-center gap-space-lg font-label-caps text-label-caps uppercase tracking-widest">
            <button onClick={() => onNavigate('about')} className="hover:text-surface-bright transition-colors">
              Our Story
            </button>
            <button onClick={() => onNavigate('services')} className="hover:text-surface-bright transition-colors">
              Menu
            </button>
            <button onClick={() => onNavigate('booking')} className="hover:text-surface-bright transition-colors">
              Reservation
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
