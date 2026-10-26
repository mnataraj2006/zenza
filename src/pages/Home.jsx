import React from 'react'
import BeforeAfterSlider from '../components/BeforeAfterSlider'

export default function Home({ onNavigate }) {
  return (
    <main className="w-full pt-20 bg-surface min-h-[calc(100vh-20rem)]">
<div className="flex flex-col w-full">
{/*  1. CINEMATIC HERO SECTION  */}
<section className="relative w-full min-h-[92vh] flex items-end pb-space-2xl -mt-20 pt-24 overflow-hidden">
<div className="absolute inset-0 z-0">
<div className="w-full h-full bg-cover bg-center transform scale-105 transition-transform duration-1000 ease-out" data-alt="Editorial luxury fashion portrait of a model with exquisite sculptural hair waves under warm amber and soft directional rim lighting. Tonal ivory, espresso, and champagne palette, ultra sharp detail, high-fashion Vogue cover styling, cinematic depth of field." style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCoUZMATERm5_dNLMN9AEkoU8_5qLYzg-we3H1mchi8cF1VGkGk34WxX81jZTatdW-Vg6XoyYpViCRNdJ2l2_QRaj4FxskK9lq2NVuU65Bl12nGw8doCOJpUjoeGkMyzeoX_fA3lgInl4TdCsN2SciAEaMtAUfy_IdFXyStuLRDBhA70wlRll2jcvN1vY__QF1dMarUIn4-fiYSx8tGkyImXXHrYSrd9Z7byOUy-Z2biDmZ0ARJx7ZFKA')" }}></div>
<div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/60 to-surface/20 mix-blend-multiply"></div>
<div className="absolute inset-0 bg-gradient-to-r from-surface/80 via-transparent to-surface/40"></div>
</div>
<div className="relative z-10 max-w-[1440px] w-full mx-auto px-margin lg:px-margin-desktop flex flex-col justify-end">
<div className="max-w-4xl space-y-space-md">
<div className="flex items-center gap-space-sm">
<span className="w-8 h-[1px] bg-secondary"></span>
<span className="font-label-caps text-label-caps uppercase tracking-widest text-secondary">The Atelier of High Hairdressing</span>
</div>
<h1 className="font-display-xl text-display-xl text-on-surface tracking-tight uppercase leading-[1.05]">
          YOUR HAIR. <br />
<span className="italic font-normal font-headline-lg">Your Signature.</span>
</h1>
<p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl font-light">
          Where artistry meets individuality. Experience exceptional hair styling crafted exclusively for you in a sanctuary of quiet luxury.
        </p>
<div className="flex flex-wrap items-center gap-space-md pt-space-md">
<a className="bg-secondary text-on-secondary px-8 py-4 font-label-caps text-label-caps uppercase tracking-widest hover:bg-on-surface transition-colors duration-300 shadow-md" data-path="booking" href="booking.html">
            BOOK YOUR EXPERIENCE
          </a>
<a className="bg-surface/80 backdrop-blur-sm text-on-surface px-8 py-4 font-label-caps text-label-caps uppercase tracking-widest hover:bg-surface-variant transition-colors duration-300 shadow-sm" href="#services">
            EXPLORE OUR SERVICES
          </a>
</div>
</div>
{/*  Vertical Scroll Indicator  */}
<div className="absolute right-margin lg:right-margin-desktop bottom-space-md hidden sm:flex flex-col items-center gap-space-sm">
<span className="font-label-caps text-label-caps uppercase tracking-widest text-secondary [writing-mode:vertical-rl] rotate-180">Scroll to Explore</span>
<div className="w-[1px] h-12 bg-secondary/30 relative overflow-hidden">
<div className="w-full h-1/2 bg-secondary absolute top-0 animate-bounce"></div>
</div>
</div>
</div>
</section>
{/*  2. INTRODUCTION SECTION  */}
<section className="w-full py-space-2xl bg-surface">
<div className="max-w-[1440px] mx-auto px-margin lg:px-margin-desktop">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-desktop items-center">
<div className="lg:col-span-5 space-y-space-md">
<span className="font-label-caps text-label-caps uppercase tracking-widest text-secondary">Atelier Philosophy</span>
<h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">
            MORE THAN A <br />
<span className="italic">HAIR STUDIO.</span>
</h2>
<div className="w-12 h-[1px] bg-secondary/50"></div>
<p className="font-body-lg text-body-lg text-on-surface-variant font-light leading-relaxed">
            We reject the conveyor-belt salon experience. In our quiet sanctuaries across Mumbai and Delhi, hair styling is treated as bespoke couture—an intimate communion between structural anatomy, organic movement, and authentic personal style.
          </p>
<p className="font-body-md text-body-md text-on-surface-variant/80 font-normal leading-relaxed">
            Every appointment begins with a multi-sensory diagnostic consultation examining hair texture, facial proportions, and daily rituals. We craft looks that do not demand conformity, but effortlessly amplify your individual prestige.
          </p>
<div className="pt-space-sm">
<a className="group inline-flex items-center gap-space-sm font-label-caps text-label-caps uppercase tracking-widest text-on-surface" href="#">
<span>DISCOVER OUR STORY</span>
<span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
</a>
<div className="w-24 h-[1px] bg-on-surface transition-all duration-300 group-hover:w-32"></div>
</div>
</div>
<div className="lg:col-span-7 relative pt-space-lg lg:pt-0">
<div className="relative w-full aspect-[4/5] max-w-lg mx-auto lg:ml-auto">
<img  className="w-full h-full object-cover shadow-xl" data-alt="Monochrome and warm champagne toned photograph of a master hair stylist gently cutting textured strands using Japanese shears, soft natural studio backlighting, focused editorial composition." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCrY4PxkGUNXfpihDR8BQOaJglYF-ijxNfGD4cdrp-4vbQ9d8qNQjNJAhMPw7JcFLRqEOfT2-q0OPpt6LU-l7M0kt9owXyDPf19pjzYwWSfqoZbO53YpR5Bb8A92v9n12nkk2lo5awtovTo_fJrnZ2hCAer5pov9K_heItsFTEluHh49E8F_BzhdEkIMLxi42tnog15KIkgvRYvf4-yN6WqYO7182obTeiAZYcTAqxCx7HJkssemMcymg" />
<div className="absolute -bottom-8 -left-8 w-1/2 aspect-square hidden md:block bg-surface-container shadow-2xl p-space-xs">
<img  className="w-full h-full object-cover" data-alt="Detailed close up of silk blonde hair strands catching golden hour light in a minimalist luxury architectural salon space, extreme detail and depth." src="https://lh3.googleusercontent.com/aida-public/AB6AXuB9JTasd6LBSCTZbhQSj9LDfHriMTgSMaxEnEjfPLHX0pEBluhcDUiYnOTpaYA2U-9wzAuCS-meKfIRDUD2KXnPgdzbEi-tumBAuNk-HsXI2GBngs1njrGoS-uq8SDr1J4JodRxyqNe7DnsjJvahO-w3iGANkuN4ebL_6nE_tT_9IK83wSs8a-eegIWfg5QAKL84WjQJ_JohJqg9cfV1GBwyaAoog9uhgNG_7IjtFC_ZmgzHw9Yx7127w" />
</div>
<div className="absolute top-4 right-4 bg-surface/90 backdrop-blur-md px-space-md py-space-sm shadow-sm hidden sm:block">
<p className="font-label-caps text-label-caps uppercase tracking-widest text-secondary">Est. 2018</p>
<p className="font-title-md text-title-md text-on-surface">Artisanal Precision</p>
</div>
</div>
</div>
</div>
</div>
</section>
{/*  3. SIGNATURE SERVICES  */}
<section className="w-full py-space-2xl bg-surface-container-low" id="services">
<div className="max-w-[1440px] mx-auto px-margin lg:px-margin-desktop">
<div className="flex flex-col md:flex-row md:items-end justify-between pb-space-xl gap-space-md">
<div className="space-y-space-xs">
<span className="font-label-caps text-label-caps uppercase tracking-widest text-secondary">Curated Disciplines</span>
<h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight uppercase">
            THE ART OF <span className="italic">TRANSFORMATION.</span>
</h2>
</div>
<p className="font-body-md text-body-md text-on-surface-variant max-w-md font-light">
          Six pillars of hair refinement orchestrated by seasoned artists dedicated to organic health and unmatched visual impact.
        </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter-desktop">
{/*  Card 1  */}
<div className="group relative flex flex-col bg-surface overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500">
<div className="relative w-full aspect-[4/5] overflow-hidden bg-surface-container">
<img  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" data-alt="Modern architectural bob haircut with razor-sharp geometry on a high-fashion model, editorial studio lighting, warm beige palette." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBlKMhge8LZ6LiX22TQbIqTlX8lSJscz_aNPgoLnNgdgGKcCKkqf742mPtv05VU-ToowUgfRUkPzviFyKPrq52NGM8jUFfMdmPmEP0ReX8ae8mcet2f7XfArlg7rz9g3RfSIStxY-tTQNnwoxpyv88A6CKnSM_4Y_rVr-QFgofDlptqnk9fxLsYdGuMzY5c6Aq4VGHhWfDYW6VJXNI-Iza1RTDqA6ahQaCECK6HwYvnY9Y1kkiu-izy1A" />
<span className="absolute top-4 left-4 bg-surface/90 backdrop-blur-sm px-space-sm py-1 font-label-caps text-label-caps uppercase tracking-widest text-on-surface">
              01 / Architecture
            </span>
</div>
<div className="p-space-lg flex flex-col justify-between flex-grow space-y-space-md">
<div className="space-y-space-xs">
<h3 className="font-headline-sm text-headline-sm text-on-surface">Precision Haircuts</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant font-light leading-relaxed">
                Sculptural dry and wet cutting methodologies calibrated to accentuate facial bone structure and natural hair flow.
              </p>
</div>
<a className="inline-flex items-center gap-space-xs font-label-caps text-label-caps uppercase tracking-widest text-secondary group-hover:text-on-surface transition-colors" href="#">
              Explore Service <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
</a>
</div>
</div>
{/*  Card 2  */}
<div className="group relative flex flex-col bg-surface overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500">
<div className="relative w-full aspect-[4/5] overflow-hidden bg-surface-container">
<img  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" data-alt="Luminous bespoke honey balayage and soft hair highlights cascading over shoulders, rich tone gradients, natural soft daylight studio." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBCNmyZ5jfGEjAnhdU7upwqkxdiiQ6yvfwvWXpNpUcb7rNdEBWMnVRs52HtB6T5OucgwHIexk237bh41x9wLgBuBJSlNb_U_aZ77YqI3v0RQipEMPsrUkZBuSt0w-knEIhIoD-iPif94kao6dNsukCACg8ON1stRTBkKI9IlxNMRxpKLLrB3MGeUdHth-LJhbsn2T30jSAVoSCeJeGJjX6YNGG3y3qIAO7_L_puMvJfLlF9Ur0vaqjw3g" />
<span className="absolute top-4 left-4 bg-surface/90 backdrop-blur-sm px-space-sm py-1 font-label-caps text-label-caps uppercase tracking-widest text-on-surface">
              02 / Chromatics
            </span>
</div>
<div className="p-space-lg flex flex-col justify-between flex-grow space-y-space-md">
<div className="space-y-space-xs">
<h3 className="font-headline-sm text-headline-sm text-on-surface">Coloring &amp; Highlights</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant font-light leading-relaxed">
                Dimensional balayage, bespoke glossing, and chromatic corrections using organic conditioning pigments.
              </p>
</div>
<a className="inline-flex items-center gap-space-xs font-label-caps text-label-caps uppercase tracking-widest text-secondary group-hover:text-on-surface transition-colors" href="#">
              Explore Service <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
</a>
</div>
</div>
{/*  Card 3  */}
<div className="group relative flex flex-col bg-surface overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500">
<div className="relative w-full aspect-[4/5] overflow-hidden bg-surface-container">
<img  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" data-alt="Silky mirror-like hair restoration with exceptional glass-like shine, flowing texture, editorial studio lighting, warm espresso accents." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDvRasTt0hihUgg8f5I6tGbQNaL_iVin46PFCwQ_56S_tPZ61Hjphp35P_DVFZ9pIfCNBmyvpQkRo2H7bxUSGhMq5BnP8q9PmiwYi4XG5U56Bi0teny_K4uCFkgononeowGWTJT1Xtz4tgP-brAy_NI-ZyAAJIwOsChU6WTR8b9TbBVOFlbEC_4f0z4jIcRpCgzAKYor9x7d-6Cb237z1zGrHcC8dt4V69MuqvEqTc7bHRDhbALI-XhTg" />
<span className="absolute top-4 left-4 bg-surface/90 backdrop-blur-sm px-space-sm py-1 font-label-caps text-label-caps uppercase tracking-widest text-on-surface">
              03 / Restoration
            </span>
</div>
<div className="p-space-lg flex flex-col justify-between flex-grow space-y-space-md">
<div className="space-y-space-xs">
<h3 className="font-headline-sm text-headline-sm text-on-surface">Keratin &amp; Deep Infusions</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant font-light leading-relaxed">
                Formaldehyde-free smoothing elixirs and molecular keratin bonding treatments for enduring, effortless gloss.
              </p>
</div>
<a className="inline-flex items-center gap-space-xs font-label-caps text-label-caps uppercase tracking-widest text-secondary group-hover:text-on-surface transition-colors" href="#">
              Explore Service <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
</a>
</div>
</div>
{/*  Card 4  */}
<div className="group relative flex flex-col bg-surface overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500">
<div className="relative w-full aspect-[4/5] overflow-hidden bg-surface-container">
<img  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" data-alt="Japanese hair spa ritual with warm herbal steam, botanicals, serene relaxation aesthetic, soft sensory atmosphere." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCCOWZRVQHAknBld5tUm4ioPNMiipTQNPzm4qo1Ng6cJkgoRouN9BQY0NGFxnE3FZLE9V2Ix1WzvsoBZvqvNs6LNOqPktpt1DsmjXKUQYJO8fSR-oOiZdo2J_0XkhgT6JLPE8zCMakrgJPWE4rsASb-3FdtirNZQ5ZFEKlqI1iJE9zD4Z66kJoqujsbQbkP83e_9VaVMjA8h1MB4bPBr0lUWvlXF-H30_a2qnN1i4z2z6CoAOeoDLzxHg" />
<span className="absolute top-4 left-4 bg-surface/90 backdrop-blur-sm px-space-sm py-1 font-label-caps text-label-caps uppercase tracking-widest text-on-surface">
              04 / Wellness
            </span>
</div>
<div className="p-space-lg flex flex-col justify-between flex-grow space-y-space-md">
<div className="space-y-space-xs">
<h3 className="font-headline-sm text-headline-sm text-on-surface">Hair Spa &amp; Scalp Therapy</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant font-light leading-relaxed">
                Micro-circulation shiatsu massage combined with cellular scalp detoxifying clays and botanical essences.
              </p>
</div>
<a className="inline-flex items-center gap-space-xs font-label-caps text-label-caps uppercase tracking-widest text-secondary group-hover:text-on-surface transition-colors" href="#">
              Explore Service <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
</a>
</div>
</div>
{/*  Card 5  */}
<div className="group relative flex flex-col bg-surface overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500">
<div className="relative w-full aspect-[4/5] overflow-hidden bg-surface-container">
<img  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" data-alt="Couture bridal editorial hair updo with delicate textured pins and loose modern tendrils, haute couture fashion portrait." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDys6M3-ELjT7PjngzaQBxCPR3EtysvOvsyOHP_J2VksSgAejQv5hCAFBzJOn9h68cI6d9SNnqdkyWbkPCFygNjTCpfTDNf_iJczH9N80GCyfPLfGkwMvuolssqRPrB40AuHPOHI5878hU6eDO4m9dTFGiENrDISD_K_Qr_QTn1kwYA8lYvMF3ezQDSRbR3ELanXpHYeDjg-Q3Ls5axGqZm9ZQ-w5u5nmXwx2b1etj6I9ZGeOEzgEKkpA" />
<span className="absolute top-4 left-4 bg-surface/90 backdrop-blur-sm px-space-sm py-1 font-label-caps text-label-caps uppercase tracking-widest text-on-surface">
              05 / Occasion
            </span>
</div>
<div className="p-space-lg flex flex-col justify-between flex-grow space-y-space-md">
<div className="space-y-space-xs">
<h3 className="font-headline-sm text-headline-sm text-on-surface">Bridal &amp; Gala Styling</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant font-light leading-relaxed">
                Sculptural updos, red-carpet blowouts, and private suite preparation tailored for milestone celebrations.
              </p>
</div>
<a className="inline-flex items-center gap-space-xs font-label-caps text-label-caps uppercase tracking-widest text-secondary group-hover:text-on-surface transition-colors" href="#">
              Explore Service <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
</a>
</div>
</div>
{/*  Card 6  */}
<div className="group relative flex flex-col bg-surface overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500">
<div className="relative w-full aspect-[4/5] overflow-hidden bg-surface-container">
<img  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" data-alt="Gentleman's refined haircut and beard contouring in a private leather barber chair, warm cinematic lighting, editorial masculinity." src="https://lh3.googleusercontent.com/aida-public/AB6AXuC39iCBcwMkSLlLkB0OYH_r8PcFArVJRxtzmqzlSrMdgq9sCUfjyhOwHmyylhPky1Dj6qQ-wxa_gB3GodWTZ4xg7ZiaJhctIS3Lwl7_pYb4OiYX9acO8rEBCuaKoKo3qZveriWXX9aGCyrHpUF9pdRPY0i_DhzrLl5YtvnPG4ZOVfGRidx3BubOVtyBg4YHoqOyinwe7KhUJ92EnP2--tDnX8KiPSPftPjWoz4q1qhHU-FWq_z8JN3UOA" />
<span className="absolute top-4 left-4 bg-surface/90 backdrop-blur-sm px-space-sm py-1 font-label-caps text-label-caps uppercase tracking-widest text-on-surface">
              06 / Grooming
            </span>
</div>
<div className="p-space-lg flex flex-col justify-between flex-grow space-y-space-md">
<div className="space-y-space-xs">
<h3 className="font-headline-sm text-headline-sm text-on-surface">Men's Atelier Grooming</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant font-light leading-relaxed">
                Precision taper fading, classic scissor-over-comb cuts, and hot towel beard rejuvenation rituals.
              </p>
</div>
<a className="inline-flex items-center gap-space-xs font-label-caps text-label-caps uppercase tracking-widest text-secondary group-hover:text-on-surface transition-colors" href="#">
              Explore Service <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
</a>
</div>
</div>
</div>
</div>
</section>
{/*  4. BEFORE & AFTER TRANSFORMATION (Interactive Slider)  */}
<section className="w-full py-space-2xl bg-surface">
<div className="max-w-[1440px] mx-auto px-margin lg:px-margin-desktop">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-desktop items-center">
<div className="lg:col-span-5 space-y-space-md">
<span className="font-label-caps text-label-caps uppercase tracking-widest text-secondary">Visual Evidence</span>
<h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight uppercase">
            SEE THE <span className="italic">DIFFERENCE.</span>
</h2>
<p className="font-body-lg text-body-lg text-on-surface-variant font-light leading-relaxed">
            Real transformations created in our chairs. We engineer seamless blends, dramatic chromatic shifts, and restorative alchemy that revitalizes damaged hair strands to runway vitality.
          </p>
<div className="p-space-md bg-surface-container space-y-space-xs">
<p className="font-label-caps text-label-caps uppercase tracking-widest text-secondary">Featured Case Study</p>
<p className="font-title-md text-title-md text-on-surface">Silk Press &amp; Melted Ash Balayage</p>
<p className="font-body-sm text-body-sm text-on-surface-variant">Master Colorist Elena Vance · 4 Hours · Bond Multiplier Enriched</p>
</div>
<div className="pt-space-sm flex items-center gap-space-md">
<a className="bg-primary text-on-primary px-8 py-4 font-label-caps text-label-caps uppercase tracking-widest hover:bg-secondary transition-colors duration-300 shadow-md" href="#">
              VIEW TRANSFORMATIONS
            </a>
</div>
</div>
<div className="lg:col-span-7">
{/*  Interactive Slider Container  */}
<BeforeAfterSlider />
</div>
</div>
</div>
</section>
{/*  5. FEATURED GALLERY PREVIEW (Asymmetric Mosaic)  */}
<section className="w-full py-space-2xl bg-surface-container-low">
<div className="max-w-[1440px] mx-auto px-margin lg:px-margin-desktop">
<div className="flex flex-col md:flex-row md:items-end justify-between pb-space-xl gap-space-md">
<div className="space-y-space-xs">
<span className="font-label-caps text-label-caps uppercase tracking-widest text-secondary">The Living Lookbook</span>
<h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight uppercase">
            CRAFTED TO <span className="italic">TURN HEADS.</span>
</h2>
</div>
<a className="group inline-flex items-center gap-space-xs font-label-caps text-label-caps uppercase tracking-widest text-on-surface hover:text-secondary transition-colors" href="#">
          View Complete Portfolio <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
{/*  Large Left Image  */}
<div className="md:col-span-7 relative group overflow-hidden bg-surface aspect-[4/5] shadow-sm">
<img  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" data-alt="Editorial close up portrait of rich dimensional dark chocolate brunette waves styled with high gloss texture, natural lighting." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAL0pLzpbHFOMAggaCeO147U5DusXHw_jjwLSgowKbzPpsq2qulhQwu4Y39KnpZC4CK7EGyZUptEFYmmZ6rhTX6FAZ8gy2z5XnvW6GRwWTICziUEUOmjvlpO7s7T43cpUCfIeEvcSb1gK-B7WxjL_3eAW-e5wrkJfxpd0vEhkAiQJUMXmTbTu83Yl2MWE8I4O4-K8ZMHHpCfUdQTtS2n8NvZmyPHBkZj37Wdq6p8stqdWGO-EB63AQ09Q" />
<div className="absolute inset-0 bg-gradient-to-t from-tertiary-container/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-space-lg text-surface-bright">
<span className="font-label-caps text-label-caps text-secondary-fixed uppercase">Brunette Couture</span>
<p className="font-headline-sm text-headline-sm">Espresso Melt &amp; French Layers</p>
</div>
</div>
{/*  Right Column Stacked  */}
<div className="md:col-span-5 flex flex-col gap-gutter">
<div className="relative group overflow-hidden bg-surface aspect-[4/3] shadow-sm">
<img  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" data-alt="Platinum ice blonde short micro bob with high fashion razor texture, architectural minimalist style, bright white background." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCJEIyQAG7ApXny4flf_cK-I9B9-x16bZ7Xg5QePYHoNDJRkDp9d38VqZOnM7n0Ze_LvlXb9DI2-1-ypTbktOi8y14a748rAQ7uY91f8QmJDvY61gW-WPro7BXZyWgmYJM9-c0JUdhRpF7PqMFgipzxo9Iu9St2p7wHvDa9vgLnP1yuDrUcd5xLMrp1_FdXSXvN1urv_5lgBpWcjCUb3Wu9eXMJNA6w4Zml9ADynpkTO0Grfo4ggVHYOg" />
<div className="absolute inset-0 bg-gradient-to-t from-tertiary-container/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-space-md text-surface-bright">
<span className="font-label-caps text-label-caps text-secondary-fixed uppercase">High Pigment</span>
<p className="font-headline-sm text-headline-sm">Nordic Platinum Micro-Bob</p>
</div>
</div>
<div className="grid grid-cols-2 gap-gutter">
<div className="relative group overflow-hidden bg-surface aspect-square shadow-sm">
<img  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" data-alt="Intricate textured hair braid detail viewed from back, editorial gold pin accents, subtle softness." src="https://lh3.googleusercontent.com/aida-public/AB6AXuC7-uGykhwtRr6tYdMDQ2kQXPA79VfWRo-y6ihawqrKKHusNlszSIOb_bVjudfww6lokkwgsSWdMosgTZc6wsrAL5FUSmx9YXtzApcXfsYb7g0Q5gMStz798cy0vWAiE5A4fVCf9MaLEpxuir2g-p-nwia1sZErjVfsl32eeOulFfpIeYYhvj-PjFGORNpycn0r8RbX86R0uqxBc2-aNwoCDYss53dE_3rukXy-vd96eExG_wycHbwoWA" />
<div className="absolute inset-0 bg-tertiary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-space-xs text-center text-surface-bright">
<span className="font-label-caps text-label-caps uppercase tracking-widest text-secondary-fixed">Atelier Details</span>
</div>
</div>
<div className="relative group overflow-hidden bg-surface aspect-square shadow-sm">
<img  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" data-alt="Minimalist luxury salon washing station with marble basin, champagne fixtures, and amber glass hair elixir bottles." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAdP2cm8pxBM-lMwzBbHekClylfuRorc4k3jilHbCdk3JJFkImy17IbYoFj4USivx6bH875UvABghy-jehtwWXOsqB7lAD0ClRtc651f6AlsQve3_CXpPxX1c00a4QwmPU8a9SLguWdKR-Y0TPADx7sjEDYcGDinvU1kQfBLGPYzTdzdLTxRDSFPAnSrX5vc8_udObd5jOKe2EsxeoHvrN5S6yLtaIH65qgjPxdQmI3i9A12f9HZMo0qg" />
<div className="absolute inset-0 bg-tertiary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-space-xs text-center text-surface-bright">
<span className="font-label-caps text-label-caps uppercase tracking-widest text-secondary-fixed">Sanctuary Vibe</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
{/*  6. MEET OUR STYLISTS PREVIEW  */}
<section className="w-full py-space-2xl bg-surface">
<div className="max-w-[1440px] mx-auto px-margin lg:px-margin-desktop">
<div className="text-center max-w-2xl mx-auto pb-space-xl space-y-space-xs">
<span className="font-label-caps text-label-caps uppercase tracking-widest text-secondary">The Masters of Form</span>
<h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight uppercase">
          ARTISANS IN <span className="italic">RESIDENCE.</span>
</h2>
<p className="font-body-md text-body-md text-on-surface-variant font-light">
          Each craftsman brings decades of international runway, cinema, and private atelier background.
        </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-gutter-desktop">
{/*  Stylist 1  */}
<div className="space-y-space-md group">
<div className="relative w-full aspect-[3/4] overflow-hidden bg-surface-container shadow-md">
<img  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" data-alt="High fashion portrait of Elena Vance, creative director with sleek dark hair in a charcoal tailored blazer, serene confident gaze." src="https://lh3.googleusercontent.com/aida-public/AB6AXuA3GwqrgxVgoLE1xIbnK-1FLTBdHvX3td7Mt5klBHsK-BfiWIE-8KvfMOYsUJKeanQ78DmlejVZCpN0OIW-sLNrVt47P8PCVrlFbWKzQTC-y8f5NPyCin4JXMrlRcaO2cHRhgQAy6TxfKPddfhsE51Zz5icjiAnZ1OsEGcbteTuIiYg-HVFXnDbsz4K327vhHm12E1oL8fOzRpGyfRvwR8CUJvO0YjJUSC2LnKcIfSBX0nmAmpXnGA9Qw" />
</div>
<div className="space-y-space-xs">
<span className="font-label-caps text-label-caps uppercase tracking-widest text-secondary">Creative Director</span>
<h3 className="font-headline-md text-headline-md text-on-surface">Elena Vance</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant font-light leading-relaxed">
              Trained in London &amp; Tokyo. Former lead hair designer for Milan Fashion Week. Master of anatomical haircuts and architectural silhouettes.
            </p>
<p className="font-caption text-caption text-secondary font-medium pt-space-xs">Specialty: Precision Bob &amp; Texture Engineering</p>
</div>
</div>
{/*  Stylist 2  */}
<div className="space-y-space-md group">
<div className="relative w-full aspect-[3/4] overflow-hidden bg-surface-container shadow-md">
<img  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" data-alt="Editorial portrait of Marcus Sterling, master colorist with stylish parted hair in crisp off-white linen, warm studio lighting." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDPiAWDSiTHcQVF4QtMQBUBv0G4lU-SZsnwPoppGBlcAZ9r_RprUSNPLTnX27_TIGxEWJFtaj51GWsAYXDf2rgIqJW9jV-zRRSb_q2kvOO4Fj6CB7bdsUj5FZnnoLUr-WFDdw2jA95mCeoWBRhPE6Qppx10qQLbBmq1bDjyo7A9spbGQeC1HBortcvtaqaARt9M4gp_cK-2qWsBpj0K5XHGpL1-yR_zCFBCoBv1O-JHvBYcr55MBCWB2w" />
</div>
<div className="space-y-space-xs">
<span className="font-label-caps text-label-caps uppercase tracking-widest text-secondary">Master Colorist</span>
<h3 className="font-headline-md text-headline-md text-on-surface">Marcus Sterling</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant font-light leading-relaxed">
              15 years mastering chromatic science. Celebrated for creating multi-tonal dimensional blondes and subtle, non-damaging balayage melts.
            </p>
<p className="font-caption text-caption text-secondary font-medium pt-space-xs">Specialty: French Freehand Balayage &amp; Glossing</p>
</div>
</div>
{/*  Stylist 3  */}
<div className="space-y-space-md group">
<div className="relative w-full aspect-[3/4] overflow-hidden bg-surface-container shadow-md">
<img  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" data-alt="Poised editorial portrait of Tara Sen, senior stylist with wavy hair and minimalist gold jewelry against neutral studio backdrop." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBzKkNP7b361hMDWOlpuYJh_R0oWmQPXd0FL7J9YDg13pg35rOfp8PmXq9S50yn8oUH2dEq6FpFT6IiCv_B-HpxOWbxA_GbimsEvqPIoektBCgXyY8Mjp0bvOSHsuGd6beVs_JHETMvSsBmpNyz8yKYjpcHgsSPwbEblhM9tv0WU7P-vI9u99Sgl5cSqa5trohA5N6hufcL6YAc_aEV4m5c3h1Gz_gQgjSyI0AnWjccFIhruvCdyox1RQ" />
</div>
<div className="space-y-space-xs">
<span className="font-label-caps text-label-caps uppercase tracking-widest text-secondary">Senior Stylist &amp; Scalp Specialist</span>
<h3 className="font-headline-md text-headline-md text-on-surface">Tara Sen</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant font-light leading-relaxed">
              Pioneer in holistic hair rejuvenation and bridal artistry. Integrates scalp wellness therapies with timeless occasion glamour.
            </p>
<p className="font-caption text-caption text-secondary font-medium pt-space-xs">Specialty: Haute Bridal &amp; Restorative Rituals</p>
</div>
</div>
</div>
</div>
</section>
{/*  7. THE STUDIO EXPERIENCE  */}
<section className="relative w-full min-h-[70vh] flex items-center justify-center overflow-hidden py-space-2xl">
<div className="absolute inset-0 z-0">
<div className="w-full h-full bg-cover bg-center" data-alt="Wide-angle cinematic interior of a high-end luxury hair salon with fluted wood walls, warm espresso leather chairs, soft cove lighting, and polished stone floors." style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBT-bN4q_qCTPM8MoZv2Cdy3rXgUAu8IASQJ-g0ysrdrYIO0B7EPHAx1xYfSfpXM3IowJJDvO5K8ygDE16ga_BFEk9T2tFCAfh7G7EHGrmVZlsHWEVRoWwRwwvp2iDjMJ43DyEoVO-2e5hU1rlQhmmRHvX0cKV24CymBwzcP5Zid_QJAOx8hGfJn35PeEvf7h0ZEUFeuo9FhiPco6R2SMIWpqYBYbw_6NUPmIM1JsXSKVS-VEg-DbMp5g')" }}></div>
<div className="absolute inset-0 bg-tertiary-container/85 backdrop-blur-[2px]"></div>
</div>
<div className="relative z-10 max-w-[1440px] mx-auto px-margin lg:px-margin-desktop text-center text-surface-bright space-y-space-md">
<span className="font-label-caps text-label-caps uppercase tracking-widest text-secondary-fixed">Sensory Stillness</span>
<h2 className="font-display-lg text-display-lg max-w-3xl mx-auto uppercase tracking-tight leading-tight">
        A SPACE TO UNWIND. <br />
<span className="italic font-normal">A STYLE TO REMEMBER.</span>
</h2>
<p className="font-body-lg text-body-lg text-tertiary-fixed-dim max-w-xl mx-auto font-light leading-relaxed">
        Curated ambient soundscapes, artisanal single-origin teas, and individual private consultation alcoves designed for absolute discretion and calm.
      </p>
<div className="pt-space-md">
<a className="bg-secondary-fixed text-on-secondary-fixed px-8 py-4 font-label-caps text-label-caps uppercase tracking-widest hover:bg-surface-bright transition-colors duration-300 shadow-xl inline-block" href="#">
          EXPLORE OUR STUDIO
        </a>
</div>
</div>
</section>
{/*  8. CLIENT TESTIMONIALS  */}
<section className="w-full py-space-2xl bg-surface">
<div className="max-w-[1440px] mx-auto px-margin lg:px-margin-desktop">
<div className="text-center pb-space-xl space-y-space-xs">
<span className="font-label-caps text-label-caps uppercase tracking-widest text-secondary">Client Endorsements</span>
<h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight uppercase">
          WORDS OF <span className="italic">APPRECIATION.</span>
</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-gutter-desktop">
{/*  Review 1  */}
<div className="bg-surface-container p-space-lg flex flex-col justify-between shadow-sm relative">
<span className="font-headline-lg text-[64px] text-secondary/20 leading-none select-none -mb-4">“</span>
<p className="font-body-md text-body-md text-on-surface italic font-light leading-relaxed relative z-10">
            Elena understood the exact nuance of my hair within minutes. The cut preserved length while eliminating heavy weight. The atmosphere is incomparably tranquil.
          </p>
<div className="pt-space-md border-t border-outline-variant/20 mt-space-md">
<p className="font-title-md text-title-md text-on-surface">Meera Singhania</p>
<p className="font-caption text-caption text-secondary">Couture Cut &amp; Gloss · Mumbai Atelier</p>
</div>
</div>
{/*  Review 2  */}
<div className="bg-surface-container p-space-lg flex flex-col justify-between shadow-sm relative">
<span className="font-headline-lg text-[64px] text-secondary/20 leading-none select-none -mb-4">“</span>
<p className="font-body-md text-body-md text-on-surface italic font-light leading-relaxed relative z-10">
            Marcus transformed my over-processed blonde into a dimensional, healthy honey masterpiece. It’s rare to find a colorist with this level of chemistry mastery.
          </p>
<div className="pt-space-md border-t border-outline-variant/20 mt-space-md">
<p className="font-title-md text-title-md text-on-surface">Rohit Deora</p>
<p className="font-caption text-caption text-secondary">Balayage &amp; Scalp Detox · Delhi Atelier</p>
</div>
</div>
{/*  Review 3  */}
<div className="bg-surface-container p-space-lg flex flex-col justify-between shadow-sm relative">
<span className="font-headline-lg text-[64px] text-secondary/20 leading-none select-none -mb-4">“</span>
<p className="font-body-md text-body-md text-on-surface italic font-light leading-relaxed relative z-10">
            ZENZA is not just a salon, it is my monthly decompression haven. Tara’s scalp therapy and precision styling are unrivaled anywhere in the country.
          </p>
<div className="pt-space-md border-t border-outline-variant/20 mt-space-md">
<p className="font-title-md text-title-md text-on-surface">Ananya Kapoor</p>
<p className="font-caption text-caption text-secondary">Japanese Scalp Ritual · Mumbai Atelier</p>
</div>
</div>
</div>
</div>
</section>
{/*  9. APPOINTMENT CTA SECTION (Espresso Grounded)  */}
<section className="w-full py-space-2xl bg-tertiary-container text-surface-bright">
<div className="max-w-[1440px] mx-auto px-margin lg:px-margin-desktop">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-desktop items-center">
<div className="lg:col-span-8 space-y-space-md">
<span className="font-label-caps text-label-caps uppercase tracking-widest text-secondary-fixed">Private Atelier Reservations</span>
<h2 className="font-display-lg text-display-lg text-surface-bright uppercase tracking-tight leading-tight">
            YOUR NEXT GREAT LOOK <br />
<span className="italic font-normal text-secondary-fixed">STARTS HERE.</span>
</h2>
<p className="font-body-lg text-body-lg text-tertiary-fixed-dim max-w-xl font-light">
            Due to our commitment to unhurried, personalized attention, appointments are strictly limited. Reserve your consultation with an artisan today.
          </p>
</div>
<div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-space-md justify-center items-start lg:items-end">
<a className="w-full sm:w-auto lg:w-full text-center bg-secondary-fixed text-on-secondary-fixed px-8 py-4 font-label-caps text-label-caps uppercase tracking-widest hover:bg-surface-bright transition-colors duration-300 shadow-xl" data-path="booking" href="booking.html">
            BOOK AN APPOINTMENT
          </a>
<a className="w-full sm:w-auto lg:w-full text-center bg-surface-container-lowest/10 text-surface-bright px-8 py-4 font-label-caps text-label-caps uppercase tracking-widest hover:bg-surface-container-lowest/20 transition-colors duration-300" href="#">
            WHATSAPP CONCIERGE
          </a>
</div>
</div>
</div>
</section>
</div>
{/*  Interactive Before & After Slider Logic  */}

    </main>
  )
}
