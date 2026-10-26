import React, { useState } from 'react'

export default function Contact({ onNavigate }) {
  const [activeAtelier, setActiveAtelier] = useState('mumbai')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <main className="w-full pt-20 bg-surface min-h-[calc(100vh-20rem)]">
<div className="flex flex-col w-full">
{/*  Minimal Luxury Contact Hero  */}
<section className="relative w-full bg-surface-container-low py-space-2xl overflow-hidden">
<div className="max-w-[1440px] mx-auto px-margin lg:px-margin-desktop">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-desktop items-end">
<div className="lg:col-span-8 flex flex-col space-y-space-md">
<div className="flex items-center gap-space-sm">
<span className="w-8 h-px bg-secondary"></span>
<span className="font-label-caps text-label-caps uppercase tracking-widest text-secondary">Inquiries &amp; Concierge</span>
</div>
<h1 className="font-display-xl text-display-xl uppercase text-on-surface tracking-tight leading-none">
            CONNECT WITH <br /><span className="italic font-normal text-secondary font-headline-lg">THE ATELIER</span>
</h1>
</div>
<div className="lg:col-span-4 lg:pb-space-xs">
<p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
            Whether you seek a bespoke hair consultation, editorial booking, or private studio reservation, our atelier concierge is at your discreet service.
          </p>
</div>
</div>
{/*  Quick Tonal Metric Strip  */}
<div className="grid grid-cols-2 md:grid-cols-4 gap-gutter mt-space-2xl pt-space-xl bg-surface-container-high/60 p-space-lg backdrop-blur-sm">
<div className="flex flex-col space-y-space-xs">
<span className="font-label-caps text-label-caps uppercase text-secondary tracking-widest">Average Response</span>
<span className="font-headline-sm text-headline-sm text-on-surface">15 Minutes</span>
<span className="font-caption text-caption text-on-surface-variant">Via dedicated VIP WhatsApp</span>
</div>
<div className="flex flex-col space-y-space-xs">
<span className="font-label-caps text-label-caps uppercase text-secondary tracking-widest">Private Chambers</span>
<span className="font-headline-sm text-headline-sm text-on-surface">By Appointment</span>
<span className="font-caption text-caption text-on-surface-variant">Acoustically isolated suites</span>
</div>
<div className="flex flex-col space-y-space-xs">
<span className="font-label-caps text-label-caps uppercase text-secondary tracking-widest">Arrival Courtesy</span>
<span className="font-headline-sm text-headline-sm text-on-surface">Complimentary</span>
<span className="font-caption text-caption text-on-surface-variant">Valet &amp; botanical salon tea</span>
</div>
<div className="flex flex-col space-y-space-xs">
<span className="font-label-caps text-label-caps uppercase text-secondary tracking-widest">Global Inquiries</span>
<span className="font-headline-sm text-headline-sm text-on-surface">Direct Line</span>
<span className="font-caption text-caption text-on-surface-variant">Press, events &amp; bridal suites</span>
</div>
</div>
</div>
</section>
{/*  Flagship Studio Locations  */}
<section className="w-full py-space-2xl bg-surface">
<div className="max-w-[1440px] mx-auto px-margin lg:px-margin-desktop">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-space-2xl">
<div>
<span className="font-label-caps text-label-caps uppercase text-secondary tracking-widest">Sanctuaries of Craft</span>
<h2 className="font-headline-lg text-headline-lg uppercase text-on-surface tracking-tight mt-space-xs">Flagship Ateliers</h2>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-space-sm md:mt-0 max-w-sm">
          Crafted with raw travertine, blackened bronze, and natural diffused light, each studio is an intentional sanctuary.
        </p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-gutter-desktop">
{/*  Atelier 1: South Mumbai  */}
<article className="flex flex-col bg-surface-container group overflow-hidden">
<div className="relative w-full aspect-[16/10] overflow-hidden bg-surface-dim">
<img  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" data-alt="Minimalist luxury interior of high-end hair salon in South Mumbai with warm travertine limestone walls, brushed brass mirrors, custom leather styling chairs, low ambient lighting and architectural bonsai in a peaceful zen atmosphere" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC5XiRjutFEVu96F1U24Luf6It8Dfle3xZ9BH8rtcNcA_b8femOYEXZmVqreE2O8HmmCiiiW2TcRDY78RfiTbga67SVgbsMf0_r53jQ2VD3gq2RxoIZDcvMshPXKp0f_VRLaNDWrpvNUB-_1KlTxaJ7nHC9Rxmq8VbZQ-TDyFCy_7gSmgw47AphvxLE7J9WTyY57yYBRvSGOq56y6rZv5vvQZVVlnfn9kJILwwwC5ncXSpRieSZYeGz2g" />
<div className="absolute top-space-md left-space-md bg-tertiary-container/80 backdrop-blur-md px-space-md py-space-xs text-surface-bright font-label-caps text-label-caps tracking-widest uppercase">
              Flagship 01 • Mumbai
            </div>
<div className="absolute bottom-space-md right-space-md bg-surface/90 backdrop-blur-sm px-space-md py-space-xs text-on-surface font-caption text-caption flex items-center gap-space-xs">
<span className="material-symbols-outlined text-[14px] text-secondary">local_parking</span>
              Valet Available
            </div>
</div>
<div className="p-space-xl flex flex-col justify-between flex-grow space-y-space-lg">
<div className="space-y-space-md">
<div className="flex items-baseline justify-between">
<h3 className="font-headline-md text-headline-md text-on-surface">Mumbai Atelier</h3>
<span className="font-label-caps text-label-caps uppercase text-secondary">Altamount Road</span>
</div>
<p className="font-body-md text-body-md text-on-surface-variant">
                42 Altamount Road, Cumballa Hill, South Mumbai, Maharashtra 400026
              </p>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md pt-space-xs text-on-surface">
<div className="flex items-start gap-space-sm">
<span className="material-symbols-outlined text-secondary text-[20px] mt-0.5">call</span>
<div>
<span className="font-label-caps text-label-caps uppercase text-on-surface-variant block">Desk Line</span>
<a className="font-body-sm text-body-sm font-semibold hover:text-secondary transition-colors" href="tel:+912223804411">+91 22 2380 4411</a>
</div>
</div>
<div className="flex items-start gap-space-sm">
<span className="material-symbols-outlined text-secondary text-[20px] mt-0.5">schedule</span>
<div>
<span className="font-label-caps text-label-caps uppercase text-on-surface-variant block">Studio Hours</span>
<span className="font-body-sm text-body-sm block">Mon – Sat: 10:00 AM – 9:00 PM</span>
<span className="font-caption text-caption text-on-surface-variant block">Sunday by private reserve</span>
</div>
</div>
</div>
</div>
<div className="pt-space-md flex flex-wrap items-center justify-between gap-space-md bg-surface-container-high/40 p-space-md">
<div className="flex items-center gap-space-sm text-on-surface-variant font-caption text-caption">
<span className="material-symbols-outlined text-secondary text-[18px]">verified</span>
<span>Bridal Suite &amp; Private Shampoo Lounge</span>
</div>
<a className="inline-flex items-center gap-space-xs font-label-caps text-label-caps uppercase tracking-widest text-on-surface hover:text-secondary transition-colors group/link" href="#interactive-map" >
<span>Directions &amp; Map</span>
<span className="material-symbols-outlined text-[14px] transition-transform group-hover/link:translate-x-1">north_east</span>
</a>
</div>
</div>
</article>
{/*  Atelier 2: New Delhi  */}
<article className="flex flex-col bg-surface-container group overflow-hidden">
<div className="relative w-full aspect-[16/10] overflow-hidden bg-surface-dim">
<img  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" data-alt="Quiet luxury architectural salon studio in New Delhi with curved warm microcement arches, muted brass accents, sculptural dark wood shelving with hair care elixirs and floor-to-ceiling garden views" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCHk6UTZT3LIRg8YQUbJQLAAYFo3ujLXy54UKm9LxfqxbE6-Pc3FrwOPf8zvqQOZiXQZc1-_YNbRUwAMCpOc5WNSFrgfLP9to8XAhL1gtRFufXMP5L3UO0r62mGwrP2ZIvGO9wVS2OGOEaghR6yLOxHCgB7nHyTEAarW3bzlae09lDwMUOYj_qfWeVq_N_CFiYRM1zwPp9K-pcVosCFsJldvVRdtiVKCW0WiLrCTwxkCrJA20zWy051_A" />
<div className="absolute top-space-md left-space-md bg-tertiary-container/80 backdrop-blur-md px-space-md py-space-xs text-surface-bright font-label-caps text-label-caps tracking-widest uppercase">
              Flagship 02 • New Delhi
            </div>
<div className="absolute bottom-space-md right-space-md bg-surface/90 backdrop-blur-sm px-space-md py-space-xs text-on-surface font-caption text-caption flex items-center gap-space-xs">
<span className="material-symbols-outlined text-secondary text-[14px]">local_parking</span>
              Private Courtyard Valet
            </div>
</div>
<div className="p-space-xl flex flex-col justify-between flex-grow space-y-space-lg">
<div className="space-y-space-md">
<div className="flex items-baseline justify-between">
<h3 className="font-headline-md text-headline-md text-on-surface">New Delhi Atelier</h3>
<span className="font-label-caps text-label-caps uppercase text-secondary">Friends Colony West</span>
</div>
<p className="font-body-md text-body-md text-on-surface-variant">
                The Manor, 77 Friends Colony West, New Delhi, Delhi 110065
              </p>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md pt-space-xs text-on-surface">
<div className="flex items-start gap-space-sm">
<span className="material-symbols-outlined text-secondary text-[20px] mt-0.5">call</span>
<div>
<span className="font-label-caps text-label-caps uppercase text-on-surface-variant block">Desk Line</span>
<a className="font-body-sm text-body-sm font-semibold hover:text-secondary transition-colors" href="tel:+911141058820">+91 11 4105 8820</a>
</div>
</div>
<div className="flex items-start gap-space-sm">
<span className="material-symbols-outlined text-secondary text-[20px] mt-0.5">schedule</span>
<div>
<span className="font-label-caps text-label-caps uppercase text-on-surface-variant block">Studio Hours</span>
<span className="font-body-sm text-body-sm block">Mon – Sat: 10:00 AM – 8:30 PM</span>
<span className="font-caption text-caption text-on-surface-variant block">Sunday: 11:00 AM – 7:00 PM</span>
</div>
</div>
</div>
</div>
<div className="pt-space-md flex flex-wrap items-center justify-between gap-space-md bg-surface-container-high/40 p-space-md">
<div className="flex items-center gap-space-sm text-on-surface-variant font-caption text-caption">
<span className="material-symbols-outlined text-secondary text-[18px]">verified</span>
<span>Garden Terrace &amp; Private Color Suite</span>
</div>
<a className="inline-flex items-center gap-space-xs font-label-caps text-label-caps uppercase tracking-widest text-on-surface hover:text-secondary transition-colors group/link" href="#interactive-map" >
<span>Directions &amp; Map</span>
<span className="material-symbols-outlined text-[14px] transition-transform group-hover/link:translate-x-1">north_east</span>
</a>
</div>
</div>
</article>
</div>
</div>
</section>
{/*  Interactive Map & Wayfinding Canvas  */}
<section className="w-full bg-surface-container-highest py-space-2xl" id="interactive-map">
<div className="max-w-[1440px] mx-auto px-margin lg:px-margin-desktop">
<div className="flex flex-col lg:flex-row lg:items-end justify-between mb-space-lg gap-space-md">
<div>
<span className="font-label-caps text-label-caps uppercase text-secondary tracking-widest">Cartography</span>
<h2 className="font-headline-lg text-headline-lg uppercase text-on-surface tracking-tight mt-space-xs">Atelier Coordinates</h2>
</div>
{/*  Studio Switcher Tabs  */}
<div className="inline-flex bg-surface p-1 space-x-1" role="tablist">
<button className="px-space-md py-space-xs font-label-caps text-label-caps uppercase tracking-widest bg-primary text-on-primary transition-all" id="btn-tab-mumbai" >
            Mumbai Flagship
          </button>
<button className="px-space-md py-space-xs font-label-caps text-label-caps uppercase tracking-widest text-on-surface-variant hover:text-on-surface transition-all" id="btn-tab-delhi" >
            New Delhi Atelier
          </button>
</div>
</div>
{/*  Stylized Architectural Map Container  */}
<div className="relative w-full h-[480px] overflow-hidden bg-tertiary-container shadow-xl">
<div className="w-full h-full bg-cover bg-center transition-all duration-700" data-location="42 Altamount Road, Cumballa Hill, Mumbai" id="map-target"></div>
{/*  Ambient Stylized Map HUD Overlay  */}
<div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-tertiary-container/90 via-tertiary-container/30 to-transparent"></div>
{/*  Custom Brass Marker Floating Card  */}
<div className="absolute top-space-lg left-space-lg max-w-sm bg-surface/95 backdrop-blur-md p-space-md shadow-2xl">
<div className="flex items-start justify-between gap-space-md">
<div>
<span className="font-label-caps text-label-caps uppercase tracking-widest text-secondary block" id="map-chip">Mumbai Sanctuary</span>
<p className="font-headline-sm text-headline-sm text-on-surface mt-space-xs" id="map-title">Altamount Road</p>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1" id="map-address">42 Altamount Road, Cumballa Hill, South Mumbai</p>
</div>
<div className="w-10 h-10 bg-secondary/10 flex items-center justify-center text-secondary flex-shrink-0">
<span className="material-symbols-outlined text-[20px]">pin_drop</span>
</div>
</div>
<div className="mt-space-md pt-space-sm border-t border-on-surface/10 space-y-space-xs font-caption text-caption text-on-surface-variant">
<div className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-[16px] text-secondary">local_parking</span>
<span>Chauffeured drop-off &amp; dedicated valet entrance</span>
</div>
<div className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-[16px] text-secondary">near_me</span>
<span id="map-transit">12 mins from Lower Parel; 25 mins from Bandra</span>
</div>
</div>
<div className="mt-space-md flex gap-space-sm">
<a className="flex-1 bg-primary text-on-primary py-space-xs text-center font-label-caps text-label-caps uppercase tracking-widest hover:bg-secondary transition-colors" href="https://maps.google.com/?q=42+Altamount+Road+Mumbai" id="map-nav-link" rel="noopener noreferrer" target="_blank">
              Open Navigator
            </a>
<button className="px-space-md py-space-xs bg-surface-container text-on-surface font-label-caps text-label-caps uppercase tracking-widest hover:bg-surface-container-highest transition-colors" >
<span id="copy-btn-text">Copy PIN</span>
</button>
</div>
</div>
{/*  Valet & Security Notice Pill  */}
<div className="absolute bottom-space-lg right-space-lg bg-tertiary/90 text-surface-bright px-space-md py-space-xs backdrop-blur-md flex items-center gap-space-sm">
<span className="w-2 h-2 rounded-full bg-secondary-fixed animate-pulse"></span>
<span className="font-caption text-caption uppercase tracking-wider">Gate Concierge Monitored • Valet Station Active</span>
</div>
</div>
</div>
</section>
{/*  Bespoke Contact & Consultation Form Section  */}
<section className="w-full py-space-2xl bg-surface">
<div className="max-w-[1440px] mx-auto px-margin lg:px-margin-desktop">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-desktop">
{/*  Left Column: Context & Rituals  */}
<div className="lg:col-span-5 flex flex-col justify-between space-y-space-xl">
<div className="space-y-space-md">
<div className="flex items-center gap-space-sm">
<span className="w-8 h-px bg-secondary"></span>
<span className="font-label-caps text-label-caps uppercase tracking-widest text-secondary">Private Request</span>
</div>
<h2 className="font-headline-lg text-headline-lg uppercase text-on-surface tracking-tight">
              Begin Your Consultation
            </h2>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              Every appointment at ZENZA initiates with a personalized diagnostic dialogue. Please indicate your desired atelier and the nature of your request so our front concierge may orchestrate your arrival.
            </p>
</div>
{/*  Studio Etiquette & Arrival Guide Accordion/Pillars  */}
<div className="bg-surface-container p-space-lg space-y-space-md">
<span className="font-label-caps text-label-caps uppercase tracking-widest text-secondary block">
              Studio Etiquette &amp; Arrival Guide
            </span>
<div className="space-y-space-md font-body-sm text-body-sm text-on-surface-variant">
<div className="flex gap-space-md">
<span className="font-headline-sm text-headline-sm text-secondary font-normal">01</span>
<div>
<p className="font-title-md text-title-md text-on-surface">Punctual Immersion</p>
<p className="mt-1">We recommend arriving 15 minutes before your reserved treatment to settle into our reception salon and begin sensory consultation.</p>
</div>
</div>
<div className="flex gap-space-md">
<span className="font-headline-sm text-headline-sm text-secondary font-normal">02</span>
<div>
<p className="font-title-md text-title-md text-on-surface">Botanical Apothecary Service</p>
<p className="mt-1">Enjoy complimentary single-origin pour-over espresso, ceremonial matcha, or cold-pressed botanical infusions upon check-in.</p>
</div>
</div>
<div className="flex gap-space-md">
<span className="font-headline-sm text-headline-sm text-secondary font-normal">03</span>
<div>
<p className="font-title-md text-title-md text-on-surface">Private Alcove Sanctuary</p>
<p className="mt-1">All transformations take place in spacious semi-private or full private alcoves designed for absolute intimacy and calm.</p>
</div>
</div>
</div>
</div>
{/*  Atelier Seal  */}
<div className="p-space-md bg-surface-container-high/40 flex items-center justify-between">
<span className="font-label-caps text-label-caps uppercase tracking-wider text-on-surface">Discretion Guaranteed</span>
<span className="font-caption text-caption text-secondary">Non-Disclosure Suites on Request</span>
</div>
</div>
{/*  Right Column: Consultation Form  */}
<div className="lg:col-span-7 bg-surface-container p-space-xl lg:p-space-2xl">
<form className="space-y-space-lg" id="consultation-form" onsubmit="handleFormSubmit(event)">
<div className="grid grid-cols-1 md:grid-cols-2 gap-space-lg">
{/*  Full Name  */}
<div className="space-y-space-xs">
<label className="font-label-caps text-label-caps uppercase tracking-widest text-on-surface block" htmlFor="full-name">
                  Full Name <span className="text-secondary">*</span>
</label>
<input  className="w-full bg-surface py-space-sm px-space-md font-body-md text-body-md text-on-surface placeholder:text-outline-variant focus:outline-none focus:ring-1 focus:ring-secondary transition-all" id="full-name" placeholder="e.g. Maya Kasturi" required="" type="text" />
</div>
{/*  Email  */}
<div className="space-y-space-xs">
<label className="font-label-caps text-label-caps uppercase tracking-widest text-on-surface block" htmlFor="email">
                  Email Address <span className="text-secondary">*</span>
</label>
<input  className="w-full bg-surface py-space-sm px-space-md font-body-md text-body-md text-on-surface placeholder:text-outline-variant focus:outline-none focus:ring-1 focus:ring-secondary transition-all" id="email" placeholder="e.g. maya@domain.com" required="" type="email" />
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-space-lg">
{/*  Phone  */}
<div className="space-y-space-xs">
<label className="font-label-caps text-label-caps uppercase tracking-widest text-on-surface block" htmlFor="phone">
                  Contact Number <span className="text-secondary">*</span>
</label>
<input  className="w-full bg-surface py-space-sm px-space-md font-body-md text-body-md text-on-surface placeholder:text-outline-variant focus:outline-none focus:ring-1 focus:ring-secondary transition-all" id="phone" placeholder="+91 98200 00000" required="" type="tel" />
</div>
{/*  Atelier Choice  */}
<div className="space-y-space-xs">
<label className="font-label-caps text-label-caps uppercase tracking-widest text-on-surface block" htmlFor="atelier-choice">
                  Atelier of Choice <span className="text-secondary">*</span>
</label>
<div className="relative">
<select className="w-full bg-surface py-space-sm px-space-md font-body-md text-body-md text-on-surface appearance-none focus:outline-none focus:ring-1 focus:ring-secondary transition-all pr-space-xl" id="atelier-choice" required="">
<option disabled="" selected="" defaultValue="">Select studio destination</option>
<option defaultValue="mumbai">Mumbai — Altamount Road Atelier</option>
<option defaultValue="delhi">New Delhi — The Manor, Friends Colony</option>
<option defaultValue="destination">Destination / Travel Engagement</option>
</select>
<span className="material-symbols-outlined pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-[20px]">
                    keyboard_arrow_down
                  </span>
</div>
</div>
</div>
{/*  Inquiry Type  */}
<div className="space-y-space-xs">
<label className="font-label-caps text-label-caps uppercase tracking-widest text-on-surface block" htmlFor="inquiry-type">
                Nature of Consultation <span className="text-secondary">*</span>
</label>
<div className="relative">
<select className="w-full bg-surface py-space-sm px-space-md font-body-md text-body-md text-on-surface appearance-none focus:outline-none focus:ring-1 focus:ring-secondary transition-all pr-space-xl" id="inquiry-type" required="">
<option disabled="" selected="" defaultValue="">Identify your inquiry type</option>
<option defaultValue="bespoke-cut-color">Bespoke Hair Architecture &amp; Colorist Consultation</option>
<option defaultValue="wedding-bridal">Wedding &amp; Haute Bridal Residency</option>
<option defaultValue="press-editorial">Press, Editorial &amp; Runway Commission</option>
<option defaultValue="private-suite">Private Suite Buyout / Private Atelier Lockout</option>
<option defaultValue="scalp-wellness">Japanese Head Spa &amp; Trichology Ritual</option>
</select>
<span className="material-symbols-outlined pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-[20px]">
                  keyboard_arrow_down
                </span>
</div>
</div>
{/*  Message  */}
<div className="space-y-space-xs">
<label className="font-label-caps text-label-caps uppercase tracking-widest text-on-surface block" htmlFor="message">
                Message / Desired Stylist / Notes
              </label>
<textarea className="w-full bg-surface py-space-sm px-space-md font-body-md text-body-md text-on-surface placeholder:text-outline-variant focus:outline-none focus:ring-1 focus:ring-secondary transition-all resize-none" id="message" placeholder="Share your hair history, requested dates, or preferred creative director..." rows="4"></textarea>
</div>
{/*  Privacy Policy Checkbox  */}
<div className="flex items-start gap-space-sm">
<input  className="mt-1 w-4 h-4 accent-secondary rounded-none cursor-pointer" id="privacy" required="" type="checkbox" />
<label className="font-caption text-caption text-on-surface-variant cursor-pointer" htmlFor="privacy">
                I agree to the confidential processing of my details by ZENZA Hair Studio Private Limited in accordance with atelier privacy terms.
              </label>
</div>
{/*  Action Button  */}
<div className="pt-space-sm flex flex-col sm:flex-row items-center justify-between gap-space-md">
<button className="w-full sm:w-auto bg-primary text-on-primary px-space-xl py-space-md font-label-caps text-label-caps uppercase tracking-widest hover:bg-secondary transition-colors duration-300 shadow-md" type="submit">
                Submit Inquiry
              </button>
<span className="font-caption text-caption text-on-surface-variant flex items-center gap-space-xs">
<span className="material-symbols-outlined text-[16px] text-secondary">lock</span>
                Strictly Confidential Transmission
              </span>
</div>
{/*  Confirmation message state  */}
<div className="hidden p-space-md bg-secondary-container text-on-secondary-container font-body-sm text-body-sm transition-all" id="form-feedback">
              Your consultation dispatch has reached our Senior Concierge. An invitation or confirmation will be transmitted within 15 to 30 minutes.
            </div>
</form>
</div>
</div>
</div>
</section>
{/*  Direct VIP Concierge Access & Press Links  */}
<section className="w-full py-space-2xl bg-surface-container-low">
<div className="max-w-[1440px] mx-auto px-margin lg:px-margin-desktop">
<div className="grid grid-cols-1 md:grid-cols-3 gap-gutter-desktop">
{/*  Channel 1: WhatsApp Concierge  */}
<div className="bg-surface p-space-xl flex flex-col justify-between space-y-space-lg shadow-sm">
<div className="space-y-space-sm">
<div className="flex items-center justify-between">
<div className="w-10 h-10 bg-secondary-fixed flex items-center justify-center text-on-secondary-fixed">
<span className="material-symbols-outlined text-[22px]">chat</span>
</div>
<span className="font-caption text-caption bg-secondary-container text-on-secondary-container px-space-xs py-0.5 tracking-wider uppercase">Live Concierge</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-on-surface">VIP WhatsApp Line</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant">
              Direct desk connection for same-day booking modifications, chauffeur coordination, or rapid stylist consultations.
            </p>
</div>
<div className="space-y-space-xs">
<a className="inline-flex items-center gap-space-xs text-on-surface hover:text-secondary font-label-caps text-label-caps uppercase tracking-widest group" href="https://wa.me/912223804411" rel="noopener noreferrer" target="_blank">
<span>Start WhatsApp Conversation</span>
<span className="material-symbols-outlined text-[14px] transition-transform group-hover:translate-x-1">arrow_forward</span>
</a>
<span className="block font-caption text-caption text-secondary">Promised response within 15 minutes</span>
</div>
</div>
{/*  Channel 2: Press & Editorial Desk  */}
<div className="bg-surface p-space-xl flex flex-col justify-between space-y-space-lg shadow-sm">
<div className="space-y-space-sm">
<div className="flex items-center justify-between">
<div className="w-10 h-10 bg-surface-container-highest flex items-center justify-center text-on-surface">
<span className="material-symbols-outlined text-[22px]">newspaper</span>
</div>
<span className="font-caption text-caption bg-surface-container text-on-surface-variant px-space-xs py-0.5 tracking-wider uppercase">Editorial</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-on-surface">Press &amp; Bespoke Projects</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant">
              For magazine features, brand alliances, film commissions, and celebrity atelier reservations.
            </p>
</div>
<div className="space-y-space-xs">
<a className="inline-flex items-center gap-space-xs text-on-surface hover:text-secondary font-label-caps text-label-caps uppercase tracking-widest group" href="mailto:press@zenzastudio.com">
<span>press@zenzastudio.com</span>
<span className="material-symbols-outlined text-[14px] transition-transform group-hover:translate-x-1">arrow_forward</span>
</a>
<span className="block font-caption text-caption text-on-surface-variant">Dedicated Communications Officer</span>
</div>
</div>
{/*  Channel 3: Private Suite Buyout  */}
<div className="bg-surface p-space-xl flex flex-col justify-between space-y-space-lg shadow-sm">
<div className="space-y-space-sm">
<div className="flex items-center justify-between">
<div className="w-10 h-10 bg-surface-container-highest flex items-center justify-center text-on-surface">
<span className="material-symbols-outlined text-[22px]">hotel_class</span>
</div>
<span className="font-caption text-caption bg-surface-container text-on-surface-variant px-space-xs py-0.5 tracking-wider uppercase">Exclusive</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-on-surface">Full Studio Lockout</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant">
              Complete private booking of either flagship atelier for bridal retinues, VIP dignitaries, and film productions.
            </p>
</div>
<div className="space-y-space-xs">
<a className="inline-flex items-center gap-space-xs text-on-surface hover:text-secondary font-label-caps text-label-caps uppercase tracking-widest group" href="mailto:director@zenzastudio.com">
<span>Inquire With General Director</span>
<span className="material-symbols-outlined text-[14px] transition-transform group-hover:translate-x-1">arrow_forward</span>
</a>
<span className="block font-caption text-caption text-on-surface-variant">Requires 14-day advance notice</span>
</div>
</div>
</div>
</div>
</section>
{/*  Studio Visual Journal & Instagram Strip  */}
<section className="w-full py-space-xl bg-surface">
<div className="max-w-[1440px] mx-auto px-margin lg:px-margin-desktop mb-space-md">
<div className="flex items-center justify-between">
<div>
<span className="font-label-caps text-label-caps uppercase tracking-widest text-secondary">Visual Journal</span>
<h4 className="font-headline-sm text-headline-sm uppercase text-on-surface">@zenzahair.atelier</h4>
</div>
<a className="hidden sm:inline-flex items-center gap-space-xs font-label-caps text-label-caps uppercase tracking-widest text-on-surface hover:text-secondary transition-colors" href="https://instagram.com" rel="noopener noreferrer" target="_blank">
<span>Follow Journal</span>
<span className="material-symbols-outlined text-[16px]">open_in_new</span>
</a>
</div>
</div>
{/*  Edge-to-edge subtle grid strip  */}
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2 max-w-[1440px] mx-auto px-margin lg:px-margin-desktop">
<div className="aspect-square overflow-hidden bg-surface-dim group relative">
<img  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Close up architectural detail of salon chair in ivory boucle texture against dark basalt stone wall with soft morning shadow" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDJjBeFjLcO6PxSXtL9u1qDr-x2BXmIbj3hZwz0D7PUk_iha7jHUCt1atr2SiOm7_TkiKKOeClBiRSpKM3SWpfCETxiYq7myfCPeLoKimRvXe1Z_bl7SdUI7IavKPbgMqdiz8DZT2CwempIkvnO3b7xTSYIeRhXJjqVRG05_xA9pRHsZcrQNBKcD6KTvNzAM1pNwVoL8ydMPjAa2iAvdYDYqrLlDf3DANXTLZuPenf-eU9e-i05h7CtlQ" />
<div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-on-primary font-caption text-caption uppercase tracking-wider">
          Mumbai Studio
        </div>
</div>
<div className="aspect-square overflow-hidden bg-surface-dim group relative">
<img  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Editorial model with sculpted architectural wet-look dark bob hairstyle caught in dramatic studio strobe lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDGtXbvTuijgIwD9cQ7c672-3bMn1CPxiEoeyXczLcscFXio5Z_O23lfzR2WM3XZr67XCwAZoZChtsnwZeRbyGc3XWtSaB4HGtGbJustIgC8cTpG41CaCPgwwlCIe4diEOx8Uvzn9Puc4eJ3K-FCQQGGJugAT0gsuL00XxHJmR6HbROoTozcxsLo5KXLxNqagqaVblbJyjzIAOoza6-4Ud5sVe1XSJt1L6LNtVQ3cCz25MseYenvG9ziA" />
<div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-on-primary font-caption text-caption uppercase tracking-wider">
          Editorial Vol. IV
        </div>
</div>
<div className="aspect-square overflow-hidden bg-surface-dim group relative">
<img  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Artisanal glass bottles of custom hair oils and botanical tinctures lined neatly on warm honed travertine shelf" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBGDoeqGSgMj3vLlVaThFRFo-8fI8oe7D1DKCXxS9hxAOj1dpeGsQg-Z6jiZGw0Zgt52zOBOPp8oM61RlIthjF880F9JKnwTi-yLigP7a6uoHFge2rRmkoSGDh0woUtpGiyfhr4SXIwxlly3qFKRVHjz7B49hyCZZCA4Lv-1Oy3MOMV2I3yDgIgkJfHMqbHXclgHMK5MEOCNUuj8r7PThWSmhjCzfcaGHzoNTOUBmrutmeSL4BoE9sfmA" />
<div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-on-primary font-caption text-caption uppercase tracking-wider">
          Apothecary Bar
        </div>
</div>
<div className="aspect-square overflow-hidden bg-surface-dim group relative">
<img  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Minimalist courtyard garden view from New Delhi atelier with bamboo foliage and dark bronze architectural framing" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCHbXcX5cSBwWjnelNJx9xjDy3ziHxLmODCzlPHGxxXsqbVA7sTKD4lgpJPgd1F_TOHcV-bfUFMPj0g_XbY3Uncm4dLZK8Ua4vvr5_xAjQktDDLeCw8CdE_s_8hMBtnbalMEI6RLU6NU25JHBc-pt49uCKmABbvNw2RrH-tPneeXt-2H6LFiEjRYy7dXfY5tA3xDA26rnbi7SxLE5XUnDeiStgoLNeEUUAotBhYBhP7-Jp5x4hKcaEcpA" />
<div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-on-primary font-caption text-caption uppercase tracking-wider">
          Delhi Courtyard
        </div>
</div>
<div className="aspect-square overflow-hidden bg-surface-dim group relative">
<img  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Master hair stylist hands gracefully sectioning sleek gloss hair during precision haircut in tranquil studio" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDkm22NnE4NMklAhUQ46qctqmMYCGzMZV0MHcy8AEzFBI4y_-Mc5qp2cp-SZAHZ1QJr7YteNfYELIKUmjrzKgYd5Bye4QhO6LDy_eMOMq67ZcxlTofyFUFx1B2GMkJDoMXeZyX3MPvKYMQWOmpbSsDYLEvZT0bhiiZ4ClVuhPQTdHTrc-A6nTmbpEh8x4DiPZxmBXEPrEAAXovC1SuXJQOLUQmoAGRUqitZVIXnjSLmSjeG9PuWk8m7bA" />
<div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-on-primary font-caption text-caption uppercase tracking-wider">
          Atelier Craft
        </div>
</div>
<div className="aspect-square overflow-hidden bg-surface-dim group relative">
<img  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Japanese ceramic tea cup steaming with herbal infusion placed on raw granite stone table next to minimalist studio book" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBPr-gRAoLB_tXWat4Rqm3sNZzqWLu4ArHTL_eiuHvZeieVYnuu9XOsIq7dp1lrBKWp9qyKeGCgbJWyfMCytq_vXU5XzvFZP4go2OXJj4pygdbGBDH8uWL8fGFXka-0RJG2J5tRMDX9L3h2fVLyQzDAJX2hwGZ1I6pe7G4s1MXITH9HICaeaCFt7_icKdpoGpEE81Pyx1o8JR8BgT6rN6vkmcRh1HYzfOgwyDCr_YQ8P6kAxgJOjtiFdQ" />
<div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-on-primary font-caption text-caption uppercase tracking-wider">
          Sensory Ritual
        </div>
</div>
</div>
</section>
{/*  Micro-Interactions Script  */}

</div>
    </main>
  )
}
