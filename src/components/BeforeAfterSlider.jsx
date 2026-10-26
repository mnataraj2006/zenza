import React, { useState, useRef, useCallback } from 'react'

export default function BeforeAfterSlider() {
  const [sliderPos, setSliderPos] = useState(50)
  const isDragging = useRef(false)
  const containerRef = useRef(null)

  const handleMove = useCallback((clientX) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = clientX - rect.left
    const percent = Math.min(Math.max((x / rect.width) * 100, 0), 100)
    setSliderPos(percent)
  }, [])

  const handleMouseDown = () => {
    isDragging.current = true
  }

  const handleMouseUp = () => {
    isDragging.current = false
  }

  const handleMouseMove = (e) => {
    if (!isDragging.current) return
    handleMove(e.clientX)
  }

  const handleTouchMove = (e) => {
    if (e.touches && e.touches[0]) {
      handleMove(e.touches[0].clientX)
    }
  }

  return (
    <div className="w-full">
      <div
        ref={containerRef}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
        className="relative w-full aspect-[4/3] overflow-hidden select-none shadow-2xl cursor-ew-resize group"
      >
        {/* After Image (Background) */}
        <img
          className="absolute inset-0 w-full h-full object-cover"
          alt="Finished high-end hair transformation: glistening ash blonde balayage with voluminous curls and radiant shine under studio lights."
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDwKNZD6cl8Pwxjx1n2eOaIpNFLIKUZZwM9nIl1i4e9aKm9heki3E47jtzkXXoEEC4VJirpMj4hNetg4dmmTf076AT3A5hOys3cGavzVbZugpCX0Ezg1CBgCVKAFA23G8t2qbkIHkwGE7j_nDDq922OK_FGeCbXuij_fjXkaRIZ4-Kd3uJHRAmdUJLkKiNRJ20wPJuy6epn6IiLl6f3i5I-pFq3RySL-HLZRaai5B7fLXkOotsRZcGIkQ"
        />
        <div className="absolute top-4 right-4 bg-tertiary/75 backdrop-blur-md text-surface-bright px-3 py-1 font-label-caps text-label-caps uppercase tracking-widest z-10 pointer-events-none">
          After Transformation
        </div>

        {/* Before Image (Clipped Foreground) */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ width: `${sliderPos}%` }}
        >
          <img
            className="absolute inset-0 w-full h-full object-cover"
            style={{ width: containerRef.current ? `${containerRef.current.offsetWidth}px` : '100%', maxWidth: 'none' }}
            alt="Before hair styling: unstyled brassy dry hair with uneven tone before professional color correction and conditioning."
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCxROZH7ZmDiNZoOY3roR4JE8n7WWbHy1FW6vQoDCAtB7NcN7iHvodNTQL0qqFFLxixfHRv3chNbYvroFxQe6OHuY_KQBAOBA9euKuqZqSod5AONqNRvMbObQkiV_7w5qYxfrY0_CcKbjvsRxe9h0Xln8misCjmS4loGq3_7ajkywfaKrsu8zDH0gGUJfCMMKUA0wQbJE8pqBt5rlmNbRa1GzbOcotIOR0beRD1ZvSdTPldGfIH0p9ZuQ"
          />
          <div className="absolute top-4 left-4 bg-surface/90 backdrop-blur-md text-on-surface px-3 py-1 font-label-caps text-label-caps uppercase tracking-widest pointer-events-none whitespace-nowrap">
            Before Service
          </div>
        </div>

        {/* Divider Line & Handle */}
        <div
          className="absolute top-0 bottom-0 w-[2px] bg-surface-bright flex items-center justify-center -translate-x-1/2 pointer-events-none shadow-lg z-20"
          style={{ left: `${sliderPos}%` }}
        >
          <div className="w-8 h-8 bg-surface-bright rounded-full flex items-center justify-center text-on-surface shadow-xl border border-secondary/20">
            <span className="material-symbols-outlined text-[16px]">code</span>
          </div>
        </div>
      </div>
      <p className="font-caption text-caption text-outline-variant text-center pt-space-xs">
        Drag slider left or right to inspect before and after craftsmanship
      </p>
    </div>
  )
}
