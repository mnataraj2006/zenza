import React from 'react'

export default function About({ onNavigate }) {
  return (
    <main className="w-full pt-20 bg-surface min-h-[calc(100vh-20rem)]">
<div className="flex flex-col w-full">
{/*  1. Editorial Photographic Hero (Immersive & Bleeding Under Shell Header)  */}
<section className="relative w-full -mt-20 overflow-hidden bg-tertiary-container text-surface-bright">
<div className="absolute inset-0 bg-cover bg-center opacity-40 scale-105 transition-transform duration-1000 ease-out" data-alt="Editorial cinematic wide shot of luxury hair atelier interior with master stylists working in warm diffused natural morning daylight. Minimalist wabi-sabi concrete and polished travertine architecture, brushed champagne brass accents, sheer linen floor-to-ceiling drapes filtering sunbeams, subtle motion blur of a stylist holding Japanese shears, tranquil quiet luxury atmosphere in beige, ivory, and deep charcoal tones." style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDb8M-LD-yhK18tfPQgboUL-pgmv8RrU9T6cQmbrMw_Jh1i3OW3DGYxPn2vy8NiNBmF1XEQedzwbkNFcCLo93yidVDsv_VjqzSbgtmnfpAWqm0dIWAJgw32J4rMVM_QdSSemAPeKCrqHpHbTspXacyvK0kL_RrP4LhdAeYsZad_FitBr5n2X9UMaUSGijP1Eafv5Hipbbp7pfQZgf7QJwT6hbczNE1wUvPRNjMuPbPhLe5qQ2enqBdy-Q')" }}></div>
<div className="absolute inset-0 bg-gradient-to-t from-tertiary-container via-tertiary-container/50 to-transparent"></div>
<div className="absolute inset-0 bg-gradient-to-r from-tertiary-container/80 via-transparent to-tertiary-container/40"></div>
<div className="relative z-10 max-w-[1440px] mx-auto px-margin lg:px-margin-desktop pt-40 pb-space-2xl flex flex-col justify-end min-h-[85vh]">
<div className="max-w-4xl space-y-space-md">
<div className="flex items-center gap-space-sm">
<span className="inline-block w-8 h-[1px] bg-secondary-fixed"></span>
<span className="font-label-caps text-label-caps uppercase tracking-widest text-secondary-fixed">Atelier Monograph • Founded 2011</span>
</div>
<h1 className="font-display-xl text-display-xl tracking-tight text-surface-bright uppercase leading-[1.08]">
          POETRY IN MOTION.<br />
<span className="italic font-normal text-secondary-fixed">MASTERY IN FORM.</span>
</h1>
<p className="font-body-lg text-body-lg text-surface-dim font-light max-w-2xl leading-relaxed pt-space-xs">
          Founded on the belief that hair design is an intimate art form—a dialogue between architectural structure, organic movement, and individual identity.
        </p>
<div className="pt-space-lg flex flex-wrap items-center gap-space-md">
<a className="bg-surface-bright text-tertiary-container font-label-caps text-label-caps uppercase tracking-widest px-space-lg py-space-md shadow-sm hover:bg-secondary-fixed transition-colors inline-flex items-center gap-space-xs" href="#narrative">
<span>Discover The Heritage</span>
<span className="material-symbols-outlined text-[16px]">arrow_downward</span>
</a>
<a className="bg-surface-container-lowest/10 backdrop-blur-sm text-surface-bright font-label-caps text-label-caps uppercase tracking-widest px-space-lg py-space-md hover:bg-surface-container-lowest/20 transition-colors" href="#ateliers">
            Explore Flagship Sanctuaries
          </a>
</div>
</div>
</div>
</section>
{/*  2. Studio Philosophy & Origin + Counter Metrics  */}
<section className="w-full bg-surface py-space-2xl" id="narrative">
<div className="max-w-[1440px] mx-auto px-margin lg:px-margin-desktop">
{/*  Section Tag  */}
<div className="flex items-center justify-between pb-space-lg">
<span className="font-label-caps text-label-caps uppercase text-secondary tracking-widest">01 / Origin &amp; Philosophy</span>
<span className="font-caption text-caption text-on-surface-variant uppercase tracking-wider">Milan • London • Mumbai</span>
</div>
{/*  Editorial Narrative Grid  */}
<div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-desktop items-start">
<div className="lg:col-span-5 space-y-space-md">
<h2 className="font-headline-lg text-headline-lg text-on-surface leading-tight">
            Rejecting the factory salon. Returning to the sacred atelier.
          </h2>
<div className="w-16 h-[2px] bg-secondary"></div>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            In an era dominated by hyper-speed turnarounds, assembly-line blowouts, and algorithmic trends, ZENZA was founded as a quiet act of rebellion. We view styling not as mechanical maintenance, but as an architectural discipline shaped by human kinetics and bone structure.
          </p>
<div className="p-space-md bg-surface-container-low">
<p className="font-headline-sm text-headline-sm italic text-secondary">
              “True elegance is never hurried. It lives in the millimeters between restraint and sculpture.”
            </p>
<p className="font-label-caps text-label-caps uppercase tracking-widest text-on-surface mt-space-sm">— Elena Vance, Creative Director &amp; Co-Founder</p>
</div>
</div>
<div className="lg:col-span-7 space-y-space-md lg:pl-space-md">
<div className="relative overflow-hidden aspect-[16/10] bg-surface-container">
<img  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" data-alt="Monochrome cinematic black and white detail photo of hair shears and fine Japanese steel cutting comb resting on raw travertine marble with soft shadow cast by dried botanical branch, luxurious calm editorial lighting." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDcOGxT-hHw-Gfv8tVjYCtJzVV4oDpRL_Heron9JiL6Sm4dxY6rGLnIJACVq68fLBZyveUBQhu-YsrRIc5PnR3J5PLZg1E5D-dmxJVpcf7Jm3iYdxirqKkTHvisDOZYR2sP4PGvxsQqnjiEBSCG1Yz9XkhgJeTOTVguJyNbjbpO8td2tLgukruOQ1c0McdsU7XE2ImnLoRenMEESjsz3REvL1lOlwAExjVo9J5z_85d-xJy4ITA-H2D-A" />
<div className="absolute bottom-4 left-4 bg-tertiary-container/90 backdrop-blur-md px-space-md py-space-xs text-surface-bright">
<span className="font-label-caps text-label-caps uppercase tracking-widest">Handcrafted Japanese Hitachi Shears • Custom Balanced</span>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-space-md pt-space-xs font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
<p>
              Cut and refined across seven seasons backstage at Milan and London Fashion Weeks, our founders observed a persistent contradiction: backstage craftsmanship yielded immaculate, breathing hair, yet commercial salons routinely subjected clients to synthetic toxicity and rushed 30-minute appointments.
            </p>
<p>
              ZENZA was built to eradicate that compromise. Each client receives a dedicated single-chair sanctuary, holistic cranial analysis, unhurried thermal treatments, and artisanal biodynamic formulations sourced directly from green chemistry laboratories in Bologna and Kyoto.
            </p>
</div>
</div>
</div>
{/*  Numerical Metrics Bar (Bento-style Minimalist Counters)  */}
<div className="mt-space-2xl grid grid-cols-2 lg:grid-cols-4 gap-gutter bg-surface-container-low p-space-lg lg:p-space-xl">
<div className="space-y-space-xs">
<div className="flex items-baseline gap-space-xs">
<span className="font-display-lg text-display-lg text-on-surface font-light" data-counter="14">1</span>
<span className="font-headline-sm text-headline-sm text-secondary font-serif">Yrs</span>
</div>
<p className="font-label-caps text-label-caps uppercase tracking-widest text-on-surface">Years of Craft</p>
<p className="font-caption text-caption text-on-surface-variant">Founded in 2011 with an unwavering standard of excellence.</p>
</div>
<div className="space-y-space-xs">
<div className="flex items-baseline gap-space-xs">
<span className="font-display-lg text-display-lg text-on-surface font-light" data-counter="18">1</span>
<span className="font-headline-sm text-headline-sm text-secondary font-serif">Mstr</span>
</div>
<p className="font-label-caps text-label-caps uppercase tracking-widest text-on-surface">Master Stylists</p>
<p className="font-caption text-caption text-on-surface-variant">Vidal Sassoon and Toni&amp;Guy academy accredited artists.</p>
</div>
<div className="space-y-space-xs">
<div className="flex items-baseline gap-space-xs">
<span className="font-display-lg text-display-lg text-on-surface font-light" data-counter="40">2k</span>
<span className="font-headline-sm text-headline-sm text-secondary font-serif">+</span>
</div>
<p className="font-label-caps text-label-caps uppercase tracking-widest text-on-surface">Tailored Transformations</p>
<p className="font-caption text-caption text-on-surface-variant">Bespoke cuts, balances, and couture formulations delivered.</p>
</div>
<div className="space-y-space-xs">
<div className="flex items-baseline gap-space-xs">
<span className="font-display-lg text-display-lg text-on-surface font-light">100</span>
<span className="font-headline-sm text-headline-sm text-secondary font-serif">%</span>
</div>
<p className="font-label-caps text-label-caps uppercase tracking-widest text-on-surface">Cruelty-Free Botanicals</p>
<p className="font-caption text-caption text-on-surface-variant">Sustainably bottled clean chemistry with zero ammonia.</p>
</div>
</div>
</div>
</section>
{/*  3. Core Pillars & Principles (4 Refined Editorial Cards)  */}
<section className="w-full bg-surface-container py-space-2xl">
<div className="max-w-[1440px] mx-auto px-margin lg:px-margin-desktop">
<div className="flex flex-col md:flex-row md:items-end justify-between pb-space-xl gap-space-md">
<div className="space-y-space-xs">
<span className="font-label-caps text-label-caps uppercase text-secondary tracking-widest">02 / Guiding Tenets</span>
<h2 className="font-headline-lg text-headline-lg text-on-surface uppercase">The Pillars of The Atelier</h2>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant max-w-md">
          Every gesture, from dry-cutting tension to the cadence of the basin scalp massage, is governed by four immutable principles.
        </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
{/*  Pillar 1  */}
<div className="bg-surface p-space-lg flex flex-col justify-between h-full group hover:shadow-lg transition-all duration-300">
<div className="space-y-space-md">
<div className="flex items-center justify-between">
<span className="font-label-caps text-label-caps uppercase text-secondary tracking-widest">Principle 01</span>
<span className="material-symbols-outlined text-secondary">architecture</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-on-surface">Anatomical Precision</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
              We cut to bone structure, jaw contour, and growth vortices. Hair should fall organically into its perfect silhouette without requiring forty minutes of daily thermal manipulation.
            </p>
</div>
<div className="pt-space-lg mt-space-md">
<span className="font-caption text-caption uppercase tracking-wider text-secondary flex items-center gap-space-xs">
              Geometric Balance <span className="material-symbols-outlined text-[14px]">north_east</span>
</span>
</div>
</div>
{/*  Pillar 2  */}
<div className="bg-surface p-space-lg flex flex-col justify-between h-full group hover:shadow-lg transition-all duration-300">
<div className="space-y-space-md">
<div className="flex items-center justify-between">
<span className="font-label-caps text-label-caps uppercase text-secondary tracking-widest">Principle 02</span>
<span className="material-symbols-outlined text-secondary">eco</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-on-surface">Non-Toxic Chemistry</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
              Biodynamic botanicals, vegan keratin infusions, and ammonia-free micro-pigments. We preserve follicle integrity and clean atmospheric air quality without compromising luminous vibrancy.
            </p>
</div>
<div className="pt-space-lg mt-space-md">
<span className="font-caption text-caption uppercase tracking-wider text-secondary flex items-center gap-space-xs">
              Clean Formulations <span className="material-symbols-outlined text-[14px]">north_east</span>
</span>
</div>
</div>
{/*  Pillar 3  */}
<div className="bg-surface p-space-lg flex flex-col justify-between h-full group hover:shadow-lg transition-all duration-300">
<div className="space-y-space-md">
<div className="flex items-center justify-between">
<span className="font-label-caps text-label-caps uppercase text-secondary tracking-widest">Principle 03</span>
<span className="material-symbols-outlined text-secondary">spa</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-on-surface">The Quiet Sanctuary</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
              No blasting pop playlists, no fluorescent ring lights, no rushed cross-talk. Our studios are calibrated acoustic cocoons featuring low-decibel Italian dryers and cedarwood aromatics.
            </p>
</div>
<div className="pt-space-lg mt-space-md">
<span className="font-caption text-caption uppercase tracking-wider text-secondary flex items-center gap-space-xs">
              Acoustic Calm <span className="material-symbols-outlined text-[14px]">north_east</span>
</span>
</div>
</div>
{/*  Pillar 4  */}
<div className="bg-surface p-space-lg flex flex-col justify-between h-full group hover:shadow-lg transition-all duration-300">
<div className="space-y-space-md">
<div className="flex items-center justify-between">
<span className="font-label-caps text-label-caps uppercase text-secondary tracking-widest">Principle 04</span>
<span className="material-symbols-outlined text-secondary">forum</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-on-surface">Unhurried Dialogue</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
              Every first visit commences with an unhurried 20-minute tea ritual and diagnostic dialogue before shears ever touch dry strand. We listen to lifestyle, habits, and unspoken preferences.
            </p>
</div>
<div className="pt-space-lg mt-space-md">
<span className="font-caption text-caption uppercase tracking-wider text-secondary flex items-center gap-space-xs">
              Holistic Diagnostics <span className="material-symbols-outlined text-[14px]">north_east</span>
</span>
</div>
</div>
</div>
</div>
</section>
{/*  4. The Master Team & Stylists (Editorial Roster)  */}
<section className="w-full bg-surface py-space-2xl">
<div className="max-w-[1440px] mx-auto px-margin lg:px-margin-desktop">
<div className="flex flex-col md:flex-row md:items-end justify-between pb-space-xl gap-space-md">
<div className="space-y-space-xs">
<span className="font-label-caps text-label-caps uppercase text-secondary tracking-widest">03 / Artistry Roster</span>
<h2 className="font-headline-lg text-headline-lg text-on-surface uppercase">The Master Stylists</h2>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant max-w-md">
          Educated across the premier academies of London, Paris, and Tokyo. Each artisan brings a dedicated sub-specialty and singular creative vision.
        </p>
</div>
{/*  Stylist Cards Grid  */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter-desktop">
{/*  1: Elena Vance  */}
<div className="flex flex-col bg-surface-container-low group overflow-hidden">
<div className="relative aspect-[3/4] overflow-hidden bg-surface-container">
<img  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" data-alt="Editorial fashion portrait of Elena Vance, creative director hair stylist with chic architectural blunt bob hairstyle, soft beige linen jacket, natural calm expression, minimalist studio lighting with gentle shadow." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCZahnBALtSejiXPbF_E5eWOvSEYuRPDkfR2TW7FNeFjdo76kWb7uBXRBnZlR7vH_xLYyMloQr7Hwlfix_jq-DIZmbiDKQ9mOlDkpS1p30FJeOBexMg-D21TwvJ9tluXR_LOjvcrZEySlzkL4BnWztyrlr-O7jfREj8Ft-Iq53uWfOYhVV-bb6-oBjfrVYsHaBH39FPQYLz7onq2Qr0h4DUty7i9xFN15eOtPLOFneVEg_cLDCZRzvlAQ" />
<div className="absolute top-4 left-4 bg-tertiary-container/90 text-secondary-fixed font-label-caps text-label-caps uppercase tracking-widest px-space-sm py-space-xs">
              Founder • Creative Director
            </div>
</div>
<div className="p-space-lg flex flex-col justify-between flex-grow space-y-space-md">
<div className="space-y-space-xs">
<div className="flex justify-between items-baseline">
<h3 className="font-headline-sm text-headline-sm text-on-surface">Elena Vance</h3>
<span className="font-caption text-caption text-secondary font-medium">18 Yrs Experience</span>
</div>
<p className="font-label-caps text-label-caps uppercase tracking-wider text-secondary">Architectural Dry Cut • Runway Sculpting</p>
<p className="font-body-sm text-body-sm text-on-surface-variant pt-space-xs leading-relaxed">
                Trained at Sassoon London, former runway lead for Giorgio Armani and Jil Sander. Pioneered the signature ZENZA Tension Balance dry technique.
              </p>
</div>
<div className="pt-space-sm flex items-center justify-between">
<span className="font-caption text-caption text-on-surface-variant italic">“British Hair Awards Finalist 2022”</span>
<a className="font-label-caps text-label-caps uppercase tracking-widest text-on-surface hover:text-secondary flex items-center gap-space-xs transition-colors" href="#">
                Reserve Session <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
</a>
</div>
</div>
</div>
{/*  2: Marcus Sterling  */}
<div className="flex flex-col bg-surface-container-low group overflow-hidden">
<div className="relative aspect-[3/4] overflow-hidden bg-surface-container">
<img  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" data-alt="Editorial portrait of Marcus Sterling, head hair colorist with subtle textured dark hair, wearing minimal black turtleneck, warm ambient studio lighting, soft diffused highlights." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCUdrueDkuApvcVe2kY_1oMaR0gvzaxwaYRp92SC54h3BOvoQiBc5uxmnhjMqgoPvSq2kZ97N2bh1h2gNLct-0OtGdUeGEQpV44ejJer-ifVn6omg6APyVJVrenctF5x2Uc8F1JvasBCDffhhPSIwX0fhlLqhhVAd7UHBg6NknjooaEoDM3LWu8_PRL56Tqk0vuVZP9Nsd5DiUED6pVRUUiAf7SEWmqJGlwb0dS01O4uyYKl96cOswM_A" />
<div className="absolute top-4 left-4 bg-tertiary-container/90 text-secondary-fixed font-label-caps text-label-caps uppercase tracking-widest px-space-sm py-space-xs">
              Head Colorist
            </div>
</div>
<div className="p-space-lg flex flex-col justify-between flex-grow space-y-space-md">
<div className="space-y-space-xs">
<div className="flex justify-between items-baseline">
<h3 className="font-headline-sm text-headline-sm text-on-surface">Marcus Sterling</h3>
<span className="font-caption text-caption text-secondary font-medium">14 Yrs Experience</span>
</div>
<p className="font-label-caps text-label-caps uppercase tracking-wider text-secondary">Freehand Balayage • Micro-Pigment Chemistry</p>
<p className="font-body-sm text-body-sm text-on-surface-variant pt-space-xs leading-relaxed">
                Master of soft dimensional luminescence. Celebrated for seamless lived-in blondes, smoky brunettes, and low-contrast grey transitioning.
              </p>
</div>
<div className="pt-space-sm flex items-center justify-between">
<span className="font-caption text-caption text-on-surface-variant italic">“Vogue Color Innovator Recognition”</span>
<a className="font-label-caps text-label-caps uppercase tracking-widest text-on-surface hover:text-secondary flex items-center gap-space-xs transition-colors" href="#">
                Reserve Session <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
</a>
</div>
</div>
</div>
{/*  3: Kenneth Thorne  */}
<div className="flex flex-col bg-surface-container-low group overflow-hidden">
<div className="relative aspect-[3/4] overflow-hidden bg-surface-container">
<img  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" data-alt="Sophisticated portrait of Kenneth Thorne, male master groomer with neatly styled silver hair and beard, wearing bespoke charcoal apron over neutral shirt, artisanal craftsmanship lighting." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAM37uBYiTySCm4RMP2ntlUrSaFnICnx1kW352dEKz2ho2_H0YE8nHAyO2-RiJvuin2iCkmmi6lUVrABEPRIC-u_0avIdaJtVIe4zUhvuU_vGjUrKhEb40vvCOUgGGCF9ayuaPsIoHl9eearmu5LSx6cr7NeLJk__Ky4vtPXq4yeIJYvmAraZmlu4BMhcAO1Lzsgf2kBxMd84OPaI7epI1w7V_pbK4t11RtTZdPnDkuQhs65XJdRyIAHg" />
<div className="absolute top-4 left-4 bg-tertiary-container/90 text-secondary-fixed font-label-caps text-label-caps uppercase tracking-widest px-space-sm py-space-xs">
              Master Groomer
            </div>
</div>
<div className="p-space-lg flex flex-col justify-between flex-grow space-y-space-md">
<div className="space-y-space-xs">
<div className="flex justify-between items-baseline">
<h3 className="font-headline-sm text-headline-sm text-on-surface">Kenneth Thorne</h3>
<span className="font-caption text-caption text-secondary font-medium">16 Yrs Experience</span>
</div>
<p className="font-label-caps text-label-caps uppercase tracking-wider text-secondary">Traditional Barbering • Hot Towel Rituals</p>
<p className="font-body-sm text-body-sm text-on-surface-variant pt-space-xs leading-relaxed">
                Former resident master at Mayfair's historic gentlemen ateliers. Blends classic razor tapers with avant-garde scissor over comb contours.
              </p>
</div>
<div className="pt-space-sm flex items-center justify-between">
<span className="font-caption text-caption text-on-surface-variant italic">“Guild of British Master Barbers”</span>
<a className="font-label-caps text-label-caps uppercase tracking-widest text-on-surface hover:text-secondary flex items-center gap-space-xs transition-colors" href="#">
                Reserve Session <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
</a>
</div>
</div>
</div>
{/*  4: Ananya Patel  */}
<div className="flex flex-col bg-surface-container-low group overflow-hidden">
<div className="relative aspect-[3/4] overflow-hidden bg-surface-container">
<img  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" data-alt="Graceful studio portrait of Ananya Patel, bridal and couture hair stylist with elegant hair bun, wearing neutral beige silk blouse, soft warm key light, quiet luxury editorial mood." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBaTKJQI4wPmHc1BTKUV5VSbtvsyZVuo-wMmDuBIGd5RFddbP2KlR7vHd0UbwzJ8M0g9xsR9I8dYcFV4AXPU88K35brK3TxVpV7_E8-0T3FJt-bpxTEKuZKYpzaJsd1yYJGhJzbQc5vetjsGZyws5QrBKR2eNpVmyS8vZjRvRxoFttgx0lpvhsnk7EjxVUzzb4mAPxXRltHmf7lA7xU8SH8Bu_EcZNZbATpxz9Q-7wmWXnL15hzLYJw-g" />
<div className="absolute top-4 left-4 bg-tertiary-container/90 text-secondary-fixed font-label-caps text-label-caps uppercase tracking-widest px-space-sm py-space-xs">
              Bridal &amp; Couture Updo Lead
            </div>
</div>
<div className="p-space-lg flex flex-col justify-between flex-grow space-y-space-md">
<div className="space-y-space-xs">
<div className="flex justify-between items-baseline">
<h3 className="font-headline-sm text-headline-sm text-on-surface">Ananya Patel</h3>
<span className="font-caption text-caption text-secondary font-medium">12 Yrs Experience</span>
</div>
<p className="font-label-caps text-label-caps uppercase tracking-wider text-secondary">Couture Chignons • Regal Heritage Styling</p>
<p className="font-body-sm text-body-sm text-on-surface-variant pt-space-xs leading-relaxed">
                Specialist in architectural bridal updos that withstand humidity and movement while maintaining weightless, cloud-like softness.
              </p>
</div>
<div className="pt-space-sm flex items-center justify-between">
<span className="font-caption text-caption text-on-surface-variant italic">“Harper's Bazaar Bridal Key Artist”</span>
<a className="font-label-caps text-label-caps uppercase tracking-widest text-on-surface hover:text-secondary flex items-center gap-space-xs transition-colors" href="#">
                Reserve Session <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
</a>
</div>
</div>
</div>
{/*  5: Maya Sen  */}
<div className="flex flex-col bg-surface-container-low group overflow-hidden">
<div className="relative aspect-[3/4] overflow-hidden bg-surface-container">
<img  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" data-alt="Editorial portrait of Maya Sen, texture specialist stylist with curly voluminous hair styled naturally, wearing minimalist olive linen shirt, artistic soft directional natural lighting." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCeR-M-5nVGageYZyFNPCVu9FNFn8ZZdiOtkpjfRSUdvn1coc80Y0v5Pe8IFuT11QX4_pmoYs5zMI6QVxHB1lNFTr_yFvFKA78XP9rndt7GQH4dm1ulNknCCR-2CRo4UPylrS9U6TV99wBT0PQZL7_l4dCPY0gWSsGEUw_RZZkiftOQBmdmi8JTl_R-V_tH7nI9MtyvrB1YjpVnKcizLJl82JmMnYlI0t3KvbgIWGWaHHaT6sdmS02oWQ" />
<div className="absolute top-4 left-4 bg-tertiary-container/90 text-secondary-fixed font-label-caps text-label-caps uppercase tracking-widest px-space-sm py-space-xs">
              Texture &amp; Curl Specialist
            </div>
</div>
<div className="p-space-lg flex flex-col justify-between flex-grow space-y-space-md">
<div className="space-y-space-xs">
<div className="flex justify-between items-baseline">
<h3 className="font-headline-sm text-headline-sm text-on-surface">Maya Sen</h3>
<span className="font-caption text-caption text-secondary font-medium">10 Yrs Experience</span>
</div>
<p className="font-label-caps text-label-caps uppercase tracking-wider text-secondary">Curl Hydration • Japanese Botanical Smoothing</p>
<p className="font-body-sm text-body-sm text-on-surface-variant pt-space-xs leading-relaxed">
                Champion of organic wave pattern enhancement and non-damaging smoothing therapies that restore natural curl elasticity.
              </p>
</div>
<div className="pt-space-sm flex items-center justify-between">
<span className="font-caption text-caption text-on-surface-variant italic">“World Texture Congress Speaker 2024”</span>
<a className="font-label-caps text-label-caps uppercase tracking-widest text-on-surface hover:text-secondary flex items-center gap-space-xs transition-colors" href="#">
                Reserve Session <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
</a>
</div>
</div>
</div>
{/*  6: Bespoke Consultation Card  */}
<div className="flex flex-col bg-tertiary-container text-surface-bright p-space-xl justify-between">
<div className="space-y-space-md">
<span className="font-label-caps text-label-caps uppercase tracking-widest text-secondary-fixed">Private Atelier Curation</span>
<h3 className="font-headline-md text-headline-md text-surface-bright">Looking for a tailored stylist match?</h3>
<p className="font-body-sm text-body-sm text-tertiary-fixed-dim leading-relaxed">
              Our salon concierge assesses your texture profile, aesthetic aspirations, and preferred schedule to pair you with the ideal master artisan.
            </p>
</div>
<div className="pt-space-xl space-y-space-md">
<div className="flex items-center gap-space-sm text-secondary-fixed">
<span className="material-symbols-outlined">verified</span>
<span className="font-caption text-caption tracking-wider uppercase">Zero Obligation Diagnostic</span>
</div>
<a className="block text-center w-full bg-secondary-fixed text-on-secondary-fixed font-label-caps text-label-caps uppercase tracking-widest py-space-md hover:bg-surface-bright transition-colors shadow-sm" href="#">
              Connect With Concierge
            </a>
</div>
</div>
</div>
</div>
</section>
{/*  5. Atelier Spaces (Architectural Showcase)  */}
<section className="w-full bg-surface-container-high py-space-2xl" id="ateliers">
<div className="max-w-[1440px] mx-auto px-margin lg:px-margin-desktop">
<div className="max-w-2xl space-y-space-xs pb-space-xl">
<span className="font-label-caps text-label-caps uppercase text-secondary tracking-widest">04 / Spatial Architecture</span>
<h2 className="font-headline-lg text-headline-lg text-on-surface uppercase">The Flagship Sanctuaries</h2>
<p className="font-body-md text-body-md text-on-surface-variant pt-space-xs">
          Engineered alongside renowned acoustic architects and biophilic designers to quiet the nervous system the moment you cross the threshold.
        </p>
</div>
{/*  Atelier Bento Mosaic  */}
<div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
{/*  Feature 1: The Shiatsu Sensory Washrooms  */}
<div className="lg:col-span-8 bg-surface overflow-hidden group">
<div className="relative aspect-[16/9] overflow-hidden bg-surface-container">
<img  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" data-alt="Architectural photograph of a luxury hair salon shampoo wash basin suite with reclining Italian black leather Shiatsu massage chairs, dim indirect warm backlighting, dark fluted wood wall panels, minimalist zen luxury aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCPuA3URQZJJXDZJQ-vXr14cj1UcI5nYERLWJbZV0FnK30PSnk3lr2RG2I8boPH7tyynVAID8j0AWxtvLeOL2trq9K7mTdcSAaASRsYYvFiZNZgqv76U9O_9XMdwp4npauM0Tfig23x-hrc8cMBKWIZXz-6xaR4n8fh9bZUnVLcxAmJicz6n57BiadAsuWLOGmbjkb3G4wwlm-39XqvGNqHm1XTXKUMjOSlx1PV4ti9SPWaRu_d9US55A" />
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
<div className="absolute bottom-6 left-6 right-6 text-surface-bright">
<span className="font-label-caps text-label-caps uppercase tracking-widest text-secondary-fixed">Zone 01 • Sensory Basin Room</span>
<h3 className="font-headline-md text-headline-md text-surface-bright pt-space-xs">Ergonomic Shiatsu Massage Lounges</h3>
<p className="font-body-sm text-body-sm text-surface-dim font-light max-w-xl pt-space-xs hidden md:block">
                Fully reclined basin beds with integrated micro-vibration acupressure, chromotherapy ambient mood illumination, and Japanese micro-bubble ozone water purifiers.
              </p>
</div>
</div>
</div>
{/*  Feature 2: VIP Suite  */}
<div className="lg:col-span-4 bg-surface p-space-lg flex flex-col justify-between">
<div className="space-y-space-md">
<div className="relative aspect-square overflow-hidden bg-surface-container">
<img  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" data-alt="Interior shot of private luxury VIP salon styling suite with brushed gold floor mirrors, single bespoke armchair, warm travertine stone side table with ceramic tea set, secluded tranquil luxury ambiance." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDjsLcxH9Q-gGN-GrRht-l63OYWZGK6eNb0IN9l5f8JY9y1pZx2qHKuycGA_B2ZkUBzXzcW5cLF5RLBJOMkSjmcT-qYzkGcBgCCXGSiUPhSkgYV5tU5oVfkDx92S-QpEPKqFyxQgpUmz1BxP1FClwZj_-KnzXSd9lwBfmIqCIxGzkcYCHY3GRFVBpyGbui3J2VdfsZToyWEeg85cuWM4HYSaXPOeKXy02heRo0vZkOGnbNZpkL2CXOuRA" />
</div>
<div>
<span className="font-label-caps text-label-caps uppercase tracking-widest text-secondary">Zone 02 • Private Suite</span>
<h4 className="font-headline-sm text-headline-sm text-on-surface pt-space-xs">The Obsidian Suite</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant pt-space-xs leading-relaxed">
                Dedicated secluded chambers with private entrance, personal music selection, soundproof acoustic wall felt, and private wash stations for discreet bespoke sessions.
              </p>
</div>
</div>
<div className="pt-space-md">
<span className="font-caption text-caption text-on-surface font-semibold tracking-wider uppercase flex items-center gap-space-xs">
              Available in Mumbai &amp; Delhi <span className="material-symbols-outlined text-[16px] text-secondary">location_on</span>
</span>
</div>
</div>
{/*  Feature 3: Natural Filtered Daylight Bays  */}
<div className="lg:col-span-4 bg-surface p-space-lg flex flex-col justify-between">
<div className="space-y-space-md">
<div className="relative aspect-square overflow-hidden bg-surface-container">
<img  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" data-alt="Close up architectural detail of salon styling bay showing pure 5500K color balanced natural diffused daylight streaming through ribbed sheer curtains onto polished brass scissors and glass product vials." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCLOsDiFAmcdCeitcfJ5atoCg1kpWN_q-eL41wayZvR1G3dMviFdq4H71BhEJpzATkj6jAAVj9cN2rnOSRFlfrkO0hl2ennZaSIcXeXjocyN0of8GwmP5h2iLAcnSn1BSIUz0Eof7ElekJOzWlIcnJx6JbkUFRWUlezGJvGPtKmUWXCmAWlnVofDUtbuQ9FBpF-wqXLrsuE5UWDIJ8VZ5ZKC-rTzgnTbP6j6wGph5Jw338JkFDhhsRRMg" />
</div>
<div>
<span className="font-label-caps text-label-caps uppercase tracking-widest text-secondary">Zone 03 • Color Laboratory</span>
<h4 className="font-headline-sm text-headline-sm text-on-surface pt-space-xs">5,500K True Daylight Calibration</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant pt-space-xs leading-relaxed">
                Every styling mirror is surrounded by museum-grade full-spectrum optics, ensuring your color tones render identical outdoors under true sunlight.
              </p>
</div>
</div>
<div className="pt-space-md">
<span className="font-caption text-caption text-on-surface font-semibold tracking-wider uppercase flex items-center gap-space-xs">
              Color Fidelity Certified <span className="material-symbols-outlined text-[16px] text-secondary">verified</span>
</span>
</div>
</div>
{/*  Feature 4: Flagship Locations Dual Showcase  */}
<div className="lg:col-span-8 bg-surface p-space-lg lg:p-space-xl flex flex-col justify-between">
<div>
<div className="flex items-center justify-between pb-space-md">
<span className="font-label-caps text-label-caps uppercase tracking-widest text-secondary">Flagship Ateliers</span>
<span className="font-caption text-caption text-on-surface-variant">Seven Days • Appointment Only</span>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-space-lg">
<div className="p-space-md bg-surface-container-low space-y-space-xs">
<span className="font-label-caps text-label-caps uppercase tracking-widest text-secondary">Mumbai Flagship</span>
<h4 className="font-title-md text-title-md text-on-surface">Altamount Road Atelier</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant">42 Altamount Road, Cumballa Hill, Mumbai 400026</p>
<div className="pt-space-xs space-y-space-xs font-caption text-caption text-on-surface">
<div className="flex items-center gap-space-xs"><span className="material-symbols-outlined text-[16px] text-secondary">call</span>+91 22 2380 4411</div>
<div className="flex items-center gap-space-xs"><span className="material-symbols-outlined text-[16px] text-secondary">local_parking</span>Valet Parking Available</div>
</div>
</div>
<div className="p-space-md bg-surface-container-low space-y-space-xs">
<span className="font-label-caps text-label-caps uppercase tracking-widest text-secondary">New Delhi Flagship</span>
<h4 className="font-title-md text-title-md text-on-surface">The Manor Atelier</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant">77 Friends Colony West, New Delhi 110065</p>
<div className="pt-space-xs space-y-space-xs font-caption text-caption text-on-surface">
<div className="flex items-center gap-space-xs"><span className="material-symbols-outlined text-[16px] text-secondary">call</span>+91 11 4105 8820</div>
<div className="flex items-center gap-space-xs"><span className="material-symbols-outlined text-[16px] text-secondary">local_florist</span>Private Courtyard Garden</div>
</div>
</div>
</div>
</div>
<div className="pt-space-lg flex flex-wrap items-center justify-between gap-space-md">
<p className="font-caption text-caption text-on-surface-variant">
              Visiting from abroad? Contact our international salon concierge for travel coordination and extended atelier block bookings.
            </p>
<a className="font-label-caps text-label-caps uppercase tracking-widest text-on-surface hover:text-secondary underline underline-offset-4" href="#">
              Download Spatial Lookbook
            </a>
</div>
</div>
</div>
</div>
</section>
{/*  6. Invitation Banner to Experience the Atelier  */}
<section className="w-full bg-tertiary-container text-surface-bright py-space-2xl relative overflow-hidden">
{/*  Subtle Background Accent Graphic  */}
<div className="absolute -right-20 -bottom-20 w-96 h-96 rounded-full bg-secondary/10 blur-3xl pointer-events-none"></div>
<div className="absolute left-1/4 -top-20 w-72 h-72 rounded-full bg-secondary-fixed/5 blur-2xl pointer-events-none"></div>
<div className="max-w-[1440px] mx-auto px-margin lg:px-margin-desktop relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-desktop items-center">
<div className="lg:col-span-8 space-y-space-md">
<div className="flex items-center gap-space-xs text-secondary-fixed">
<span className="inline-block w-6 h-[1px] bg-secondary-fixed"></span>
<span className="font-label-caps text-label-caps uppercase tracking-widest">An Invitation to Stillness</span>
</div>
<h2 className="font-display-lg text-display-lg text-surface-bright uppercase leading-tight">
            Your transformation begins with an unhurried conversation.
          </h2>
<p className="font-body-lg text-body-lg text-surface-dim font-light max-w-2xl leading-relaxed">
            Reserve your complimentary diagnostic appointment. Experience hair design articulated as fine art, executed with surgical precision and botanical purity.
          </p>
<div className="pt-space-md flex flex-wrap items-center gap-space-md">
<a className="bg-secondary-fixed text-on-secondary-fixed font-label-caps text-label-caps uppercase tracking-widest px-space-xl py-space-md hover:bg-surface-bright transition-all shadow-md inline-flex items-center gap-space-xs" data-path="booking" href="booking.html">
<span>Reserve Atelier Visit</span>
<span className="material-symbols-outlined text-[18px]">calendar_today</span>
</a>
<a className="bg-surface-container-lowest/10 backdrop-blur text-surface-bright font-label-caps text-label-caps uppercase tracking-widest px-space-lg py-space-md hover:bg-surface-container-lowest/20 transition-colors" data-path="services" href="services.html">
              Explore Service Portfolio
            </a>
</div>
</div>
<div className="lg:col-span-4 bg-surface-container-lowest/5 p-space-lg backdrop-blur-sm space-y-space-md mt-space-lg lg:mt-0">
<div className="space-y-space-xs">
<span className="font-label-caps text-label-caps uppercase tracking-widest text-secondary-fixed">Atelier Concierge Direct</span>
<h4 className="font-headline-sm text-headline-sm text-surface-bright">Immediate Inquiries</h4>
<p className="font-body-sm text-body-sm text-surface-dim">
              Our hospitality team responds within 15 minutes during studio operational hours.
            </p>
</div>
<div className="space-y-space-xs pt-space-xs font-body-sm text-body-sm text-surface-bright">
<div className="flex items-center gap-space-sm py-space-xs">
<span className="material-symbols-outlined text-secondary-fixed">chat</span>
<span>WhatsApp: +91 98200 48820</span>
</div>
<div className="flex items-center gap-space-sm py-space-xs">
<span className="material-symbols-outlined text-secondary-fixed">mail</span>
<span>concierge@zenzastudio.com</span>
</div>
<div className="flex items-center gap-space-sm py-space-xs">
<span className="material-symbols-outlined text-secondary-fixed">schedule</span>
<span>Mon – Sat: 10:00 AM – 9:00 PM</span>
</div>
</div>
<div className="pt-space-xs">
<span className="font-caption text-caption text-secondary-fixed uppercase tracking-wider block">
              ∗ Valet &amp; private parking guaranteed for all booked guests
            </span>
</div>
</div>
</div>
</div>
</section>
</div>

    </main>
  )
}
