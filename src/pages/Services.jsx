import React, { useState } from 'react'

export default function Services({ onNavigate }) {
  const [activeFilter, setActiveFilter] = useState('all')

  return (
    <main className="w-full pt-20 bg-surface min-h-[calc(100vh-20rem)]">
<div className="flex flex-col w-full">
{/*  Editorial Header Section  */}
<section className="w-full max-w-[1440px] mx-auto px-margin lg:px-margin-desktop pt-space-xl pb-space-lg">
<div className="flex flex-col lg:flex-row lg:items-end justify-between gap-gutter pb-space-lg">
<div className="max-w-2xl space-y-space-xs">
<div className="flex items-center gap-space-sm text-secondary">
<span className="font-label-caps text-label-caps uppercase tracking-widest">The Portfolio &amp; Treatment Menu</span>
<span className="w-8 h-[1px] bg-secondary/40"></span>
<span className="font-label-caps text-label-caps uppercase text-on-surface-variant/70">Atelier Volume 04</span>
</div>
<h1 className="font-display-xl text-display-xl tracking-tight text-on-surface">OUR CRAFT &amp; SERVICES</h1>
<p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl pt-space-xs">
          Bespoke haircare, architectural precision cuts, and master color alchemy tailored to your individual aesthetic.
        </p>
</div>
<div className="flex items-center gap-gutter self-start lg:self-end text-right">
<div className="hidden md:flex flex-col text-left">
<span className="font-label-caps text-label-caps uppercase text-secondary">Flagship Ateliers</span>
<span className="font-caption text-caption text-on-surface-variant">Mumbai • New Delhi</span>
</div>
<div className="h-10 w-[1px] bg-surface-dim hidden md:block"></div>
<div className="flex flex-col text-left">
<span className="font-label-caps text-label-caps uppercase text-secondary">Formula Standard</span>
<span className="font-caption text-caption text-on-surface-variant">Davines • Oribe Gold</span>
</div>
</div>
</div>
{/*  Category Filter Bar  */}
<div className="w-full overflow-x-auto py-space-sm scrollbar-none">
<div className="flex items-center gap-space-xs min-w-max" id="service-filters">
  {[
    { id: 'all', label: 'All Services' },
    { id: 'precision-haircuts', label: 'Precision Haircuts' },
    { id: 'color-highlights', label: 'Color & Highlights' },
    { id: 'keratin-texture', label: 'Keratin & Texture' },
    { id: 'scalp-hair-spa', label: 'Scalp & Hair Spa' },
    { id: 'bridal-event', label: 'Bridal & Red Carpet' },
    { id: 'mens-grooming', label: "Men's Grooming" }
  ].map(tab => (
    <button
      key={tab.id}
      type="button"
      onClick={() => setActiveFilter(tab.id)}
      className={`px-space-md py-space-sm font-label-caps text-label-caps uppercase tracking-widest transition-all duration-200 ${
        activeFilter === tab.id
          ? 'bg-primary text-on-primary shadow-sm font-semibold'
          : 'bg-surface-container text-on-surface hover:bg-surface-variant'
      }`}
    >
      {tab.label}
    </button>
  ))}
</div>
</div>
</section>
{/*  Editorial Services Roster / Bento Grid  */}
<section className="w-full max-w-[1440px] mx-auto px-margin lg:px-margin-desktop py-space-lg">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter" id="service-grid">
{/*  Item 1: Precision Cut  */}
<article className="service-item group flex flex-col bg-surface-container-low transition-all duration-300 hover:bg-surface-container-lowest" data-category="precision-haircuts" style={{ display: (activeFilter === "all" || activeFilter === "precision-haircuts") ? "flex" : "none" }}>
<div className="relative w-full aspect-[4/5] overflow-hidden bg-surface-variant">
<img  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" data-alt="High-fashion editorial portrait of a woman with sharp architectural blunt bob haircut, platinum blonde tone, photographed in natural Parisian morning light with soft shadows, minimalist aesthetic, warm ivory and muted beige background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDwppy_OvwBTItI6oG93EMuLZf3miQMLr81CKTaq8QVHg0ygy9InavaTDUzxRzwH3FH95naKyjjoVl45T2qnIu414X_m7QT_qmMRto23KifpYN69sHvh83uLOI92eIneiGeQd57aajIokc9TGlcMimOXsHK644MIPePFnfN6lfS5g9NqcRJg14zjYc1Q0dUuoDLYDgDW0sCpJsCwlvfEJ09Au-ZjQCYWpm8bTjFnVuJgjUURU0F4SPQjA" />
<div className="absolute top-4 left-4 bg-tertiary-container/90 backdrop-blur-sm text-surface-bright px-3 py-1 font-label-caps text-label-caps uppercase tracking-widest">
            Haircut • Director
          </div>
<div className="absolute bottom-4 right-4 bg-surface-bright text-on-surface px-3 py-1 font-caption text-caption shadow-sm flex items-center gap-1">
<span className="material-symbols-outlined text-[14px]">schedule</span> 75 mins
          </div>
</div>
<div className="p-space-lg flex flex-col flex-grow justify-between gap-space-md">
<div className="space-y-space-xs">
<div className="flex justify-between items-baseline gap-2">
<h3 className="font-headline-sm text-headline-sm text-on-surface">Atelier Director Cut</h3>
<span className="font-title-md text-title-md text-secondary whitespace-nowrap">₹4,500</span>
</div>
<p className="font-body-md text-body-md text-on-surface-variant">
              Comprehensive geometric consultation, customized dry sculpting, botanical hair bath, tailored scalp press, and master structural blow-dry.
            </p>
</div>
<div className="pt-space-sm flex items-center justify-between">
<span className="font-label-caps text-label-caps uppercase text-secondary">Mumbai &amp; Delhi</span>
<button className="book-service-btn bg-primary text-on-primary px-space-md py-space-sm font-label-caps text-label-caps uppercase tracking-widest hover:bg-secondary transition-colors" data-service-name="Atelier Director Cut" data-service-price="₹4,500" type="button">
              Book Service
            </button>
</div>
</div>
</article>
{/*  Item 2: Senior Cut  */}
<article className="service-item group flex flex-col bg-surface-container-low transition-all duration-300 hover:bg-surface-container-lowest" data-category="precision-haircuts" style={{ display: (activeFilter === "all" || activeFilter === "precision-haircuts") ? "flex" : "none" }}>
<div className="relative w-full aspect-[4/5] overflow-hidden bg-surface-variant">
<img  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" data-alt="Close up fine hair photography showcasing effortless textured layers on a model with honey-toned wavy strands, warm studio light, editorial editorial beauty shot against warm sand background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA6_Vc2io3XewABJSCyLK24reVrjQA9QQ4L9mSlKY0qy73r837Yu0EKS8aeRLqYEJHMMkOf7Um6lCxgZidjUfWi8ea9YcfAX1pRdgUItYKSX2EKaZmbFt49EVbMBY3dBzkdoy0TZyU11MOYKu0LbM2wAeopnV3J8gLsf3qBK_Zumtw8gycERcF--9QDAVOsvoJ2lUpsMmOEEo6VN0YruFp103wIh3Nidxpn7A2wdiwV7FcAO5kezkSEnA" />
<div className="absolute top-4 left-4 bg-tertiary-container/90 backdrop-blur-sm text-surface-bright px-3 py-1 font-label-caps text-label-caps uppercase tracking-widest">
            Haircut • Senior Stylist
          </div>
<div className="absolute bottom-4 right-4 bg-surface-bright text-on-surface px-3 py-1 font-caption text-caption shadow-sm flex items-center gap-1">
<span className="material-symbols-outlined text-[14px]">schedule</span> 60 mins
          </div>
</div>
<div className="p-space-lg flex flex-col flex-grow justify-between gap-space-md">
<div className="space-y-space-xs">
<div className="flex justify-between items-baseline gap-2">
<h3 className="font-headline-sm text-headline-sm text-on-surface">Senior Stylist Cut &amp; Blowdry</h3>
<span className="font-title-md text-title-md text-secondary whitespace-nowrap">₹2,800</span>
</div>
<p className="font-body-md text-body-md text-on-surface-variant">
              Anatomic layer framing designed around facial symmetry, accompanied by Davines nourishing cleansing and bespoke voluminous finishing.
            </p>
</div>
<div className="pt-space-sm flex items-center justify-between">
<span className="font-label-caps text-label-caps uppercase text-secondary">All Stylists</span>
<button className="book-service-btn bg-primary text-on-primary px-space-md py-space-sm font-label-caps text-label-caps uppercase tracking-widest hover:bg-secondary transition-colors" data-service-name="Senior Stylist Cut &amp; Blowdry" data-service-price="₹2,800" type="button">
              Book Service
            </button>
</div>
</div>
</article>
{/*  Item 3: Bespoke Balayage  */}
<article className="service-item group flex flex-col bg-surface-container-low transition-all duration-300 hover:bg-surface-container-lowest" data-category="color-highlights" style={{ display: (activeFilter === "all" || activeFilter === "color-highlights") ? "flex" : "none" }}>
<div className="relative w-full aspect-[4/5] overflow-hidden bg-surface-variant">
<img  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" data-alt="Luxury fashion model photographed from the back displaying seamless hand-painted champagne balayage highlights blending into dark espresso roots, soft silk waves, magazine aesthetic" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDfgtHWZd1Qy3Co4KlzvTHbOG46lT60jLVBbelflu1TC6oT3GLzv9W0DqkOfz0Xmayo0YY8fdWEitOTKud5K1zW8HQRfjzz-rqQvELD1ylTH-tAx0dwv2Vz4c4nZ3N5VONYpNYu_0jYZnqfA3Xz9cRa_bSsZIyVf3a75Z_PJ4dR2FnozdNMw_V9U29DUzZoI2ZgbH_72mvqorqvINsuEwAWqFm8O1JqEkLI0NqSSVYt6zqfGuACnnMjXw" />
<div className="absolute top-4 left-4 bg-tertiary-container/90 backdrop-blur-sm text-surface-bright px-3 py-1 font-label-caps text-label-caps uppercase tracking-widest">
            Color • Master Foilayage
          </div>
<div className="absolute bottom-4 right-4 bg-surface-bright text-on-surface px-3 py-1 font-caption text-caption shadow-sm flex items-center gap-1">
<span className="material-symbols-outlined text-[14px]">schedule</span> 180 mins
          </div>
</div>
<div className="p-space-lg flex flex-col flex-grow justify-between gap-space-md">
<div className="space-y-space-xs">
<div className="flex justify-between items-baseline gap-2">
<h3 className="font-headline-sm text-headline-sm text-on-surface">Bespoke Balayage &amp; Foilayage</h3>
<span className="font-title-md text-title-md text-secondary whitespace-nowrap">₹12,500+</span>
</div>
<p className="font-body-md text-body-md text-on-surface-variant">
              Freehand art painting combined with micro-fine foils for dimensional diffusion, inclusive of acid gloss toning, bond shield, and sealing treatment.
            </p>
</div>
<div className="pt-space-sm flex items-center justify-between">
<span className="font-label-caps text-label-caps uppercase text-secondary">Toner &amp; Bond Included</span>
<button className="book-service-btn bg-primary text-on-primary px-space-md py-space-sm font-label-caps text-label-caps uppercase tracking-widest hover:bg-secondary transition-colors" data-service-name="Bespoke Balayage &amp; Foilayage" data-service-price="₹12,500+" type="button">
              Book Service
            </button>
</div>
</div>
</article>
{/*  Item 4: Global Color  */}
<article className="service-item group flex flex-col bg-surface-container-low transition-all duration-300 hover:bg-surface-container-lowest" data-category="color-highlights" style={{ display: (activeFilter === "all" || activeFilter === "color-highlights") ? "flex" : "none" }}>
<div className="relative w-full aspect-[4/5] overflow-hidden bg-surface-variant">
<img  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" data-alt="High gloss deep mocha brown hair reflection on elegant model, silky mirror-shine finish, dramatic cinematic low-key studio lighting with warm gold undertones" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAAlGmVGyuZttHhF0lju4jt_0ypfpbDaQ6S4Nt7NrY74x1VkiGHMY8cH03XD4upXOOwAT3lcvYPHYu0HM8IBdKOvHEEMXoBwAuOXNmisDrU_nACDDCVCG3WwcLPDRKhqffzNEKBJmyLYzH9xmAX7VcodcMEfNpoNZfRKn6iY54AQYhI4XtqfpWY66ICcOnBUxt8VGuJngfWaCvyQcIh5zrR5QlWwog9ApK6LWmSfzuGGGQFslrOabIGow" />
<div className="absolute top-4 left-4 bg-tertiary-container/90 backdrop-blur-sm text-surface-bright px-3 py-1 font-label-caps text-label-caps uppercase tracking-widest">
            Color • Gloss Alchemy
          </div>
<div className="absolute bottom-4 right-4 bg-surface-bright text-on-surface px-3 py-1 font-caption text-caption shadow-sm flex items-center gap-1">
<span className="material-symbols-outlined text-[14px]">schedule</span> 120 mins
          </div>
</div>
<div className="p-space-lg flex flex-col flex-grow justify-between gap-space-md">
<div className="space-y-space-xs">
<div className="flex justify-between items-baseline gap-2">
<h3 className="font-headline-sm text-headline-sm text-on-surface">Global High-Gloss Color</h3>
<span className="font-title-md text-title-md text-secondary whitespace-nowrap">₹7,500+</span>
</div>
<p className="font-body-md text-body-md text-on-surface-variant">
              Full-saturation ammonia-conscious pigment infusion enriched with omega lipid complexes for radiant light-reflection and velvet cuticle health.
            </p>
</div>
<div className="pt-space-sm flex items-center justify-between">
<span className="font-label-caps text-label-caps uppercase text-secondary">Davines Mask System</span>
<button className="book-service-btn bg-primary text-on-primary px-space-md py-space-sm font-label-caps text-label-caps uppercase tracking-widest hover:bg-secondary transition-colors" data-service-name="Global High-Gloss Color" data-service-price="₹7,500+" type="button">
              Book Service
            </button>
</div>
</div>
</article>
{/*  Item 5: Root Retouch  */}
<article className="service-item group flex flex-col bg-surface-container-low transition-all duration-300 hover:bg-surface-container-lowest" data-category="color-highlights" style={{ display: (activeFilter === "all" || activeFilter === "color-highlights") ? "flex" : "none" }}>
<div className="relative w-full aspect-[4/5] overflow-hidden bg-surface-variant">
<img  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" data-alt="Portrait of an elegant mature woman with impeccably blended natural chestnut hair, pristine hairline color finish, calm luxury salon interior background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDmL6_FgYnG1AO530vjPnNBg5knLkey6OV4zTIVdSeqFC_jRF8dZ_rS21Q8-1-0iP2rPUulIiV5th6E5WknOCOQ-lGoxGEA85tizCDIeXkqZTw8jS5aRyDq0rmTPAZMULwr8QOvJr91T1tl_bo1_DvuhUZiA9rdHmU7FGYFN0RcqDvX-m6lWz85YtjeeRTcKm4GSz_3FN-atm7dj4mLAulfXyTzr0sbl5-7ywH9_thFyQOSUNhVuITyXw" />
<div className="absolute top-4 left-4 bg-tertiary-container/90 backdrop-blur-sm text-surface-bright px-3 py-1 font-label-caps text-label-caps uppercase tracking-widest">
            Color • Precision Match
          </div>
<div className="absolute bottom-4 right-4 bg-surface-bright text-on-surface px-3 py-1 font-caption text-caption shadow-sm flex items-center gap-1">
<span className="material-symbols-outlined text-[14px]">schedule</span> 90 mins
          </div>
</div>
<div className="p-space-lg flex flex-col flex-grow justify-between gap-space-md">
<div className="space-y-space-xs">
<div className="flex justify-between items-baseline gap-2">
<h3 className="font-headline-sm text-headline-sm text-on-surface">Root Retouch &amp; Gloss</h3>
<span className="font-title-md text-title-md text-secondary whitespace-nowrap">₹4,500</span>
</div>
<p className="font-body-md text-body-md text-on-surface-variant">
              Seamless regrowth coverage combined with an instant mid-length gloss glaze to harmonize vitality and balance moisture across the hair shaft.
            </p>
</div>
<div className="pt-space-sm flex items-center justify-between">
<span className="font-label-caps text-label-caps uppercase text-secondary">Up to 2 inches</span>
<button className="book-service-btn bg-primary text-on-primary px-space-md py-space-sm font-label-caps text-label-caps uppercase tracking-widest hover:bg-secondary transition-colors" data-service-name="Root Retouch &amp; Gloss" data-service-price="₹4,500" type="button">
              Book Service
            </button>
</div>
</div>
</article>
{/*  Item 6: Japanese Silk Keratin  */}
<article className="service-item group flex flex-col bg-surface-container-low transition-all duration-300 hover:bg-surface-container-lowest" data-category="keratin-texture" style={{ display: (activeFilter === "all" || activeFilter === "keratin-texture") ? "flex" : "none" }}>
<div className="relative w-full aspect-[4/5] overflow-hidden bg-surface-variant">
<img  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" data-alt="Sleek glass hair treatment result, perfectly straight ultra glossy dark hair cascading down the back of a luxury salon client, luminous reflection, warm serene lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuALdYmzPbWPRxD51-Z903-YbGVYw6Ux9Dynf5CXs2VxzWzBCBpbzli7zEQWq8RhUmeirg95WXa01mt1KzYUy9X4w1Vtzy5j-KlJcLBHv53FuyVTZMtqXb79cMRRjT5KzxTPTtMxQpZt_ILTGudl4uJ7LV4sbqOZ3DISMx2JaBAYlcRi37pUQRELx3T2oOgGzuA99p0BWNF_swAlHSu_ZjIfPD1MpHBKdCjlOP-OOzr0wt83T5AlKJKjaQ" />
<div className="absolute top-4 left-4 bg-tertiary-container/90 backdrop-blur-sm text-surface-bright px-3 py-1 font-label-caps text-label-caps uppercase tracking-widest">
            Texture • Formaldehyde-Free
          </div>
<div className="absolute bottom-4 right-4 bg-surface-bright text-on-surface px-3 py-1 font-caption text-caption shadow-sm flex items-center gap-1">
<span className="material-symbols-outlined text-[14px]">schedule</span> 180 mins
          </div>
</div>
<div className="p-space-lg flex flex-col flex-grow justify-between gap-space-md">
<div className="space-y-space-xs">
<div className="flex justify-between items-baseline gap-2">
<h3 className="font-headline-sm text-headline-sm text-on-surface">Japanese Silk Keratin Infusion</h3>
<span className="font-title-md text-title-md text-secondary whitespace-nowrap">₹15,000+</span>
</div>
<p className="font-body-md text-body-md text-on-surface-variant">
              Advanced non-toxic restructuring complex delivering frizz immunity, mirror-sheen smoothness, and manageable softness for up to 5 months.
            </p>
</div>
<div className="pt-space-sm flex items-center justify-between">
<span className="font-label-caps text-label-caps uppercase text-secondary">5 Months Durability</span>
<button className="book-service-btn bg-primary text-on-primary px-space-md py-space-sm font-label-caps text-label-caps uppercase tracking-widest hover:bg-secondary transition-colors" data-service-name="Japanese Silk Keratin Infusion" data-service-price="₹15,000+" type="button">
              Book Service
            </button>
</div>
</div>
</article>
{/*  Item 7: Olaplex Bond Repair  */}
<article className="service-item group flex flex-col bg-surface-container-low transition-all duration-300 hover:bg-surface-container-lowest" data-category="keratin-texture" style={{ display: (activeFilter === "all" || activeFilter === "keratin-texture") ? "flex" : "none" }}>
<div className="relative w-full aspect-[4/5] overflow-hidden bg-surface-variant">
<img  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" data-alt="Artistic macro close up of healthy restored hair strands with water mist droplets, clean architectural backdrop, warm beige and soft stone tones, high definition macro photography" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC6tkoGQr7gjbr1w9DRUrtn58JytmLl7siQAnv130ViEUVIu7qdHWw9bQC3LCv34u1aPM0tnhP3WLSgSu2ugL9O2oa-gfVMwgDvnnGMEEl_cYc0gN4vwKdwLTDYYO7YRCjei_PHwZSpGnVlbPaevDNHBDxjv7p8HJvOlL-EprUNk0F9sHV6sFKGpGlcyREyMW6vpLyUGb7tEF5nfJF7Qsl0c4ZGswdxw6zeoGBQUK5OIMPZnLCJzEkrMw" />
<div className="absolute top-4 left-4 bg-tertiary-container/90 backdrop-blur-sm text-surface-bright px-3 py-1 font-label-caps text-label-caps uppercase tracking-widest">
            Treatment • Molecular Repair
          </div>
<div className="absolute bottom-4 right-4 bg-surface-bright text-on-surface px-3 py-1 font-caption text-caption shadow-sm flex items-center gap-1">
<span className="material-symbols-outlined text-[14px]">schedule</span> 75 mins
          </div>
</div>
<div className="p-space-lg flex flex-col flex-grow justify-between gap-space-md">
<div className="space-y-space-xs">
<div className="flex justify-between items-baseline gap-2">
<h3 className="font-headline-sm text-headline-sm text-on-surface">Molecular Bond Reconstruction</h3>
<span className="font-title-md text-title-md text-secondary whitespace-nowrap">₹6,500</span>
</div>
<p className="font-body-md text-body-md text-on-surface-variant">
              Medical-grade disulfide bond relinking for compromised, bleached, or heat-fatigued hair. Restores internal tensile elasticity and structural strength.
            </p>
</div>
<div className="pt-space-sm flex items-center justify-between">
<span className="font-label-caps text-label-caps uppercase text-secondary">Olaplex Stand-Alone</span>
<button className="book-service-btn bg-primary text-on-primary px-space-md py-space-sm font-label-caps text-label-caps uppercase tracking-widest hover:bg-secondary transition-colors" data-service-name="Molecular Bond Reconstruction" data-service-price="₹6,500" type="button">
              Book Service
            </button>
</div>
</div>
</article>
{/*  Item 8: Scalp Detox Spa  */}
<article className="service-item group flex flex-col bg-surface-container-low transition-all duration-300 hover:bg-surface-container-lowest" data-category="scalp-hair-spa" style={{ display: (activeFilter === "all" || activeFilter === "scalp-hair-spa") ? "flex" : "none" }}>
<div className="relative w-full aspect-[4/5] overflow-hidden bg-surface-variant">
<img  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" data-alt="Serene spa treatment scene of client receiving a relaxing botanical scalp massage in a dim warm luxury atelier, Japanese wooden headrest and warm water mist infusion" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAdxxacWUpLkoqAAPiA1maszDR68R5MZhCbrvpAtYvxolY0dEknwNcrxuTGlVOr4GNIhnkrg8VhnZykwd4nDouOrqm7qRQyEw8dywrvnUQCXeF0p57_qTfTzenpViSBahftc0owrVoJKZQ-jwtEdnbH8TZuMyLKPgcNHeNI443gGER6LWKX0dwn-fwBP8f34Y11fiozkAc1yjPaB7yT3M3XNvJBHPJD35X8nRr_3IV703bnqQdTz5mssQ" />
<div className="absolute top-4 left-4 bg-tertiary-container/90 backdrop-blur-sm text-surface-bright px-3 py-1 font-label-caps text-label-caps uppercase tracking-widest">
            Spa • Trichological Ritual
          </div>
<div className="absolute bottom-4 right-4 bg-surface-bright text-on-surface px-3 py-1 font-caption text-caption shadow-sm flex items-center gap-1">
<span className="material-symbols-outlined text-[14px]">schedule</span> 90 mins
          </div>
</div>
<div className="p-space-lg flex flex-col flex-grow justify-between gap-space-md">
<div className="space-y-space-xs">
<div className="flex justify-between items-baseline gap-2">
<h3 className="font-headline-sm text-headline-sm text-on-surface">Caviar Scalp Detox Spa</h3>
<span className="font-title-md text-title-md text-secondary whitespace-nowrap">₹5,200</span>
</div>
<p className="font-body-md text-body-md text-on-surface-variant">
              Micro-exfoliation, thermal ozone steam cocoon, caviar extract nutritive mask, and acupressure cranial stimulation for follicle rejuvenation.
            </p>
</div>
<div className="pt-space-sm flex items-center justify-between">
<span className="font-label-caps text-label-caps uppercase text-secondary">Aromatherapeutic</span>
<button className="book-service-btn bg-primary text-on-primary px-space-md py-space-sm font-label-caps text-label-caps uppercase tracking-widest hover:bg-secondary transition-colors" data-service-name="Caviar Scalp Detox Spa" data-service-price="₹5,200" type="button">
              Book Service
            </button>
</div>
</div>
</article>
{/*  Item 9: Couture Bridal  */}
<article className="service-item group flex flex-col bg-surface-container-low transition-all duration-300 hover:bg-surface-container-lowest" data-category="bridal-event" style={{ display: (activeFilter === "all" || activeFilter === "bridal-event") ? "flex" : "none" }}>
<div className="relative w-full aspect-[4/5] overflow-hidden bg-surface-variant">
<img  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" data-alt="High couture bridal hair styling, intricate modern chignon hair design adorned with subtle pearls and gold hair pins, aristocratic atmosphere, warm ivory background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB5BlC8z3uImT8rIRVcd0PVFeCsJ8uauc23-My3p2DAjksSTLFIMEw1S0h9axXi0UnQigYD3EHybHay079SUXAszuAbZmkCueOMUq7drZIeljwaPqFiXtgMUs6a5YvADL0y7-UI8Usci_u-pyE8XBJf8rsqcG2rKbpbJuocp3EvZrqbrdW2-fxEkVEQjXbJHSPtR6u5GwtWl3pAqAYXKvYxjxBHwUOx1E8ab3EQXMrfc-Sj_PjRjBt6jg" />
<div className="absolute top-4 left-4 bg-tertiary-container/90 backdrop-blur-sm text-surface-bright px-3 py-1 font-label-caps text-label-caps uppercase tracking-widest">
            Bridal • Bespoke Atelier
          </div>
<div className="absolute bottom-4 right-4 bg-surface-bright text-on-surface px-3 py-1 font-caption text-caption shadow-sm flex items-center gap-1">
<span className="material-symbols-outlined text-[14px]">schedule</span> 150 mins
          </div>
</div>
<div className="p-space-lg flex flex-col flex-grow justify-between gap-space-md">
<div className="space-y-space-xs">
<div className="flex justify-between items-baseline gap-2">
<h3 className="font-headline-sm text-headline-sm text-on-surface">Couture Bridal Hair &amp; Trial</h3>
<span className="font-title-md text-title-md text-secondary whitespace-nowrap">₹22,000</span>
</div>
<p className="font-body-md text-body-md text-on-surface-variant">
              Includes pre-wedding architecture trial, veil placement choreography, custom jewelry pinning, and day-of VIP suite exclusivity with private artist.
            </p>
</div>
<div className="pt-space-sm flex items-center justify-between">
<span className="font-label-caps text-label-caps uppercase text-secondary">Includes Trial Run</span>
<button className="book-service-btn bg-primary text-on-primary px-space-md py-space-sm font-label-caps text-label-caps uppercase tracking-widest hover:bg-secondary transition-colors" data-service-name="Couture Bridal Hair &amp; Trial" data-service-price="₹22,000" type="button">
              Book Service
            </button>
</div>
</div>
</article>
{/*  Item 10: Red Carpet Editorial  */}
<article className="service-item group flex flex-col bg-surface-container-low transition-all duration-300 hover:bg-surface-container-lowest" data-category="bridal-event" style={{ display: (activeFilter === "all" || activeFilter === "bridal-event") ? "flex" : "none" }}>
<div className="relative w-full aspect-[4/5] overflow-hidden bg-surface-variant">
<img  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" data-alt="Dramatic high-fashion red carpet hairstyle on a model wearing an avant-garde black collar, sculptural modern hair silhouette, sharp cinematic profile lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD6Y1J4VO8BbclgUkTzybGhK9cOZNOY5WuL6GaMbA7ZJABC1G9_HPog3DGM2rxOD9nZtoOciAfF-RbHy-JX8nwE79YOLrCepynbHEXyJL67m8J41EaETMlTLYqVfv6sWUCfZgKS6Te8JRRk78HYvNoJ1b9p__Ea45Wp08HuXJamakOnNi_mXunK9fDNkbp39OqqWXKD30htYOJalqXS-iW72VsawmKGXRnnSg4-baSf6CJtE5Tb6Qip9A" />
<div className="absolute top-4 left-4 bg-tertiary-container/90 backdrop-blur-sm text-surface-bright px-3 py-1 font-label-caps text-label-caps uppercase tracking-widest">
            Event • Editorial
          </div>
<div className="absolute bottom-4 right-4 bg-surface-bright text-on-surface px-3 py-1 font-caption text-caption shadow-sm flex items-center gap-1">
<span className="material-symbols-outlined text-[14px]">schedule</span> 60 mins
          </div>
</div>
<div className="p-space-lg flex flex-col flex-grow justify-between gap-space-md">
<div className="space-y-space-xs">
<div className="flex justify-between items-baseline gap-2">
<h3 className="font-headline-sm text-headline-sm text-on-surface">Red Carpet Editorial Styling</h3>
<span className="font-title-md text-title-md text-secondary whitespace-nowrap">₹5,500</span>
</div>
<p className="font-body-md text-body-md text-on-surface-variant">
              Hollywood waves, modern high-fashion updos, or wet-look glass sculpting crafted for high-definition photography and long-lasting event durability.
            </p>
</div>
<div className="pt-space-sm flex items-center justify-between">
<span className="font-label-caps text-label-caps uppercase text-secondary">Oribe Dry Texturizing</span>
<button className="book-service-btn bg-primary text-on-primary px-space-md py-space-sm font-label-caps text-label-caps uppercase tracking-widest hover:bg-secondary transition-colors" data-service-name="Red Carpet Editorial Styling" data-service-price="₹5,500" type="button">
              Book Service
            </button>
</div>
</div>
</article>
{/*  Item 11: Men's Grooming  */}
<article className="service-item group flex flex-col bg-surface-container-low transition-all duration-300 hover:bg-surface-container-lowest" data-category="mens-grooming" style={{ display: (activeFilter === "all" || activeFilter === "mens-grooming") ? "flex" : "none" }}>
<div className="relative w-full aspect-[4/5] overflow-hidden bg-surface-variant">
<img  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" data-alt="Sophisticated handsome man receiving beard grooming and razor contouring in an ultra-luxurious dark wood and marble atelier, precise masculine grooming editorial" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDmh_b1-NY9XD7a7AZt9wKFqVS6HDR5wsD2YbGT_uFV_EXVIYefZOdchi2_3vX78iIUofpfggF8yV-V-guOT9r7-O8zZu6L2CmHuREjXX5X9gfx7sNP9R86hh43gpH279Ev2n-FRk7mxHEWWI7ExPqhVczedsPlTigG0HZuW2g_5meBlEr4nTLgamMZRdJQAyiiuGmVDUmM2LumNVzk7oW-osM6oWEx09zoFoRyB6pugzRONOH2vD-K8A" />
<div className="absolute top-4 left-4 bg-tertiary-container/90 backdrop-blur-sm text-surface-bright px-3 py-1 font-label-caps text-label-caps uppercase tracking-widest">
            Men • Grooming
          </div>
<div className="absolute bottom-4 right-4 bg-surface-bright text-on-surface px-3 py-1 font-caption text-caption shadow-sm flex items-center gap-1">
<span className="material-symbols-outlined text-[14px]">schedule</span> 60 mins
          </div>
</div>
<div className="p-space-lg flex flex-col flex-grow justify-between gap-space-md">
<div className="space-y-space-xs">
<div className="flex justify-between items-baseline gap-2">
<h3 className="font-headline-sm text-headline-sm text-on-surface">Executive Beard Sculpt &amp; Cut</h3>
<span className="font-title-md text-title-md text-secondary whitespace-nowrap">₹3,200</span>
</div>
<p className="font-body-md text-body-md text-on-surface-variant">
              Tapered clipper work, shear balance, hot-towel essential oil steam prep, and precision straight-razor cheek line contouring with soothing balm.
            </p>
</div>
<div className="pt-space-sm flex items-center justify-between">
<span className="font-label-caps text-label-caps uppercase text-secondary">Hot Towel Ritual</span>
<button className="book-service-btn bg-primary text-on-primary px-space-md py-space-sm font-label-caps text-label-caps uppercase tracking-widest hover:bg-secondary transition-colors" data-service-name="Executive Beard Sculpt &amp; Cut" data-service-price="₹3,200" type="button">
              Book Service
            </button>
</div>
</div>
</article>
</div>
</section>
{/*  Bespoke Consultation & Product Care Section  */}
<section className="w-full bg-surface-container py-space-2xl my-space-lg">
<div className="max-w-[1440px] mx-auto px-margin lg:px-margin-desktop">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-desktop items-center">
<div className="lg:col-span-5 space-y-space-md">
<div className="space-y-space-xs">
<span className="font-label-caps text-label-caps uppercase tracking-widest text-secondary">The Atelier Apothecary</span>
<h2 className="font-headline-lg text-headline-lg text-on-surface">Formulations Without Compromise.</h2>
</div>
<p className="font-body-lg text-body-lg text-on-surface-variant">
            At ZENZA, chemistry is treated with reverence. We strictly house world-renowned restorative systems that honor the biological integrity of every hair fiber.
          </p>
<div className="space-y-space-md pt-space-xs">
<div className="p-space-md bg-surface-container-lowest">
<div className="flex items-center gap-space-sm mb-space-xs">
<span className="material-symbols-outlined text-secondary">eco</span>
<h4 className="font-title-md text-title-md text-on-surface">Davines Sustainable Science • Parma, Italy</h4>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">
                Biodegradable raw formulas, cold-extracted botanicals, and zero-carbon footprint color pigments created to deliver luminous nuance while preserving natural oils.
              </p>
</div>
<div className="p-space-md bg-surface-container-lowest">
<div className="flex items-center gap-space-sm mb-space-xs">
<span className="material-symbols-outlined text-secondary">diamond</span>
<h4 className="font-title-md text-title-md text-on-surface">Oribe Haute Parfumerie • Côte d'Azur</h4>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">
                The apex of bespoke luxury styling. Infused with water-melon extracts, edelweiss stem cells, and signature Côte d’Azur fragrance for supreme tactile elegance.
              </p>
</div>
</div>
<div className="pt-space-xs">
<a className="inline-flex items-center gap-space-xs font-label-caps text-label-caps uppercase tracking-widest text-on-surface hover:text-secondary transition-colors" href="#">
              Schedule Diagnostic Scalp Consultation <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
</a>
</div>
</div>
<div className="lg:col-span-7 grid grid-cols-2 gap-space-md">
<div className="space-y-space-md">
<div className="w-full aspect-[3/4] overflow-hidden bg-surface-variant">
<img  className="w-full h-full object-cover" data-alt="Minimalist luxury display of Davines and Oribe hair oil glass bottles on warm travertine stone in morning daylight, editorial still life product photography" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCiYhfD2D0mMH_elbLZNGPVBiOGFC_40OB4kCnvFy9H77QvkZeRD1mb6XZPDxFV592FBqYaZE8_guQ--HmXOSSuXubqMzxZt5GSnZbwAvgPBhOCPGN75z6_9sZEc-ZayRLs9CDfmgNVI02p9zZ6zDpA0v2os7X_xjdGhZpfZXlxiym-Gsfs7M4up0oOKfSQPy871PsPV4DqjcDL0oUCQkFZRkr-mrBa3FEAzcyPbyudNju8XhPT_QtYAw" />
</div>
<div className="p-space-md bg-surface-container-low">
<span className="font-label-caps text-label-caps uppercase text-secondary">Client Experience</span>
<p className="font-headline-sm text-headline-sm text-on-surface pt-space-xs">98.4%</p>
<p className="font-caption text-caption text-on-surface-variant">Reported zero chemical irritation across all color sessions.</p>
</div>
</div>
<div className="space-y-space-md pt-space-xl">
<div className="p-space-md bg-tertiary-container text-surface-bright">
<span className="font-label-caps text-label-caps uppercase text-secondary-fixed">Director Philosophy</span>
<p className="font-body-md text-body-md italic pt-space-xs">"Hair shouldn't just look sublime on the evening of your appointment—it must retain its strength, movement, and health four months later."</p>
</div>
<div className="w-full aspect-[3/4] overflow-hidden bg-surface-variant">
<img  className="w-full h-full object-cover" data-alt="Studio shot of hair treatment preparation in handcrafted ceramic bowl with wooden brush and natural botanicals, muted champagne and warm cream palette" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDEzyMBrERrwNT8E27etsPzxsRgyTKzd196yM03Bq2jX7k2Vft06jeN_w0KE73nFg7xjZqTbiDBO0lsNMwcCWe299JC0SDOzsO8b-6oqGOY3Uddzs6bovG6XnUbzKxcBoobgys0Xl-2vneVbWyLl82wj4bvHV7zsBIw25yGOlQnsLBqwk54QoFA5u89WuP8m6n1Q_snjTtYft5g5sOhZxXf6WdqMHIH31PdlrizRhLoAxtWWwtYqGjFpA" />
</div>
</div>
</div>
</div>
</div>
</section>
{/*  Interactive FAQ Section  */}
<section className="w-full max-w-[1440px] mx-auto px-margin lg:px-margin-desktop py-space-2xl">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-desktop">
<div className="lg:col-span-5 space-y-space-sm">
<span className="font-label-caps text-label-caps uppercase tracking-widest text-secondary">Knowledge • Protocol</span>
<h2 className="font-headline-lg text-headline-lg text-on-surface">Frequently Asked Questions</h2>
<p className="font-body-md text-body-md text-on-surface-variant">
          Everything you need to know about preparing for your session, personalized consultations, and post-service care.
        </p>
<div className="pt-space-md">
<div className="p-space-md bg-surface-container-low max-w-sm space-y-space-xs">
<span className="font-label-caps text-label-caps uppercase text-secondary">Direct Concierge</span>
<p className="font-body-sm text-body-sm text-on-surface">Have an uncommon requirement or complex color correction?</p>
<a className="font-label-caps text-label-caps uppercase tracking-widest text-on-surface underline hover:text-secondary transition-colors inline-block pt-space-xs" href="#">
              Chat With Salon Desk
            </a>
</div>
</div>
</div>
<div className="lg:col-span-7 space-y-space-sm" id="faq-accordion">
{/*  FAQ Item 1  */}
<div className="faq-item bg-surface-container-low overflow-hidden transition-all duration-200">
<button className="faq-toggle w-full text-left p-space-md flex items-center justify-between gap-space-md hover:bg-surface-container-high transition-colors" type="button">
<span className="font-headline-sm text-headline-sm text-on-surface">What does the initial consultation process involve?</span>
<span className="faq-icon material-symbols-outlined text-secondary transition-transform duration-300">add</span>
</button>
<div className="faq-content hidden px-space-md pb-space-md font-body-md text-body-md text-on-surface-variant">
            Every session begins with a mandatory 15-minute diagnostic evaluation. We assess your hair's tensile elasticity, natural growth whorls, facial architecture, and lifestyle requirements before any tool touches your hair. For color work, we perform a micro-strand reading.
          </div>
</div>
{/*  FAQ Item 2  */}
<div className="faq-item bg-surface-container-low overflow-hidden transition-all duration-200">
<button className="faq-toggle w-full text-left p-space-md flex items-center justify-between gap-space-md hover:bg-surface-container-high transition-colors" type="button">
<span className="font-headline-sm text-headline-sm text-on-surface">Are patch tests required for first-time color clients?</span>
<span className="faq-icon material-symbols-outlined text-secondary transition-transform duration-300">add</span>
</button>
<div className="faq-content hidden px-space-md pb-space-md font-body-md text-body-md text-on-surface-variant">
            Yes. Client safety is non-negotiable. For all first-time colorants, we require a 48-hour dermal allergy patch test at our Mumbai or Delhi ateliers. If you are traveling from out of town, we coordinate a complimentary mail-safe test kit ahead of your date.
          </div>
</div>
{/*  FAQ Item 3  */}
<div className="faq-item bg-surface-container-low overflow-hidden transition-all duration-200">
<button className="faq-toggle w-full text-left p-space-md flex items-center justify-between gap-space-md hover:bg-surface-container-high transition-colors" type="button">
<span className="font-headline-sm text-headline-sm text-on-surface">How do I maintain my balayage or treatment after leaving?</span>
<span className="faq-icon material-symbols-outlined text-secondary transition-transform duration-300">add</span>
</button>
<div className="faq-content hidden px-space-md pb-space-md font-body-md text-body-md text-on-surface-variant">
            Your master stylist prescribes a bespoke home maintenance ritual with Davines sulfate-free cleansers and Oribe ultraviolet filters. We also recommend an in-studio express gloss refresh at week 8 to preserve pigment vibrancy.
          </div>
</div>
{/*  FAQ Item 4  */}
<div className="faq-item bg-surface-container-low overflow-hidden transition-all duration-200">
<button className="faq-toggle w-full text-left p-space-md flex items-center justify-between gap-space-md hover:bg-surface-container-high transition-colors" type="button">
<span className="font-headline-sm text-headline-sm text-on-surface">What is ZENZA’s cancellation and rescheduling policy?</span>
<span className="faq-icon material-symbols-outlined text-secondary transition-transform duration-300">add</span>
</button>
<div className="faq-content hidden px-space-md pb-space-md font-body-md text-body-md text-on-surface-variant">
            We operate on dedicated private appointments. We request a minimum of 24 hours notice for standard haircuts and 48 hours notice for multi-hour color or bridal rituals. Cancellations inside this window forfeit the initial 20% booking retainer.
          </div>
</div>
{/*  FAQ Item 5  */}
<div className="faq-item bg-surface-container-low overflow-hidden transition-all duration-200">
<button className="faq-toggle w-full text-left p-space-md flex items-center justify-between gap-space-md hover:bg-surface-container-high transition-colors" type="button">
<span className="font-headline-sm text-headline-sm text-on-surface">Can I request private suite styling for high-profile events?</span>
<span className="faq-icon material-symbols-outlined text-secondary transition-transform duration-300">add</span>
</button>
<div className="faq-content hidden px-space-md pb-space-md font-body-md text-body-md text-on-surface-variant">
            Yes. Both our Altamount Road (Mumbai) and Friends Colony West (Delhi) studios feature sequestered VIP Atelier suites with dedicated private wash lounges, discreet elevator access, and tailored hospitality menus.
          </div>
</div>
</div>
</div>
</section>
{/*  Booking Anchor Banner  */}
<section className="w-full bg-tertiary text-on-tertiary py-space-2xl">
<div className="max-w-[1440px] mx-auto px-margin lg:px-margin-desktop">
<div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-gutter-desktop">
<div className="max-w-2xl space-y-space-xs">
<span className="font-label-caps text-label-caps uppercase tracking-widest text-secondary-fixed">Reservations Now Open</span>
<h2 className="font-display-lg text-display-lg text-surface-bright tracking-tight">Claim Your Chair at the Atelier.</h2>
<p className="font-body-lg text-body-lg text-tertiary-fixed-dim">
            Slots with Atelier Directors are released 30 days in advance. Secure your preferred artist and experience hairdressing redefined.
          </p>
</div>
<div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-space-md w-full lg:w-auto">
<a className="bg-secondary-fixed text-on-secondary-fixed text-center px-space-xl py-space-md font-label-caps text-label-caps uppercase tracking-widest hover:bg-surface-bright transition-colors shadow-md" href="#">
            Book Appointment Now
          </a>
<a className="border border-tertiary-fixed-dim/30 text-surface-bright text-center px-space-lg py-space-md font-label-caps text-label-caps uppercase tracking-widest hover:bg-surface-container-lowest/10 transition-colors" href="#">
            WhatsApp Concierge
          </a>
</div>
</div>
</div>
</section>
{/*  Interactive Selection Modal (Micro-interaction for service booking)  */}
<div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm hidden items-end md:items-center justify-center p-0 md:p-space-lg" id="booking-drawer">
<div className="bg-surface text-on-surface w-full max-w-lg p-space-xl space-y-space-md shadow-2xl relative">
<button className="absolute top-4 right-4 text-on-surface-variant hover:text-on-surface p-2" id="close-drawer-btn">
<span className="material-symbols-outlined text-[20px]">close</span>
</button>
<div className="space-y-space-xs">
<span className="font-label-caps text-label-caps uppercase tracking-widest text-secondary">Confirm Selection</span>
<h3 className="font-headline-md text-headline-md text-on-surface" id="drawer-service-name">Service Title</h3>
<p className="font-title-md text-title-md text-secondary" id="drawer-service-price">₹0</p>
</div>
<p className="font-body-md text-body-md text-on-surface-variant">
        Proceed to choose your preferred atelier location, stylist tier, and preferred timing slot.
      </p>
<div className="space-y-space-sm pt-space-xs">
<div className="flex gap-space-sm">
<button className="w-1/2 py-space-sm bg-surface-container font-label-caps text-label-caps uppercase text-on-surface hover:bg-surface-variant" type="button">Mumbai Atelier</button>
<button className="w-1/2 py-space-sm bg-surface-container font-label-caps text-label-caps uppercase text-on-surface hover:bg-surface-variant" type="button">Delhi Atelier</button>
</div>
<button className="w-full bg-primary text-on-primary py-space-md font-label-caps text-label-caps uppercase tracking-widest hover:bg-secondary transition-colors" type="button">
          Continue To Calendar
        </button>
</div>
</div>
</div>
{/*  Inline Micro-interactions Script  */}

</div>
    </main>
  )
}
