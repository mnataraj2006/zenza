import React, { useState } from 'react'

export default function Booking({ onNavigate }) {
  // 1. Locale State
  const [locale, setLocale] = useState('Mumbai') // 'Mumbai' or 'Delhi'
  const [currentStep, setCurrentStep] = useState(1)

  // 2. Services State & Catalog
  const allServices = [
    {
      id: 'cut-director',
      name: 'Atelier Director Cut',
      cat: 'haircut',
      duration: 75,
      price: 4500,
      badge: 'Haircut & Styling',
      desc: 'Architectural precision scissor sculpting, scalp detox cleanse, botanical steam rinse, and bespoke editorial blowout.'
    },
    {
      id: 'balayage',
      name: 'Bespoke Balayage',
      cat: 'coloring',
      duration: 180,
      price: 12500,
      badge: 'Master Coloring',
      desc: 'French freehand clay lightening, high-dimension tonal contouring, bond-repair gloss bath, and micro-infusion glaze.'
    },
    {
      id: 'caviar-spa',
      name: 'Caviar Scalp Spa',
      cat: 'scalp',
      duration: 60,
      price: 5200,
      badge: 'Scalp Spa',
      desc: 'Micro-exfoliation gommage, mimetic caviar pearls with hyaluronic acid, 20-minute Shiatsu scalp acupressure ritual.'
    },
    {
      id: 'keratin-gold',
      name: 'Silk Bio-Keratin',
      cat: 'texture',
      duration: 150,
      price: 9800,
      badge: 'Texture Treatments',
      desc: 'Formaldehyde-free amino smoothing with pure hydrolyzed raw silk protein. Zero frizz with mirror-shine weightless flow.'
    },
    {
      id: 'bridal-couture',
      name: 'Haute Bridal Trial',
      cat: 'bridal',
      duration: 210,
      price: 18000,
      badge: 'Haute Bridal',
      desc: 'Comprehensive couture hair architecture trial, jewelry setting harmonization, customized veil anchor testing.'
    },
    {
      id: 'barber-shave',
      name: 'Royal Razor Ritual',
      cat: 'haircut',
      duration: 50,
      price: 3800,
      badge: 'Haircut & Styling',
      desc: 'Traditional Japanese feather razor contouring, hot sandalwood infused towel compression, and organic cold-pressed oil seal.'
    }
  ]

  const [activeCategory, setActiveCategory] = useState('all')
  const [selectedServices, setSelectedServices] = useState([
    allServices[0],
    allServices[1]
  ])

  // 3. Stylist State & Catalog
  const stylists = [
    {
      id: 'any',
      name: 'Any Available Master Artist',
      role: 'First Available Atelier Expert',
      sub: 'Recommended for schedule flexibility',
      icon: 'all_inclusive'
    },
    {
      id: 'elena',
      name: 'Elena Vance',
      role: 'Creative Director',
      sub: 'Creative Director • Ex-Vidal Sassoon',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBvM54Dtpq4eWrgcLr4vE7r50B6YS1DYDEN8XZSXihE-xXAJQTwEfAOTC_Jsyw3oxX18_xWC7ruHvJwPcJ9JrT3TRIv1Wx9xxszIXYQIwR7a7kr9jHFxD9fjI5ph_GMZmeDetsnJFT9flRgKhkPwCoNOWt8C652tUVhXuJBh7R4fVnpb3CIqYlGa2I4xRDimNF0IVj5_MyxGt0zgi7oULelCiA9EnbPnZlppNNW02gBhV4pX6KWjT7_-Q'
    },
    {
      id: 'marcus',
      name: 'Marcus Sterling',
      role: 'Head Colorist',
      sub: 'Head Colorist • Balayage Specialist',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCJm3_NrOkBJ__IofsGgCyCH-6Qsn2Eh7igGB0Yx8D6vKby6LqRcofxPbzJP3vZ078jV_65xCdLn1E21fNgTlrptafaWMr99yQag9yfon8LMb3Tli-_6JG3GTGzbYvV0bTsLA9A7QsbHsRqjPUYl0qudLZuhkvbVMTQ7P2j3TBL0egYdZDf1LR7tqXLw0644fo9qxwysSQNKZw1o6Tp5kmCPNBOR__1xhzPZqs8FBgQ3ZRqd4qu__d92g'
    },
    {
      id: 'kenneth',
      name: 'Kenneth Thorne',
      role: 'Master Barber',
      sub: 'Master Barber • Razor Architect',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB08DywMkZiNx76VMCsxj4hJgrRp-Aaw1-yWUmCUo2bBcP71J9jk_sMdCXKTVrEkQL9LqZlsW4iC68lgeKReOz8qJ4gDoYcQkTeJoc1DXzI-m7XsOe5p1FxjahqU9IvCaS5OQvyDX7EG6_sqhrYz1dWszVUEG6egwGsm_HipXTf2RNw7hykWyL2Wl-2WdbVSOaqS4GBOjop_g9S3-oW5OEMh3eHMM31GyH0cy3GwmJ9Iih8nyaGmf2oww'
    },
    {
      id: 'tara',
      name: 'Tara Sen',
      role: 'Senior Stylist',
      sub: 'Senior Stylist • Texture & Waves',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDmw6MsxCk-tLkHGE3wXuth6i-XZZrU0TNUTwEZul3EeoujP3QIQqSNIMIxCRN0dRSxlXraovP5GCB27h_25iuo5N-Pr7xZsaqRJS6c49tESZvh-d28C7_0op5kqQKaGcW-MkMv-exdzgUVFldDOiC3aOlMowOEuyf_XBk3ZWl-D3XAV-GHcljQq6916tCD8hsYQ4yTIUVrVkpY2rc9ewGQoRoI1H_Ed3933autI5whUg_7Rtst_2Lzdw'
    }
  ]
  const [selectedStylist, setSelectedStylist] = useState(stylists[0])

  // 4. Date & Time State
  const [selectedDay, setSelectedDay] = useState(14)
  const [selectedTime, setSelectedTime] = useState('02:30 PM')
  const [monthName, setMonthName] = useState('October 2025')

  // 5. Guest Dossier State
  const [guestName, setGuestName] = useState('Lady Ananya Singhania')
  const [guestPhone, setGuestPhone] = useState('+91 98200 44921')
  const [guestEmail, setGuestEmail] = useState('ananya.singhania@privatemail.com')
  const [patchTest, setPatchTest] = useState(true)
  const [quietChair, setQuietChair] = useState(false)
  const [specialNotes, setSpecialNotes] = useState('')

  // 6. Confirmation Modal
  const [isConfirmed, setIsConfirmed] = useState(false)
  const [bookingRef, setBookingRef] = useState('')

  // Calculations
  const subtotal = selectedServices.reduce((sum, s) => sum + s.price, 0)
  const totalDuration = selectedServices.reduce((sum, s) => sum + s.duration, 0)
  const gst = Math.round(subtotal * 0.18)
  const grandTotal = subtotal + gst
  const deposit = Math.round(grandTotal * 0.20)

  // Handlers
  const toggleService = (srv) => {
    const exists = selectedServices.some(s => s.id === srv.id)
    if (exists) {
      if (selectedServices.length === 1) {
        alert("Please maintain at least one treatment in your reservation.")
        return
      }
      setSelectedServices(selectedServices.filter(s => s.id !== srv.id))
    } else {
      setSelectedServices([...selectedServices, srv])
    }
  }

  const handleConfirm = () => {
    const ref = 'ZN-' + Math.floor(100000 + Math.random() * 900000)
    setBookingRef(ref)
    setIsConfirmed(true)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const jumpToStep = (step) => {
    setCurrentStep(step)
    const el = document.getElementById(`step-section-${step}`)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const addressTitle = locale === 'Mumbai' ? 'Cumballa Hill Atelier' : 'Friends Colony Atelier'
  const addressSub = locale === 'Mumbai' 
    ? '42 Altamount Road, Mumbai • Valet Parking' 
    : 'The Manor, 77 Friends Colony West, New Delhi'

  const formattedDate = `Tue, Oct ${selectedDay}, 2025`

  return (
    <main className="w-full pt-20 bg-surface min-h-[calc(100vh-20rem)]">
      <div className="flex flex-col w-full">
        {/* HERO SECTION */}
        <section className="relative w-full pt-space-xl pb-space-lg px-margin lg:px-margin-desktop max-w-[1440px] mx-auto border-b border-surface-container">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md">
            <div>
              <div className="flex items-center gap-space-xs text-secondary mb-space-xs">
                <span className="material-symbols-outlined text-[18px]">verified</span>
                <span className="font-label-caps text-label-caps uppercase tracking-widest">Official Reservation Dossier</span>
              </div>
              <h1 className="font-display-xl text-display-xl-mobile md:text-display-xl text-on-surface uppercase tracking-tight">
                Curate Your <span className="italic font-normal font-headline-lg">Appointment</span>
              </h1>
            </div>

            {/* Atelier Locale Toggle */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-space-sm">
              <div className="text-left sm:text-right">
                <p className="font-title-md text-title-md text-on-surface">{addressTitle}</p>
                <p className="font-caption text-caption text-on-surface-variant">{addressSub}</p>
              </div>
              <div className="flex items-center gap-space-xs bg-surface-container p-1 rounded-sm shadow-inner">
                <button
                  type="button"
                  onClick={() => setLocale('Mumbai')}
                  className={`font-label-caps text-label-caps uppercase px-4 py-2 transition-all ${
                    locale === 'Mumbai'
                      ? 'text-on-surface bg-surface shadow-sm font-semibold'
                      : 'text-on-surface-variant hover:text-on-surface'
                  }`}
                >
                  Mumbai
                </button>
                <button
                  type="button"
                  onClick={() => setLocale('Delhi')}
                  className={`font-label-caps text-label-caps uppercase px-4 py-2 transition-all ${
                    locale === 'Delhi'
                      ? 'text-on-surface bg-surface shadow-sm font-semibold'
                      : 'text-on-surface-variant hover:text-on-surface'
                  }`}
                >
                  Delhi
                </button>
              </div>
            </div>
          </div>

          {/* 5-Step Editorial Progress Bar */}
          <div className="mt-space-xl pt-space-md">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-space-md">
              {[
                { step: 1, title: '01 / Services', subtitle: 'Curation', icon: 'check' },
                { step: 2, title: '02 / Stylist', subtitle: 'Master Artist', icon: 'person' },
                { step: 3, title: '03 / Date & Time', subtitle: 'Schedule', icon: 'calendar_today' },
                { step: 4, title: '04 / Guest Dossier', subtitle: 'Consultation', icon: 'edit_note' },
                { step: 5, title: '05 / Confirmation', subtitle: 'Privilege Access', icon: 'verified' }
              ].map((item) => {
                const isActive = currentStep >= item.step
                return (
                  <div
                    key={item.step}
                    onClick={() => jumpToStep(item.step)}
                    className="step-nav-item flex flex-col gap-space-xs cursor-pointer group"
                  >
                    <div className="flex items-center justify-between font-label-caps text-label-caps tracking-widest uppercase">
                      <span className={isActive ? "text-secondary font-semibold" : "text-on-surface-variant group-hover:text-on-surface"}>
                        {item.title}
                      </span>
                      <span className={`material-symbols-outlined text-[14px] ${isActive ? "text-secondary" : "text-outline-variant"}`}>
                        {item.icon}
                      </span>
                    </div>
                    <div className={`h-1 w-full transition-colors duration-300 ${isActive ? "bg-secondary" : "bg-surface-variant"}`} />
                    <span className="font-caption text-caption text-on-surface-variant">
                      {item.subtitle}
                    </span>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* MAIN WORKSPACE */}
        <div className="max-w-[1440px] mx-auto px-margin lg:px-margin-desktop py-space-xl w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-desktop items-start">
            
            {/* Form Panels Container (Cols 1-8) */}
            <div className="lg:col-span-8 space-y-space-2xl">
              
              {/* STEP 1: SERVICES */}
              <section className="space-y-space-lg" id="step-section-1">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-sm pb-space-xs">
                  <div>
                    <p className="font-label-caps text-label-caps uppercase text-secondary tracking-widest">Phase 01</p>
                    <h2 className="font-headline-lg text-headline-lg uppercase text-on-surface">Service Selection</h2>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">Multiple treatments may be combined in a single session</p>
                </div>

                {/* Category Pills */}
                <div className="flex flex-wrap gap-space-xs pt-space-xs">
                  {[
                    { id: 'all', label: 'All Ateliers' },
                    { id: 'haircut', label: 'Haircut & Styling' },
                    { id: 'coloring', label: 'Master Coloring' },
                    { id: 'texture', label: 'Texture Treatments' },
                    { id: 'scalp', label: 'Scalp Spa' },
                    { id: 'bridal', label: 'Haute Bridal' }
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      type="button"
                      onClick={() => setActiveCategory(tab.id)}
                      className={`px-space-md py-space-xs font-label-caps text-label-caps uppercase tracking-wider transition-all ${
                        activeCategory === tab.id
                          ? 'bg-primary text-on-primary shadow-sm font-semibold'
                          : 'bg-surface-container text-on-surface-variant hover:bg-surface-variant'
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>

                {/* Service Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
                  {allServices
                    .filter(s => activeCategory === 'all' || s.cat === activeCategory)
                    .map((srv) => {
                      const isSelected = selectedServices.some(s => s.id === srv.id)
                      return (
                        <div
                          key={srv.id}
                          onClick={() => toggleService(srv)}
                          className={`group cursor-pointer p-space-lg transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 flex flex-col justify-between ${
                            isSelected
                              ? 'ring-1 ring-primary bg-surface-variant shadow-sm'
                              : 'bg-surface-container'
                          }`}
                        >
                          <div className="space-y-space-xs">
                            <div className="flex items-start justify-between">
                              <span className="font-label-caps text-label-caps uppercase tracking-wider text-secondary">
                                {srv.badge}
                              </span>
                              <div className={`w-5 h-5 flex items-center justify-center transition-colors ${
                                isSelected ? 'bg-primary text-on-primary' : 'bg-surface text-transparent'
                              }`}>
                                <span className="material-symbols-outlined text-[16px]">check</span>
                              </div>
                            </div>
                            <h3 className="font-headline-sm text-headline-sm text-on-surface">{srv.name}</h3>
                            <p className="font-body-sm text-body-sm text-on-surface-variant">{srv.desc}</p>
                          </div>
                          <div className="pt-space-md flex items-baseline justify-between mt-space-sm border-t border-surface/50">
                            <span className="font-caption text-caption uppercase tracking-wider text-on-surface-variant flex items-center gap-1">
                              <span className="material-symbols-outlined text-[14px]">schedule</span> {srv.duration} min
                            </span>
                            <span className="font-title-md text-title-md text-on-surface font-semibold">
                              ₹{srv.price.toLocaleString('en-IN')}
                            </span>
                          </div>
                        </div>
                      )
                    })}
                </div>
              </section>

              {/* STEP 2: STYLIST PREFERENCE */}
              <section className="space-y-space-lg" id="step-section-2">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-sm pb-space-xs">
                  <div>
                    <p className="font-label-caps text-label-caps uppercase text-secondary tracking-widest">Phase 02</p>
                    <h2 className="font-headline-lg text-headline-lg uppercase text-on-surface">Stylist Preference</h2>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">Trained across London, Paris, and Tokyo institutions</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-md">
                  {stylists.map((st) => {
                    const isSelected = selectedStylist.id === st.id
                    return (
                      <div
                        key={st.id}
                        onClick={() => setSelectedStylist(st)}
                        className={`group cursor-pointer p-space-md transition-all duration-300 hover:shadow-md flex flex-col justify-between ${
                          isSelected
                            ? 'ring-1 ring-primary bg-surface-variant shadow-sm'
                            : 'bg-surface-container'
                        }`}
                      >
                        <div className="flex items-center gap-space-md">
                          {st.img ? (
                            <img className="w-14 h-14 object-cover" alt={st.name} src={st.img} />
                          ) : (
                            <div className="w-14 h-14 bg-secondary-container text-on-secondary-container flex items-center justify-center font-headline-sm">
                              <span className="material-symbols-outlined text-[26px]">{st.icon}</span>
                            </div>
                          )}
                          <div className="min-w-0">
                            <h4 className="font-title-md text-title-md text-on-surface truncate">{st.name}</h4>
                            <p className="font-caption text-caption text-secondary">{st.sub}</p>
                          </div>
                        </div>

                        <div className={`mt-space-md flex items-center justify-between font-label-caps text-label-caps tracking-widest uppercase ${
                          isSelected ? 'text-secondary font-semibold' : 'text-on-surface-variant'
                        }`}>
                          <span>{isSelected ? 'Selected' : 'Select Artist'}</span>
                          <span className="material-symbols-outlined text-[16px]">
                            {isSelected ? 'radio_button_checked' : 'radio_button_unchecked'}
                          </span>
                        </div>
                      </div>
                    )
                  })}

                  {/* VIP Suite info card */}
                  <div className="bg-surface-variant/70 p-space-md flex flex-col justify-between">
                    <div className="space-y-space-xs">
                      <span className="font-label-caps text-label-caps uppercase text-secondary tracking-widest">Complimentary</span>
                      <h4 className="font-title-md text-title-md text-on-surface">Private Atelier Suite</h4>
                      <p className="font-caption text-caption text-on-surface-variant">Private VIP styling rooms are assigned automatically for multiple service bookings.</p>
                    </div>
                    <div className="flex items-center gap-space-xs text-secondary font-label-caps text-label-caps uppercase mt-space-sm">
                      <span className="material-symbols-outlined text-[16px]">workspace_premium</span> Guaranteed Comfort
                    </div>
                  </div>
                </div>
              </section>

              {/* STEP 3: DATE & TIME */}
              <section className="space-y-space-lg" id="step-section-3">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-sm pb-space-xs">
                  <div>
                    <p className="font-label-caps text-label-caps uppercase text-secondary tracking-widest">Phase 03</p>
                    <h2 className="font-headline-lg text-headline-lg uppercase text-on-surface">Date &amp; Time Selection</h2>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">Salon operates 7 days a week</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-space-lg bg-surface-container p-space-lg">
                  {/* Calendar Widget */}
                  <div className="md:col-span-6 space-y-space-md">
                    <div className="flex items-center justify-between">
                      <span className="font-headline-sm text-headline-sm text-on-surface">{monthName}</span>
                      <div className="flex items-center gap-space-xs">
                        <button 
                          type="button"
                          onClick={() => setMonthName(monthName === 'October 2025' ? 'September 2025' : 'October 2025')}
                          className="w-8 h-8 flex items-center justify-center text-on-surface-variant hover:text-on-surface hover:bg-surface transition-all"
                        >
                          <span className="material-symbols-outlined text-[18px]">chevron_left</span>
                        </button>
                        <button 
                          type="button"
                          onClick={() => setMonthName(monthName === 'October 2025' ? 'November 2025' : 'October 2025')}
                          className="w-8 h-8 flex items-center justify-center text-on-surface-variant hover:text-on-surface hover:bg-surface transition-all"
                        >
                          <span className="material-symbols-outlined text-[18px]">chevron_right</span>
                        </button>
                      </div>
                    </div>

                    <div className="grid grid-cols-7 text-center font-label-caps text-label-caps text-on-surface-variant tracking-wider">
                      <span>M</span><span>T</span><span>W</span><span>T</span><span>F</span><span>S</span><span>S</span>
                    </div>

                    <div className="grid grid-cols-7 gap-1 text-center font-body-sm text-body-sm">
                      <span className="py-2 text-outline-variant">29</span>
                      <span className="py-2 text-outline-variant">30</span>
                      {Array.from({ length: 31 }, (_, i) => i + 1).map((day) => {
                        const isDaySelected = selectedDay === day
                        return (
                          <button
                            key={day}
                            type="button"
                            onClick={() => setSelectedDay(day)}
                            className={`py-2 transition-all font-medium ${
                              isDaySelected
                                ? 'bg-primary text-on-primary font-semibold shadow-sm'
                                : 'hover:bg-surface text-on-surface'
                            }`}
                          >
                            {day}
                          </button>
                        )
                      })}
                      <span className="py-2 text-outline-variant">1</span>
                      <span className="py-2 text-outline-variant">2</span>
                    </div>

                    <div className="flex items-center gap-space-md pt-space-xs font-caption text-caption text-on-surface-variant">
                      <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 bg-primary inline-block"></span> Selected</span>
                      <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 bg-secondary-fixed inline-block"></span> Open Slots</span>
                      <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 bg-outline-variant inline-block"></span> Booked Out</span>
                    </div>
                  </div>

                  {/* Time Slots */}
                  <div className="md:col-span-6 space-y-space-md flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between pb-space-xs">
                        <span className="font-label-caps text-label-caps uppercase text-secondary tracking-widest">Available Slots</span>
                        <span className="font-body-sm text-body-sm font-semibold text-on-surface">
                          Tue, Oct {selectedDay}, 2025
                        </span>
                      </div>

                      {/* Morning Slots */}
                      <div className="space-y-space-xs pt-space-xs">
                        <p className="font-caption text-caption uppercase tracking-wider text-on-surface-variant">Morning Sanctuary (10:00 AM – 12:30 PM)</p>
                        <div className="grid grid-cols-3 gap-space-xs">
                          {['10:30 AM', '11:15 AM', '12:00 PM'].map((t) => (
                            <button
                              key={t}
                              type="button"
                              onClick={() => setSelectedTime(t)}
                              className={`py-2 px-1 text-center font-body-sm text-body-sm transition-all ${
                                selectedTime === t
                                  ? 'bg-primary text-on-primary shadow-sm font-semibold'
                                  : 'bg-surface hover:bg-surface-variant text-on-surface'
                              }`}
                            >
                              {t}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Afternoon Slots */}
                      <div className="space-y-space-xs pt-space-md">
                        <p className="font-caption text-caption uppercase tracking-wider text-on-surface-variant">Afternoon Atelier (01:00 PM – 05:00 PM)</p>
                        <div className="grid grid-cols-3 gap-space-xs">
                          {['02:00 PM', '02:30 PM', '04:00 PM'].map((t) => (
                            <button
                              key={t}
                              type="button"
                              onClick={() => setSelectedTime(t)}
                              className={`py-2 px-1 text-center font-body-sm text-body-sm transition-all ${
                                selectedTime === t
                                  ? 'bg-primary text-on-primary shadow-sm font-semibold'
                                  : 'bg-surface hover:bg-surface-variant text-on-surface'
                              }`}
                            >
                              {t}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Evening Slots */}
                      <div className="space-y-space-xs pt-space-md">
                        <p className="font-caption text-caption uppercase tracking-wider text-on-surface-variant">Evening Twilight (05:30 PM – 08:30 PM)</p>
                        <div className="grid grid-cols-3 gap-space-xs">
                          {['05:30 PM', '06:30 PM'].map((t) => (
                            <button
                              key={t}
                              type="button"
                              onClick={() => setSelectedTime(t)}
                              className={`py-2 px-1 text-center font-body-sm text-body-sm transition-all ${
                                selectedTime === t
                                  ? 'bg-primary text-on-primary shadow-sm font-semibold'
                                  : 'bg-surface hover:bg-surface-variant text-on-surface'
                              }`}
                            >
                              {t}
                            </button>
                          ))}
                          <button
                            type="button"
                            disabled
                            className="py-2 px-1 text-center font-body-sm text-body-sm bg-surface/40 text-outline-variant cursor-not-allowed opacity-50"
                          >
                            07:15 PM
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="bg-surface p-space-sm flex items-center gap-space-sm mt-space-md">
                      <span className="material-symbols-outlined text-[20px] text-secondary">local_cafe</span>
                      <span className="font-caption text-caption text-on-surface-variant">
                        Handcrafted matcha, artisanal single-origin roast, or herbal infusions served on arrival.
                      </span>
                    </div>
                  </div>
                </div>
              </section>

              {/* STEP 4: GUEST DOSSIER */}
              <section className="space-y-space-lg" id="step-section-4">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-sm pb-space-xs">
                  <div>
                    <p className="font-label-caps text-label-caps uppercase text-secondary tracking-widest">Phase 04</p>
                    <h2 className="font-headline-lg text-headline-lg uppercase text-on-surface">Guest Dossier &amp; Consultation</h2>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">Confidential profile maintained exclusively by our studio director</p>
                </div>

                <div className="bg-surface-container p-space-lg space-y-space-md">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
                    <div className="space-y-space-xs">
                      <label className="font-label-caps text-label-caps uppercase tracking-wider text-on-surface">
                        Guest Full Name <span className="text-secondary">*</span>
                      </label>
                      <input
                        className="w-full bg-surface px-space-md py-space-sm font-body-md text-body-md text-on-surface placeholder:text-outline-variant focus:outline-none focus:ring-1 focus:ring-primary transition-all"
                        type="text"
                        value={guestName}
                        onChange={(e) => setGuestName(e.target.value)}
                        placeholder="e.g. Maya Kasturi"
                      />
                    </div>
                    <div className="space-y-space-xs">
                      <label className="font-label-caps text-label-caps uppercase tracking-wider text-on-surface">
                        Mobile Telephone <span className="text-secondary">*</span>
                      </label>
                      <input
                        className="w-full bg-surface px-space-md py-space-sm font-body-md text-body-md text-on-surface placeholder:text-outline-variant focus:outline-none focus:ring-1 focus:ring-primary transition-all"
                        type="tel"
                        value={guestPhone}
                        onChange={(e) => setGuestPhone(e.target.value)}
                        placeholder="+91 98200 00000"
                      />
                    </div>
                  </div>

                  <div className="space-y-space-xs">
                    <label className="font-label-caps text-label-caps uppercase tracking-wider text-on-surface">
                      Email for Privilege Dossier &amp; Digital Invoice
                    </label>
                    <input
                      className="w-full bg-surface px-space-md py-space-sm font-body-md text-body-md text-on-surface placeholder:text-outline-variant focus:outline-none focus:ring-1 focus:ring-primary transition-all"
                      type="email"
                      value={guestEmail}
                      onChange={(e) => setGuestEmail(e.target.value)}
                      placeholder="name@domain.com"
                    />
                  </div>

                  {/* Checkbox Options */}
                  <div className="space-y-space-sm pt-space-xs border-t border-surface/50">
                    <div 
                      onClick={() => setPatchTest(!patchTest)}
                      className="flex items-start gap-space-sm cursor-pointer select-none"
                    >
                      <div className={`w-5 h-5 mt-0.5 flex items-center justify-center transition-colors ${
                        patchTest ? 'bg-primary text-on-primary' : 'bg-surface text-transparent'
                      }`}>
                        <span className="material-symbols-outlined text-[16px]">check</span>
                      </div>
                      <div>
                        <p className="font-body-sm text-body-sm text-on-surface font-medium">Patch Test Waiver &amp; Previous Color History</p>
                        <p className="font-caption text-caption text-on-surface-variant">I have previously received professional coloration within the past 6 months without adverse reaction.</p>
                      </div>
                    </div>

                    <div 
                      onClick={() => setQuietChair(!quietChair)}
                      className="flex items-start gap-space-sm cursor-pointer select-none"
                    >
                      <div className={`w-5 h-5 mt-0.5 flex items-center justify-center transition-colors ${
                        quietChair ? 'bg-primary text-on-primary' : 'bg-surface text-transparent'
                      }`}>
                        <span className="material-symbols-outlined text-[16px]">check</span>
                      </div>
                      <div>
                        <p className="font-body-sm text-body-sm text-on-surface font-medium">Request "Quiet Chair" Service</p>
                        <p className="font-caption text-caption text-on-surface-variant">Except for your technical diagnosis, enjoy uninterrupted peaceful focus, reading, or quiet relaxation throughout your session.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* STEP 5: GUARANTEE & CONFIRMATION NOTE */}
              <section className="space-y-space-md" id="step-section-5">
                <div className="relative overflow-hidden bg-primary text-on-primary p-space-xl">
                  <div className="absolute -right-10 -bottom-10 w-72 h-72 rounded-full bg-secondary/20 blur-3xl pointer-events-none"></div>
                  <div className="relative z-10 max-w-xl space-y-space-md">
                    <span className="font-label-caps text-label-caps uppercase tracking-widest text-secondary-fixed">ZENZA Sanctuary Guarantee</span>
                    <p className="font-headline-md text-headline-md font-normal leading-relaxed text-surface-bright">
                      “Luxury begins with stillness. We preserve your chosen time exclusively, never double-booking our chairs.”
                    </p>
                    <div className="flex items-center gap-space-lg pt-space-xs font-caption text-caption text-surface-variant">
                      <span className="flex items-center gap-1.5">
                        <span className="material-symbols-outlined text-[16px] text-secondary-fixed">lock</span> Bank-Grade Secure Holding
                      </span>
                      <span className="flex items-center gap-1.5">
                        <span className="material-symbols-outlined text-[16px] text-secondary-fixed">wifi_protected_setup</span> Flexible 24h Reschedule
                      </span>
                    </div>
                  </div>
                </div>
              </section>
            </div>

            {/* STICKY APPOINTMENT LEDGER (Cols 9-12) */}
            <div className="lg:col-span-4 sticky top-28 space-y-space-md">
              <div className="bg-surface-container-high p-space-lg shadow-lg flex flex-col justify-between">
                <div className="space-y-space-md">
                  
                  {/* Ledger Header */}
                  <div className="pb-space-sm flex items-start justify-between border-b border-surface-container">
                    <div>
                      <span className="font-label-caps text-label-caps uppercase tracking-widest text-secondary">Atelier Receipt</span>
                      <h3 className="font-headline-sm text-headline-sm uppercase text-on-surface">Your Reservation</h3>
                    </div>
                    <span className="font-caption text-caption px-space-xs py-0.5 bg-surface font-semibold text-on-surface">
                      {locale} Atelier
                    </span>
                  </div>

                  {/* Stylist & Date Snippet */}
                  <div className="bg-surface p-space-sm space-y-space-xs">
                    <div className="flex justify-between items-center font-caption text-caption uppercase tracking-wider text-on-surface-variant">
                      <span>Master Artist</span>
                      <span className="font-semibold text-on-surface truncate max-w-[180px]">{selectedStylist.name}</span>
                    </div>
                    <div className="flex justify-between items-center font-caption text-caption uppercase tracking-wider text-on-surface-variant">
                      <span>Slot Scheduled</span>
                      <span className="font-semibold text-on-surface">Oct {selectedDay} • {selectedTime}</span>
                    </div>
                    <div className="flex justify-between items-center font-caption text-caption uppercase tracking-wider text-on-surface-variant">
                      <span>Estimated Time</span>
                      <span className="font-semibold text-on-surface">{totalDuration} min</span>
                    </div>
                  </div>

                  {/* Selected Services List */}
                  <div className="space-y-space-xs">
                    <p className="font-label-caps text-label-caps uppercase tracking-wider text-on-surface-variant">
                      Reserved Treatments ({selectedServices.length})
                    </p>
                    <div className="space-y-space-xs max-h-56 overflow-y-auto pr-1">
                      {selectedServices.map((srv) => (
                        <div key={srv.id} className="flex items-center justify-between text-body-sm py-1.5 bg-surface px-space-xs border-b border-surface-container/50">
                          <span className="text-on-surface truncate pr-2">{srv.name}</span>
                          <span className="font-semibold text-on-surface whitespace-nowrap">₹{srv.price.toLocaleString('en-IN')}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Pricing Calculation */}
                  <div className="space-y-space-xs pt-space-xs border-t border-surface-container">
                    <div className="flex justify-between font-body-sm text-body-sm text-on-surface-variant">
                      <span>Services Subtotal</span>
                      <span className="font-semibold text-on-surface">₹{subtotal.toLocaleString('en-IN')}</span>
                    </div>
                    <div className="flex justify-between font-body-sm text-body-sm text-on-surface-variant">
                      <span>GST &amp; Studio Gratuity (18%)</span>
                      <span className="font-semibold text-on-surface">₹{gst.toLocaleString('en-IN')}</span>
                    </div>
                    <div className="flex justify-between font-body-sm text-body-sm text-on-surface-variant">
                      <span>Estimated Total</span>
                      <span className="font-semibold text-on-surface">₹{grandTotal.toLocaleString('en-IN')}</span>
                    </div>
                    <div className="pt-space-xs flex justify-between font-title-md text-title-md text-on-surface border-t border-surface-container">
                      <span className="font-normal">Atelier Holding Deposit (20%)</span>
                      <span className="font-bold text-secondary">₹{deposit.toLocaleString('en-IN')}</span>
                    </div>
                    <p className="font-caption text-caption text-outline">Balance payable in studio following your completed treatment.</p>
                  </div>
                </div>

                {/* Primary CTAs */}
                <div className="space-y-space-xs pt-space-md border-t border-surface-container">
                  <button
                    type="button"
                    onClick={handleConfirm}
                    className="w-full bg-primary text-on-primary py-space-sm font-label-caps text-label-caps uppercase tracking-widest hover:bg-secondary transition-all shadow-md flex items-center justify-center gap-space-xs active:scale-[0.98]"
                  >
                    <span>Confirm &amp; Secure Appointment</span>
                    <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                  </button>
                  
                  <a
                    className="w-full bg-surface text-on-surface py-space-sm font-label-caps text-label-caps uppercase tracking-widest hover:bg-surface-variant transition-all flex items-center justify-center gap-space-xs"
                    href={`https://wa.me/912223804411?text=Hello%20ZENZA%20Concierge%2C%20I%20would%20like%20to%20reserve%20an%20appointment%20for%20${encodeURIComponent(guestName)}%20at%20${locale}%20Atelier%20on%20Oct%20${selectedDay}%20at%20${encodeURIComponent(selectedTime)}.`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="material-symbols-outlined text-[18px] text-secondary">chat</span>
                    <span>VIP WhatsApp Concierge</span>
                  </a>
                </div>

                {/* Policy Micro-Copy */}
                <div className="pt-space-md space-y-space-xs font-caption text-caption text-outline-variant">
                  <div className="flex items-center gap-1.5 text-on-surface-variant">
                    <span className="material-symbols-outlined text-[14px]">history</span>
                    <span>24-Hour Unhurried Rescheduling Policy</span>
                  </div>
                  <p>Appointments may be rescheduled up to 24 hours prior with full deposit transfer to any future date within 90 days.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* LUXURY RESERVATION CONFIRMATION MODAL */}
      {isConfirmed && (
        <div 
          onClick={() => setIsConfirmed(false)}
          className="fixed inset-0 z-50 bg-black/75 backdrop-blur-md flex items-center justify-center p-margin animate-fadeIn"
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-xl bg-surface border border-secondary/30 p-space-xl shadow-2xl relative space-y-space-lg max-h-[90vh] overflow-y-auto"
          >
            {/* Close Button */}
            <button 
              onClick={() => setIsConfirmed(false)}
              className="absolute top-4 right-4 p-2 text-on-surface-variant hover:text-on-surface rounded-full transition-colors"
            >
              <span className="material-symbols-outlined text-[22px]">close</span>
            </button>

            {/* Header */}
            <div className="text-center space-y-space-xs">
              <div className="w-12 h-12 bg-secondary text-on-secondary rounded-full flex items-center justify-center mx-auto mb-2">
                <span className="material-symbols-outlined text-[24px]">verified</span>
              </div>
              <p className="font-label-caps text-label-caps uppercase tracking-widest text-secondary">Privilege Access Granted</p>
              <h2 className="font-display-lg text-display-lg-mobile md:text-display-lg uppercase tracking-tight text-on-surface">
                Reservation Confirmed
              </h2>
              <p className="font-caption text-caption text-secondary font-semibold tracking-wider">
                DOSSIER REF: {bookingRef}
              </p>
            </div>

            {/* Summary Details */}
            <div className="bg-surface-container p-space-md space-y-space-xs font-body-sm">
              <div className="flex justify-between py-1 border-b border-surface/50">
                <span className="text-on-surface-variant">Guest Name:</span>
                <span className="font-semibold text-on-surface">{guestName}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-surface/50">
                <span className="text-on-surface-variant">Atelier Sanctuary:</span>
                <span className="font-semibold text-on-surface">{locale} Atelier ({addressTitle})</span>
              </div>
              <div className="flex justify-between py-1 border-b border-surface/50">
                <span className="text-on-surface-variant">Scheduled Slot:</span>
                <span className="font-semibold text-on-surface">{formattedDate} • {selectedTime}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-surface/50">
                <span className="text-on-surface-variant">Master Artist:</span>
                <span className="font-semibold text-on-surface">{selectedStylist.name}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-surface/50">
                <span className="text-on-surface-variant">Session Duration:</span>
                <span className="font-semibold text-on-surface">{totalDuration} Minutes</span>
              </div>
              <div className="flex justify-between py-1 border-b border-surface/50">
                <span className="text-on-surface-variant">Holding Deposit (20%):</span>
                <span className="font-semibold text-secondary">₹{deposit.toLocaleString('en-IN')} (Authorized)</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-on-surface-variant">Balance Due on Arrival:</span>
                <span className="font-bold text-on-surface">₹{(grandTotal - deposit).toLocaleString('en-IN')}</span>
              </div>
            </div>

            {/* Reserved Services */}
            <div className="space-y-1">
              <p className="font-label-caps text-label-caps uppercase tracking-wider text-on-surface-variant">Confirmed Treatments:</p>
              <div className="space-y-1">
                {selectedServices.map((s) => (
                  <div key={s.id} className="flex justify-between text-body-sm bg-surface p-2 border border-surface-container">
                    <span className="text-on-surface font-medium">{s.name}</span>
                    <span className="text-on-surface-variant">₹{s.price.toLocaleString('en-IN')}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="space-y-space-xs pt-space-xs">
              <button
                type="button"
                onClick={() => {
                  alert("Calendar invitation exported to .ics format.")
                }}
                className="w-full bg-primary text-on-primary py-space-sm font-label-caps text-label-caps uppercase tracking-widest hover:bg-secondary transition-all flex items-center justify-center gap-space-xs shadow-md"
              >
                <span className="material-symbols-outlined text-[16px]">event</span>
                <span>Add to Private Calendar (.ics)</span>
              </button>
              <button
                type="button"
                onClick={() => {
                  setIsConfirmed(false)
                  onNavigate('home')
                }}
                className="w-full bg-surface-container text-on-surface py-space-sm font-label-caps text-label-caps uppercase tracking-widest hover:bg-surface-variant transition-all text-center block"
              >
                Return to Atelier Home
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  )
}
