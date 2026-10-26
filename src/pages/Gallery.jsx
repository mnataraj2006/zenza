import React, { useState } from 'react'

export default function Gallery({ onNavigate }) {
  const [activeFilter, setActiveFilter] = useState('all')

  return (
    <main className="w-full pt-20 bg-surface min-h-[calc(100vh-20rem)]">
<div className="flex flex-col w-full">
{/*  Top Editorial Header & Curation Narrative  */}
<section className="w-full max-w-[1440px] mx-auto px-margin lg:px-margin-desktop pt-space-xl lg:pt-space-2xl pb-space-lg">
<div className="flex flex-col lg:flex-row lg:items-end justify-between gap-space-lg">
<div className="space-y-space-xs max-w-2xl">
<div className="flex items-center gap-space-sm text-secondary">
<span className="font-label-caps text-label-caps uppercase tracking-widest">Archive No. 04</span>
<span className="w-8 h-[1px] bg-secondary opacity-40"></span>
<span className="font-label-caps text-label-caps uppercase tracking-widest">Seasonal Collection</span>
</div>
<h1 className="font-display-xl text-display-xl tracking-tight text-on-surface uppercase">The Portfolio</h1>
<p className="font-body-lg text-body-lg text-on-surface-variant font-light leading-relaxed pt-space-xs">
          A curated curation of transformative looks, master coloring, and textural artistry created within our studios.
        </p>
</div>
{/*  Live Metric Badges  */}
<div className="flex items-center gap-space-lg bg-surface-container px-space-lg py-space-md self-start lg:self-auto shadow-sm">
<div className="text-left">
<p className="font-headline-sm text-headline-sm text-on-surface font-normal">840+</p>
<p className="font-label-caps text-label-caps uppercase text-on-surface-variant">Archived Looks</p>
</div>
<div className="w-[1px] h-8 bg-outline-variant/30"></div>
<div className="text-left">
<p className="font-headline-sm text-headline-sm text-secondary font-normal">100%</p>
<p className="font-label-caps text-label-caps uppercase text-on-surface-variant">Bespoke Formulations</p>
</div>
</div>
</div>
{/*  Category Pill Filters  */}
<div className="pt-space-xl flex flex-wrap items-center gap-space-xs lg:gap-space-sm" id="filter-container">
  {[
    { id: 'all', label: 'All Works' },
    { id: 'cuts', label: 'Precision Cuts' },
    { id: 'color', label: 'Dimensional Color' },
    { id: 'texture', label: 'Texture & Treatments' },
    { id: 'editorial', label: 'Bridal & Editorial' },
    { id: 'men', label: "Men's Styling" }
  ].map(tab => (
    <button
      key={tab.id}
      type="button"
      onClick={() => setActiveFilter(tab.id)}
      className={`px-space-md py-space-xs font-label-caps text-label-caps uppercase tracking-widest transition-all duration-300 ${
        activeFilter === tab.id
          ? 'bg-primary text-on-primary shadow-sm font-semibold'
          : 'bg-surface-container text-on-surface hover:bg-surface-variant'
      }`}
    >
      {tab.label}
    </button>
  ))}
</div>
</section>
{/*  Editorial Masonry / Dynamic Gallery Grid (12 Items)  */}
<section className="w-full max-w-[1440px] mx-auto px-margin lg:px-margin-desktop pb-space-2xl">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-gutter" id="portfolio-grid">
{/*  Item 1: Large Feature Editorial  */}
<article className="gallery-card lg:col-span-8 group relative overflow-hidden bg-surface-container cursor-pointer min-h-[520px]" data-category="color" style={{ display: (activeFilter === "all" || activeFilter === "color") ? "block" : "none" }}>
<img  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 min-h-[520px]" data-alt="High fashion editorial shot of model with multi-dimensional honey sun-kissed bronde balayage hair falling in loose textured waves against a warm architectural travertine studio background, soft natural sunlight from high side window" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCrwRdeCuHkKWiEKpfBe5QB2nNHl9N5JRgTA7RWQ8M9SD--6Xo8eU5Jk8aGjeaJHfn8mowM-dK6eXnZR3Jyr66n2X34NTSrwCgLLPBOc8x0qubpqSCP02kG2cPUaRcMrP3ylglHQ6FQRKAptkIncGL-_8klBvl__9WiYQiuUVNAcQEcqwXw4PA1hOyVxMU1AtC4YylAATfd9ufu02DlPxDcapNrvGm3vdadQLpBigayjGg-HptWgfPZRQ" />
<div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent opacity-85 group-hover:opacity-95 transition-opacity flex flex-col justify-end p-space-lg text-surface-bright">
<div className="flex items-center justify-between">
<span className="font-label-caps text-label-caps uppercase tracking-widest text-secondary-fixed">Dimensional Color</span>
<span className="font-caption text-caption text-tertiary-fixed-dim">Ref #0941</span>
</div>
<h3 className="font-headline-md text-headline-md tracking-tight text-surface-bright mt-space-xs">Sunkissed Bronde Balayage</h3>
<p className="font-body-sm text-body-sm text-surface-dim mt-1">Master Colorist: Marcus Sterling • Multi-zone glossing &amp; root shadow</p>
<div className="mt-space-md pt-space-xs flex items-center gap-space-sm text-secondary-fixed font-label-caps text-label-caps uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
<span className="material-symbols-outlined text-[18px]">zoom_in</span>
<span>View Full Details &amp; Formula</span>
</div>
</div>
</article>
{/*  Item 2: Vertical Portrait  */}
<article className="gallery-card lg:col-span-4 group relative overflow-hidden bg-surface-container cursor-pointer min-h-[520px]" data-category="cuts" style={{ display: (activeFilter === "all" || activeFilter === "cuts") ? "block" : "none" }}>
<img  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 min-h-[520px]" data-alt="Micro razor sharp architectural bob haircut on a Japanese female model, precision geometric blunt perimeter, glassy dark brunette shine, minimalist concrete atelier backdrop with warm warm wood accents" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD4wO5nopgUtLhuB0e3x2KJ3rNEUjh0HHXLlNlKGu668QBicfhUNci3xn8gb-3iGktSZJJcLSabRHZvol-4qYvw7ribaywatcjMvv7xgaDtxmasGn5IFNr1Chlm43ZMovh54jv1RL1eTyhG0MzvBK0GYCbOmsYTk3Sfx3fnVbkM3BPCdGA4Z6f0ZHW4zH6sMbm9IOFNjZ9BMUluacWZo3cXdZSgK4V4rRUdepkvBIbj-3ycfpIWTmKECA" />
<div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/25 to-transparent opacity-80 group-hover:opacity-95 transition-opacity flex flex-col justify-end p-space-lg text-surface-bright">
<div className="flex items-center justify-between">
<span className="font-label-caps text-label-caps uppercase tracking-widest text-secondary-fixed">Precision Cuts</span>
<span className="font-caption text-caption text-tertiary-fixed-dim">Ref #0942</span>
</div>
<h3 className="font-headline-sm text-headline-sm tracking-tight text-surface-bright mt-space-xs">The Obsidian Sharp Bob</h3>
<p className="font-body-sm text-body-sm text-surface-dim mt-1">Creative Director: Elena Rostova • Feathered dry-cut edge</p>
<div className="mt-space-md pt-space-xs flex items-center gap-space-sm text-secondary-fixed font-label-caps text-label-caps uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
<span className="material-symbols-outlined text-[18px]">zoom_in</span>
<span>View Details</span>
</div>
</div>
</article>
{/*  Item 3: Bridal Editorial  */}
<article className="gallery-card lg:col-span-4 group relative overflow-hidden bg-surface-container cursor-pointer min-h-[420px]" data-category="editorial" style={{ display: (activeFilter === "all" || activeFilter === "editorial") ? "block" : "none" }}>
<img  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 min-h-[420px]" data-alt="Sculptural architectural bridal updo with ethereal soft tendrils, natural silk ribbon interwoven in soft dark brown hair, soft ambient candle glow and linen texture background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCn7KDlXG-afrAwELORmh0IVv4yNG06D7gXte1NHADZ_DKM-QFsk6qrrRQUzcRfDA5tqCvvm-nwn3UbKNrKJJCkkeYeV2zucw1zlPsa2ArGXbNpfW21UL5Io-sOf13Un482uWm7FeI0l7kFBKmqvdYb2U29xj7Vwt26JLhGUimaYrGeTtq3o3QjJuKKumyqDP8lmfYcr9y_L1ISdzugL5z1WHWXzUz6wTk8jbHdIXkwbvQi_G6AF0MJiw" />
<div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity flex flex-col justify-end p-space-md text-surface-bright">
<span className="font-label-caps text-label-caps uppercase tracking-widest text-secondary-fixed">Bridal &amp; Haute Editorial</span>
<h3 className="font-headline-sm text-headline-sm text-surface-bright mt-1">Sculpted Chignon Couture</h3>
<p className="font-body-sm text-body-sm text-surface-dim mt-1">Stylist: Ananya Patel • Hand-pinned structural weave</p>
<div className="mt-space-sm flex items-center gap-space-xs text-secondary-fixed font-label-caps text-label-caps uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
<span className="material-symbols-outlined text-[16px]">visibility</span>
<span>View Case</span>
</div>
</div>
</article>
{/*  Item 4: Men's Styling  */}
<article className="gallery-card lg:col-span-4 group relative overflow-hidden bg-surface-container cursor-pointer min-h-[420px]" data-category="men" style={{ display: (activeFilter === "all" || activeFilter === "men") ? "block" : "none" }}>
<img  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 min-h-[420px]" data-alt="High contrast portrait of a stylish male with clean scissor-over-comb modern taper fade, textured matte finish wavy pompadour, dramatic rim lighting in luxury barber suite" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAhvYkjZvkckHDbKUth2fnZR6_QIvuUa1ddS7nqhltAoXvxPH2zKwmZzG998sSX_34f1Ic7dIhh_kxA-4D9H9tDLoi_VcBdGDHxJzGZ9aR9bYjrTCf0BDb0A0RmmSEwygRRS_p3sF72zIN23oKUAACQqU8tFdsQie9AXDtZpR3-aAyFWZfGzxn2lPYGIBc-QblakLOiRAZ-nsCAdWqbalrK_v5gihG2DEtGGZzv2JSnVu_xARhgyxfkOA" />
<div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity flex flex-col justify-end p-space-md text-surface-bright">
<span className="font-label-caps text-label-caps uppercase tracking-widest text-secondary-fixed">Men's Modern Tailoring</span>
<h3 className="font-headline-sm text-headline-sm text-surface-bright mt-1">Textured Taper &amp; Scissor Fade</h3>
<p className="font-body-sm text-body-sm text-surface-dim mt-1">Senior Barber: Kenneth Thorne • Matte clay profile</p>
<div className="mt-space-sm flex items-center gap-space-xs text-secondary-fixed font-label-caps text-label-caps uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
<span className="material-symbols-outlined text-[16px]">visibility</span>
<span>View Case</span>
</div>
</div>
</article>
{/*  Item 5: Dimensional Color  */}
<article className="gallery-card lg:col-span-4 group relative overflow-hidden bg-surface-container cursor-pointer min-h-[420px]" data-category="color" style={{ display: (activeFilter === "all" || activeFilter === "color") ? "block" : "none" }}>
<img  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 min-h-[420px]" data-alt="Icy pearl blonde dimensional highlights on long layered cashmere hair, luminous cool platinum undertones, luxury salon mirror reflection with subtle champagne lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBpUyPWtSAvHNckVuba_xjgfDBiKAapR0WorbXv-sxJ4GN2NURGtZzgOqZPvsex7IJKBM2Y0Kj261Zmx4tfF73imLALpLIMrnUVcWUROFFbzak5tzgdz-SK_T2JKYiKg98tUN0JWLf6Mluq_99roeJuhapT4w16Q0tkCUgXCyKGgxiEOw040pgzYxpq4CLb6fItekuVQcx0HNx3w6eGhKMjCqJQKEEnU6xQE8XZgwCMnx6WJFXkmFX21w" />
<div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity flex flex-col justify-end p-space-md text-surface-bright">
<span className="font-label-caps text-label-caps uppercase tracking-widest text-secondary-fixed">Dimensional Color</span>
<h3 className="font-headline-sm text-headline-sm text-surface-bright mt-1">Glacier Pearl Luminescence</h3>
<p className="font-body-sm text-body-sm text-surface-dim mt-1">Lead Colorist: Marcus Sterling • Dual-process lift</p>
<div className="mt-space-sm flex items-center gap-space-xs text-secondary-fixed font-label-caps text-label-caps uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
<span className="material-symbols-outlined text-[16px]">visibility</span>
<span>View Case</span>
</div>
</div>
</article>
{/*  Item 6: Texture & Botanical Treatment  */}
<article className="gallery-card lg:col-span-5 group relative overflow-hidden bg-surface-container cursor-pointer min-h-[460px]" data-category="texture" style={{ display: (activeFilter === "all" || activeFilter === "texture") ? "block" : "none" }}>
<img  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 min-h-[460px]" data-alt="Close up macro view of dense defined natural 3C curls with liquid amber serum gloss treatment, rich mahogany undertones, illuminated against warm sand lime-wash studio wall" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCCYgAVrYZruKa_oxmUt9pltQdkbR1z81WNnqTWPONmjhTw8ayeeiYage21R6RgaxT46gczfW4xxMWCGnML1p2PNh12CtpAIBh0DGGHR4dIVKIF9lULEYMghkjUH7JfNFvu3-ry95Yn2jpuLDgMbPR45sY-10AJzZ7_HxVPn7Rj2pHtcZK3PeBB-GhIFpKvCDzHwF0va-uq06o90e1xSW0BkSXahzThhAYNG-YR6RyO75rZF1J2E_iSMg" />
<div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity flex flex-col justify-end p-space-lg text-surface-bright">
<span className="font-label-caps text-label-caps uppercase tracking-widest text-secondary-fixed">Texture &amp; Treatments</span>
<h3 className="font-headline-md text-headline-md text-surface-bright mt-1">Botanical Curl Restoration</h3>
<p className="font-body-sm text-body-sm text-surface-dim mt-1">Texture Specialist: Maya Sen • Bio-peptide hydration seal</p>
<div className="mt-space-md flex items-center gap-space-xs text-secondary-fixed font-label-caps text-label-caps uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
<span className="material-symbols-outlined text-[16px]">zoom_in</span>
<span>Treatment Protocol</span>
</div>
</div>
</article>
{/*  Item 7: High-Fashion Voluminous Waves  */}
<article className="gallery-card lg:col-span-7 group relative overflow-hidden bg-surface-container cursor-pointer min-h-[460px]" data-category="editorial" style={{ display: (activeFilter === "all" || activeFilter === "editorial") ? "block" : "none" }}>
<img  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 min-h-[460px]" data-alt="Dramatic side profile of voluminous 1970s revival brushed Hollywood waves in rich dark chocolate brown hair, silk trench coat collar, warm ambient studio lamp lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBLysNl3DoZznFY6YbfHbpADtLKbvBr50AJMegaJ6N7WawjzxaJiGocDE-GZsLf69ImEMJNQ9hhQoXpCzNkvEwpRYgc_V_KG1tLoR4Hmb3C1Y41HDmBGHC04aKDwkWnndFvQDtZDoTG5NgKE3AKKnIbBTNNogOCPfuske5Q298QZOUBm77F6RJhQxZdO3buuizUsyZGPm46ybhupQcnLg1psVco7JZfDqqs_sU6-wObJY2D0qlVX-iq2w" />
<div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity flex flex-col justify-end p-space-lg text-surface-bright">
<div className="flex items-center justify-between">
<span className="font-label-caps text-label-caps uppercase tracking-widest text-secondary-fixed">Editorial Atelier</span>
<span className="font-caption text-caption text-tertiary-fixed-dim">Vogue India Session</span>
</div>
<h3 className="font-headline-md text-headline-md text-surface-bright mt-1">Velvet Hollywood Cascade</h3>
<p className="font-body-sm text-body-sm text-surface-dim mt-1">Session Stylist: Elena Rostova • Thermal roller setting &amp; bespoke sheen</p>
<div className="mt-space-md flex items-center gap-space-xs text-secondary-fixed font-label-caps text-label-caps uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
<span className="material-symbols-outlined text-[16px]">zoom_in</span>
<span>View Full Editorial</span>
</div>
</div>
</article>
{/*  Item 8: Precision French Fringe  */}
<article className="gallery-card lg:col-span-4 group relative overflow-hidden bg-surface-container cursor-pointer min-h-[400px]" data-category="cuts" style={{ display: (activeFilter === "all" || activeFilter === "cuts") ? "block" : "none" }}>
<img  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 min-h-[400px]" data-alt="Chic Parisian curtain fringe bangs with soft shoulder-length shag haircut on brunette model, relaxed effortless texture, daylight through tall atelier loft windows" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCq4F-BpLgTHcOkl6ssjDsHTRJbW-dprX_wmkpK4NgTu9r7CMSxeaiDfCYX-NOcwgInErvyZOsGH47CDoDKjsLUkyM1HhOJF9fOiyG5uC5Urbe-k5lRGzR9YMBoA71hIMk-s_ZjEBhiIPHZ6SEDmJxM36n6t7Oj7aj7bFK222ImVk5K3Ia-laQSiVwss9gVuun3zBQV4VizAAkjizps5yKsEMCS2Pt6CS2nMaRdX14SMiuiFc4hTNORXg" />
<div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity flex flex-col justify-end p-space-md text-surface-bright">
<span className="font-label-caps text-label-caps uppercase tracking-widest text-secondary-fixed">Precision Cuts</span>
<h3 className="font-headline-sm text-headline-sm text-surface-bright mt-1">Parisian Curtain Shag</h3>
<p className="font-body-sm text-body-sm text-surface-dim mt-1">Stylist: Julien Laurent • Freehand razor graduation</p>
<div className="mt-space-sm flex items-center gap-space-xs text-secondary-fixed font-label-caps text-label-caps uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
<span className="material-symbols-outlined text-[16px]">visibility</span>
<span>View Style</span>
</div>
</div>
</article>
{/*  Item 9: Dimensional Copper Melt  */}
<article className="gallery-card lg:col-span-4 group relative overflow-hidden bg-surface-container cursor-pointer min-h-[400px]" data-category="color" style={{ display: (activeFilter === "all" || activeFilter === "color") ? "block" : "none" }}>
<img  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 min-h-[400px]" data-alt="Molten auburn and spiced copper balayage melt on long straight silk-pressed hair, liquid reflective amber tones, muted warm clay background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCyYWK53x_2hp1ARmyRSATA5auPzOb4auKPjAVtjViWdtBedYiNTpNCS96aPfVLklNyAheUCd9GJrUZXvkVuchFYVWWC1t56tlLP9s3OTrOSxbKs8cq4cTjk4pl78wKMAwl_BDlQ3mm1rQgvsDxhu3GPc0ELUGg4zRPDbe-yDyEQkniOcAAYMd6zg4eTGtHX3pWpQ5TXmOV5XJTSl-LwjLpARdPZDkNVHWMfqhM9sR9M_RvQbpcMfn7Lw" />
<div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity flex flex-col justify-end p-space-md text-surface-bright">
<span className="font-label-caps text-label-caps uppercase tracking-widest text-secondary-fixed">Dimensional Color</span>
<h3 className="font-headline-sm text-headline-sm text-surface-bright mt-1">Autumn Spiced Amber Melt</h3>
<p className="font-body-sm text-body-sm text-surface-dim mt-1">Colorist: Marcus Sterling • Triple-tone foil placement</p>
<div className="mt-space-sm flex items-center gap-space-xs text-secondary-fixed font-label-caps text-label-caps uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
<span className="material-symbols-outlined text-[16px]">visibility</span>
<span>View Style</span>
</div>
</div>
</article>
{/*  Item 10: Keratin Infusion Therapy  */}
<article className="gallery-card lg:col-span-4 group relative overflow-hidden bg-surface-container cursor-pointer min-h-[400px]" data-category="texture" style={{ display: (activeFilter === "all" || activeFilter === "texture") ? "block" : "none" }}>
<img  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 min-h-[400px]" data-alt="Glass hair aesthetic, ultra-sleek mirror finish dark raven locks swinging in motion, pure luminescence, studio setting with gentle golden backlight reflection" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDIyrsDemSyaibgtIfnpr8ju9Kl_0nOgrFpA5nnsVxygrZp6ays-j8MbGeMz_pwey-Ycyrb5Lhj-zY3-IqJ2txvmMDeKSqtKPtfsEMxQwRGjD2I_fQVz87iL0N7eYnT8h5K6Q_a5yGHmlwpCA_MVZ2J49mcNV80kRpmmGIkFcmdPG__gGHfRc9BR5P63EkVADJFrhUuhLSuJ_aMXUscGB8rjRinxHoogShF7z29GztXItDG0-y9sWFtqA" />
<div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity flex flex-col justify-end p-space-md text-surface-bright">
<span className="font-label-caps text-label-caps uppercase tracking-widest text-secondary-fixed">Texture &amp; Treatments</span>
<h3 className="font-headline-sm text-headline-sm text-surface-bright mt-1">Liquid Silk Glass Polish</h3>
<p className="font-body-sm text-body-sm text-surface-dim mt-1">Keratin Specialist: Maya Sen • Nanocavitation bonding</p>
<div className="mt-space-sm flex items-center gap-space-xs text-secondary-fixed font-label-caps text-label-caps uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
<span className="material-symbols-outlined text-[16px]">visibility</span>
<span>View Style</span>
</div>
</div>
</article>
{/*  Item 11: Men's Clean Crop  */}
<article className="gallery-card lg:col-span-6 group relative overflow-hidden bg-surface-container cursor-pointer min-h-[420px]" data-category="men" style={{ display: (activeFilter === "all" || activeFilter === "men") ? "block" : "none" }}>
<img  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 min-h-[420px]" data-alt="Textured French crop men hairstyle with blunt micro fringe and low temple fade, male model with defined jawline in dark linen polo, warm architectural concrete studio setting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB_dse2cGE6Zqockbmnu_aW0qlW5DwMZtdIm2VAXEemdSto3wB_O9NIzmMJw2LEi5cG1dcbfW-lnRH5pgK4bj0QZlpxBr5DWXmu_Niqlnhy86OdkzfgHV2rFnK4gax3nWIJHDSBxOAzIHPuUdWd1cVx6dfK9LdieGYkDp8kseOE6Mf13ZVL1EbbC8MMNa_Zr4jn12qfMag_auTTWt9J7w3Eh8YbFXuPLgD36lE83FWpt62_r-0GVskHSA" />
<div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity flex flex-col justify-end p-space-lg text-surface-bright">
<span className="font-label-caps text-label-caps uppercase tracking-widest text-secondary-fixed">Men's Styling</span>
<h3 className="font-headline-md text-headline-md text-surface-bright mt-1">Architectural Micro Crop</h3>
<p className="font-body-sm text-body-sm text-surface-dim mt-1">Barber Stylist: Kenneth Thorne • Point-cut weight removal</p>
<div className="mt-space-md flex items-center gap-space-xs text-secondary-fixed font-label-caps text-label-caps uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
<span className="material-symbols-outlined text-[16px]">zoom_in</span>
<span>Full Profile</span>
</div>
</div>
</article>
{/*  Item 12: Bridal Headpiece Editorial  */}
<article className="gallery-card lg:col-span-6 group relative overflow-hidden bg-surface-container cursor-pointer min-h-[420px]" data-category="editorial" style={{ display: (activeFilter === "all" || activeFilter === "editorial") ? "block" : "none" }}>
<img  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 min-h-[420px]" data-alt="Intricate South Asian contemporary bridal styling, interwoven jasmine buds and gold filigree jewelry through low textured braid, warm terracotta and brass atelier decor" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDbvdx4NcgDC67_ahc5zPLyKNQIrePmpDSg_WVs8zm1j-z75-AWi8weproVpZp2GIy8c1JRWLv-DKu8dBkVLBXjLyXIknbSFe_1ne03vixMKFwxlC-q1U_p043MFs6yxUwLBwqH7PgHmOuIv3306sHek_lIad5QcVaEKzpknti4YzY9zc_VAKoagk_RoUhItlCLkGvZMMI_i1WRnBM3eZxp9bnWjoJfMmoIg4KIldLp2tmrpp-_cEai9w" />
<div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity flex flex-col justify-end p-space-lg text-surface-bright">
<span className="font-label-caps text-label-caps uppercase tracking-widest text-secondary-fixed">Bridal &amp; Editorial</span>
<h3 className="font-headline-md text-headline-md text-surface-bright mt-1">The Contemporary Heirloom Braid</h3>
<p className="font-body-sm text-body-sm text-surface-dim mt-1">Principal Artist: Ananya Patel • Botanical integration</p>
<div className="mt-space-md flex items-center gap-space-xs text-secondary-fixed font-label-caps text-label-caps uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
<span className="material-symbols-outlined text-[16px]">zoom_in</span>
<span>Editorial Spread</span>
</div>
</div>
</article>
</div>
</section>
{/*  Featured Transformation Spotlight: Case Study  */}
<section className="w-full bg-surface-container-high py-space-2xl">
<div className="max-w-[1440px] mx-auto px-margin lg:px-margin-desktop">
<div className="flex items-center gap-space-xs text-secondary mb-space-xs">
<span className="material-symbols-outlined text-[18px]">auto_awesome</span>
<span className="font-label-caps text-label-caps uppercase tracking-widest">Case Study • Atelier Mumbai</span>
</div>
<div className="flex flex-col lg:flex-row lg:items-end justify-between gap-space-md pb-space-xl">
<h2 className="font-headline-lg text-headline-lg tracking-tight text-on-surface">The Transmutation of Tone &amp; Volume</h2>
<span className="font-caption text-caption text-on-surface-variant max-w-sm">From compromised brassy pigment to luminous, weightless champagne micro-dimension.</span>
</div>
{/*  Before / After Comparative Grid & Formulation Logbook  */}
<div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-desktop">
{/*  Dual Comparative Imagery  */}
<div className="lg:col-span-7 flex flex-col sm:flex-row gap-space-md">
<div className="w-full sm:w-1/2 flex flex-col space-y-space-xs">
<div className="relative overflow-hidden aspect-[3/4] bg-surface-variant shadow-sm">
<img  className="w-full h-full object-cover grayscale opacity-90" data-alt="Before client photo showing uneven faded brassy orange bleached hair with dry frizzy ends, taken under standard salon consultation light" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD1I3ueZqPQB-h0kmkmOxrT8SCohAgIa7GadYeSmu3_bhx8FszEdN9zvjihTYtFXFYrPdZC8lvzqdy8ZPGD1_YFhlPtwGH9YFZpHz3Q0kG_xQ1NXZ6XC3J01hJglvS11QrP19lYBpLZwB14n332kkNOlprZygLTMMh11I-7fy98tAXHFc_POy-CnobRBEgi7MtG4ZCi2zsxBO7XrQScjlOoGOzv2v2meN3dU2th1UdnaYO7maFq9XC7oA" />
<div className="absolute top-space-sm left-space-sm bg-primary/80 backdrop-blur-sm px-space-sm py-1">
<span className="font-label-caps text-label-caps uppercase text-surface-bright tracking-widest">Initial State</span>
</div>
</div>
<p className="font-caption text-caption text-on-surface-variant pt-1">Compromised cuticle integrity with +8 levels of warm residual brass.</p>
</div>
<div className="w-full sm:w-1/2 flex flex-col space-y-space-xs">
<div className="relative overflow-hidden aspect-[3/4] bg-surface shadow-sm">
<img  className="w-full h-full object-cover" data-alt="After transformation photo showing lustrous healthy champagne blonde babylights with soft curtain fringe and mirror gloss blowout, rich dimensionality and velvety movement" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA_Zqb2v3tqDd2MwJOMsBrNUxLUM3c8h7mleLApD_Ia0ipf4YgVM7Mcrt4a3P4x9mcctHR5TH1Dka8npY9C69SekbosjMmGJglMvH7Bxn7hnVCxH7IOMeTfJPoU8HAwwqdxBKvr9HuErQhubtTuTZmE33-_Ce2mzDFySk9Wpc0OaDqeDnwXvPdzKtdc9GKecui_BReWAmR3Pt9s9tgG4TfurzGrBPwKEPp4lBrPmdPgpOdhnIrs5ocPIw" />
<div className="absolute top-space-sm left-space-sm bg-secondary px-space-sm py-1 shadow-sm">
<span className="font-label-caps text-label-caps uppercase text-on-secondary tracking-widest">ZENZA Result</span>
</div>
</div>
<p className="font-caption text-caption text-secondary font-medium pt-1">Bond-reconstructed structure with balanced neutral beige tones.</p>
</div>
</div>
{/*  Technical Formulation Notes & Client Consultation Story  */}
<div className="lg:col-span-5 bg-surface-container-lowest p-space-xl flex flex-col justify-between shadow-sm">
<div className="space-y-space-md">
<div>
<span className="font-label-caps text-label-caps uppercase tracking-widest text-secondary">Client Narrative</span>
<h3 className="font-headline-md text-headline-md text-on-surface mt-1">Priya M., Mumbai</h3>
<p className="font-body-md text-body-md text-on-surface-variant font-light mt-space-xs leading-relaxed">
                "After multiple chemical processes elsewhere, my hair had lost its natural swing and luster. Marcus and the team mapped out a three-stage restorative protocol rather than an aggressive quick-fix. The result felt miraculous."
              </p>
</div>
{/*  Formulation Specs  */}
<div className="space-y-space-sm pt-space-xs">
<span className="font-label-caps text-label-caps uppercase tracking-widest text-on-surface">Formula &amp; Method Specification</span>
<div className="p-space-sm bg-surface-container-low space-y-space-xs">
<div className="flex justify-between items-center text-body-sm font-body-sm">
<span className="text-on-surface-variant">Decolorizing Matrix</span>
<span className="font-medium text-on-surface">Gentle Clay 20-Vol + Bond-Builder</span>
</div>
<div className="flex justify-between items-center text-body-sm font-body-sm">
<span className="text-on-surface-variant">Tonal Neutralizer</span>
<span className="font-medium text-on-surface">9.12 Champagne Ice Demi-Gloss</span>
</div>
<div className="flex justify-between items-center text-body-sm font-body-sm">
<span className="text-on-surface-variant">Cuticle Infusion</span>
<span className="font-medium text-on-surface">Japanese Ultrasonic Protein Shield</span>
</div>
<div className="flex justify-between items-center text-body-sm font-body-sm">
<span className="text-on-surface-variant">Session Duration</span>
<span className="font-medium text-on-surface">4 Hours, 15 Minutes</span>
</div>
</div>
</div>
</div>
{/*  Stylist Credits  */}
<div className="pt-space-md flex items-center justify-between">
<div className="flex items-center gap-space-sm">
<div className="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center text-on-secondary-container font-headline-sm">
                MS
              </div>
<div>
<p className="font-title-md text-title-md text-on-surface">Marcus Sterling</p>
<p className="font-caption text-caption text-on-surface-variant">Senior Artistic Director</p>
</div>
</div>
<a className="font-label-caps text-label-caps uppercase text-secondary tracking-widest hover:text-on-surface transition-colors flex items-center gap-1" href="#">
              Book Marcus <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
</a>
</div>
</div>
</div>
</div>
</section>
{/*  Studio Atmosphere Visual Strip  */}
<section className="w-full max-w-[1440px] mx-auto px-margin lg:px-margin-desktop py-space-2xl">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md mb-space-lg">
<div>
<p className="font-label-caps text-label-caps uppercase tracking-widest text-secondary">The Sanctuaries</p>
<h2 className="font-headline-lg text-headline-lg tracking-tight text-on-surface mt-1">Atmosphere of Stillness</h2>
</div>
<p className="font-body-md text-body-md text-on-surface-variant max-w-md font-light">
        Every appointment is housed within sensory calm: sound-insulated wash alcoves, filtered amber daylight, and private refreshment pavilions.
      </p>
</div>
{/*  3-Part Strip Grid  */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
{/*  Sanctuary 1  */}
<div className="group relative overflow-hidden bg-surface-container min-h-[360px] shadow-sm">
<img  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 min-h-[360px]" data-alt="Quiet private hair wash suite with reclining black leather washbeds, dim soothing mood lights, dark textured stone walls, and warm indirect floor illumination" src="https://lh3.googleusercontent.com/aida-public/AB6AXuChNkkXV_tcc3zH4oeaOGV-imGwH1XCNGuGBA3Gou_wBqAuq9im_xNcg3Mswc2BU1SBUaJnaq6LBHM_k4ri4jQaeyQjDyowPKvzqgKiuKu4lGcKyIbOd2UcOEMsleHHqJK-0_d4jN6zvWC1D7vDTGQVGSrA_Ib7P5aR8X-qLWYmq42jhtArzIIHUOgfu8Js9LK7AL0hr3ZcNKs7Dt5xaozsI-Mb7HE1n35doHUYDzwaA2KedoLegFg-aQ" />
<div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent flex flex-col justify-end p-space-md text-surface-bright">
<span className="font-label-caps text-label-caps uppercase tracking-widest text-secondary-fixed">Zone 01</span>
<h4 className="font-headline-sm text-headline-sm text-surface-bright mt-1">Sensory Wash Sanctuary</h4>
<p className="font-caption text-caption text-tertiary-fixed-dim">Head spa shiatsu therapy &amp; chromotherapy lighting</p>
</div>
</div>
{/*  Sanctuary 2  */}
<div className="group relative overflow-hidden bg-surface-container min-h-[360px] shadow-sm">
<img  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 min-h-[360px]" data-alt="Spacious luxury minimalist styling station with large arched brass full length mirrors, fluted light oak woodwork, clean marble counter, and soft focused warm pendant lights" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD3AYz_I-Xb6OYd5JyadJsHawqOKyOswRSV8U3LWlLVuwc39ZZ9SI0mARzddMESFg--t3rIGgZaYcN3ygJtVAFW6kfVRT3C9p-es5Ijs_Ym8FrtM_ged7mKhLTD90WuqLxofE-k9Rt-l1cN3HolAiZ3X3Tq2P82OWNhqsmuf9wNEjfR4DtvxfGgVIOjLNozMVJp2gztxQI5qxvMzfMrIzQKxL1iCYDwPuQEQaIHouKfVaMiupqZdQcOiQ" />
<div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent flex flex-col justify-end p-space-md text-surface-bright">
<span className="font-label-caps text-label-caps uppercase tracking-widest text-secondary-fixed">Zone 02</span>
<h4 className="font-headline-sm text-headline-sm text-surface-bright mt-1">The Bespoke Mirror Bays</h4>
<p className="font-caption text-caption text-tertiary-fixed-dim">Color-calibrated 98 CRI lighting for true daylight tonality</p>
</div>
</div>
{/*  Sanctuary 3  */}
<div className="group relative overflow-hidden bg-surface-container min-h-[360px] shadow-sm">
<img  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 min-h-[360px]" data-alt="Sophisticated espresso and herbal tea lounge inside luxury salon with travertine stone bar, curated design magazines, linen armchairs and warm earthen ceramics" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBKlRzi0I7FNGJj6hE3nSeNAk4LRuvVxZgRVgOk7Bai5SX3cQ_Lpd22JYViNxFrbXbwfoOfXbmj5J5VuMU9-vGIYvgxoye5-HuEsa2fxkw5I1wIv8Sm18S5U12riu6oLqr1yMhn22FVL0meMiYLhKAPS6wgQGnr_7bYajKiB7J6M18MzTKq-D2Sc_wyfLTYeqFOdSRMs7tRmKRySOgDdRlS_ch4K5_-fWA_Vx76UkGGW0OhQ-NZUlMP4Q" />
<div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent flex flex-col justify-end p-space-md text-surface-bright">
<span className="font-label-caps text-label-caps uppercase tracking-widest text-secondary-fixed">Zone 03</span>
<h4 className="font-headline-sm text-headline-sm text-surface-bright mt-1">Botanical Beverage Lounge</h4>
<p className="font-caption text-caption text-tertiary-fixed-dim">Artisanal single-origin pour-overs and cold-pressed elixirs</p>
</div>
</div>
</div>
</section>
{/*  Interactive Lightbox Modal  */}
<div className="fixed inset-0 z-50 bg-primary/95 backdrop-blur-md hidden opacity-0 transition-opacity duration-300 flex items-center justify-center p-space-md lg:p-space-xl" id="lightbox-modal">
<div className="relative w-full max-w-5xl bg-surface-container-lowest text-on-surface shadow-xl flex flex-col md:flex-row overflow-hidden max-h-[90vh]">
{/*  Close Button  */}
<button className="absolute top-space-md right-space-md z-20 w-10 h-10 bg-primary/80 text-surface-bright flex items-center justify-center hover:bg-primary transition-colors" id="lightbox-close" type="button">
<span className="material-symbols-outlined text-[20px]">close</span>
</button>
{/*  Modal Image  */}
<div className="w-full md:w-3/5 bg-surface-dim relative flex items-center justify-center overflow-hidden">
<img  className="w-full h-full object-cover max-h-[500px] md:max-h-[700px]" data-alt="Enlarged detailed high fashion editorial salon look with pristine focus and soft golden studio backdrop" id="lightbox-img" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBv9yGbIlAsXl4PmzjgCUxfSeGqNmL-8rEel5Z2YUa-x8frzl4qJ4d4VO9YCvWafSa4sZucn4CS5CQ-CNyiL5MSKksM1bohN7spBLpBE2oNglIqntGfPsSgCgmtiz6dtiVvxwVv4WBulqwXqoI8RS1nUJ8nkBZjuF4SaNHFmzWtTy-t0p2l9m4jNid1OiHrKO7xu5Tpe2QWT94ceZUr6Zl5M5AkeK29fsLnqlvpnmAB8yJe_Yav_UBWHw" />
</div>
{/*  Modal Info Details  */}
<div className="w-full md:w-2/5 p-space-lg lg:p-space-xl flex flex-col justify-between overflow-y-auto">
<div className="space-y-space-md">
<div>
<span className="font-label-caps text-label-caps uppercase tracking-widest text-secondary" id="lightbox-cat">Category</span>
<h3 className="font-headline-md text-headline-md text-on-surface mt-1" id="lightbox-title">Look Title</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1" id="lightbox-stylist">Stylist / Treatment Details</p>
</div>
<div className="space-y-space-xs pt-space-xs font-body-sm text-body-sm text-on-surface-variant">
<p><strong className="text-on-surface">Consultation Focus:</strong> Tailored face-framing angles matching bone structure and personal daily maintenance routine.</p>
<p><strong className="text-on-surface">Formulation Notes:</strong> Ammonia-free oil delivery system infused with argan and botanical squalane.</p>
<p><strong className="text-on-surface">Recommended Maintenance:</strong> 8–10 weeks for toner refresh, 6 weeks for perimeter shaping.</p>
</div>
</div>
<div className="pt-space-lg space-y-space-xs">
<a className="w-full block text-center bg-primary text-on-primary py-space-sm font-label-caps text-label-caps uppercase tracking-widest hover:bg-secondary transition-colors" href="#">
            Reserve This Stylist
          </a>
<p className="font-caption text-caption text-center text-outline-variant">Complimentary initial 15-minute consultation included.</p>
</div>
</div>
</div>
</div>
{/*  Seamless Conversion CTA Section  */}
<section className="w-full bg-secondary text-on-secondary py-space-2xl">
<div className="max-w-[1440px] mx-auto px-margin lg:px-margin-desktop">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
<div className="lg:col-span-8 space-y-space-sm">
<div className="flex items-center gap-space-xs">
<span className="w-6 h-[1px] bg-secondary-fixed"></span>
<span className="font-label-caps text-label-caps uppercase tracking-widest text-secondary-fixed">Your Transformation Begins</span>
</div>
<h2 className="font-display-lg text-display-lg tracking-tight font-normal leading-tight">Like What You See?<br />Book Your Studio Stylist.</h2>
<p className="font-body-lg text-body-lg text-secondary-fixed font-light max-w-xl pt-space-xs">
            Our atelier seats are intentionally limited to preserve focused, unhurried attention for every guest. Reserve your personal styling experience today.
          </p>
</div>
<div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-space-md justify-end">
<a className="w-full text-center bg-surface-bright text-on-surface px-space-xl py-space-md font-label-caps text-label-caps uppercase tracking-widest hover:bg-secondary-fixed transition-colors shadow-md" href="#">
            Schedule Appointment
          </a>
<a className="w-full text-center bg-transparent text-surface-bright border border-surface-bright/40 px-space-xl py-space-md font-label-caps text-label-caps uppercase tracking-widest hover:bg-surface-bright hover:text-on-surface transition-colors" href="#">
            Consult via WhatsApp
          </a>
</div>
</div>
</div>
</section>
{/*  Interactive Micro-Interactions Script  */}

</div>
    </main>
  )
}
