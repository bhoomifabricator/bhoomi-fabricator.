'use client'
import { useState } from 'react'
import { useReveal } from '@/components/useReveal'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const categories = ['All', 'Exhibition', 'Interior', 'Carpentry', 'Turnkey']

const projects = [
  { title: 'AutoExpo Brand Pavilion', category: 'Exhibition', size: 'large', img: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=900&q=80', client: 'AutoCorp India', year: '2024' },
  { title: 'Corporate HQ Interior', category: 'Interior', size: 'medium', img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=700&q=80', client: 'TechStar Pvt Ltd', year: '2024' },
  { title: 'Pharma Expo Stall 200sqm', category: 'Exhibition', size: 'medium', img: 'https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=700&q=80', client: 'HealthCare Plus', year: '2023' },
  { title: 'Luxury Retail Showroom', category: 'Interior', size: 'large', img: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=900&q=80', client: 'Prestige Jewellers', year: '2024' },
  { title: 'Custom Reception Suite', category: 'Carpentry', size: 'small', img: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=500&q=80', client: 'Meridian Group', year: '2023' },
  { title: 'FMCG Brand Activation', category: 'Exhibition', size: 'medium', img: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=700&q=80', client: 'NutriLife Foods', year: '2024' },
  { title: 'Office Fit-out Complete', category: 'Turnkey', size: 'large', img: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=900&q=80', client: 'Finance Hub', year: '2023' },
  { title: 'Modular Display System', category: 'Exhibition', size: 'small', img: 'https://images.unsplash.com/photo-1594212699903-ec8a3eca368f?w=500&q=80', client: 'ElectroCorp', year: '2024' },
  { title: 'Restaurant Interior', category: 'Interior', size: 'medium', img: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=700&q=80', client: 'Spice Route', year: '2023' },
  { title: 'Bespoke Wooden Shelving', category: 'Carpentry', size: 'small', img: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=500&q=80', client: 'Librarium', year: '2024' },
  { title: 'Tech Startup Office', category: 'Turnkey', size: 'medium', img: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=700&q=80', client: 'InnoVate Labs', year: '2023' },
  { title: 'Education Expo Pavilion', category: 'Exhibition', size: 'large', img: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?w=900&q=80', client: 'EduWorld', year: '2024' },
]

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('All')
  useReveal()

  const filtered = activeFilter === 'All' ? projects : projects.filter(p => p.category === activeFilter)

  return (
    <>
      {/* Hero */}
      <section
        className="relative pt-40 pb-24 px-6 lg:px-12 overflow-hidden grain-overlay"
        style={{ background: '#111' }}
      >
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: 'linear-gradient(rgba(201,168,76,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.3) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <p className="section-label mb-4">Our Work</p>
          <h1 className="hero-title mb-6" style={{ color: '#F5F0E8', fontSize: 'clamp(2.5rem,6vw,5.5rem)' }}>
            Projects That <span className="text-gold-shimmer">Inspire</span>
          </h1>
          <div className="gold-line mx-auto mb-6" />
          <p
            className="text-lg max-w-xl mx-auto leading-relaxed"
            style={{ color: '#8A8A8A', fontFamily: 'var(--font-body)' }}
          >
            A showcase of our finest work across exhibitions, interiors, carpentry, and turnkey projects.
          </p>
        </div>
      </section>

      {/* Filter */}
      <section className="py-8 px-6 lg:px-12 sticky top-16 z-40" style={{ background: 'rgba(17,17,17,0.95)', backdropFilter: 'blur(20px)', borderBottom: '1px solid rgba(201,168,76,0.1)' }}>
        <div className="max-w-7xl mx-auto flex gap-3 overflow-x-auto pb-1">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className="shrink-0 px-5 py-2 text-sm font-medium transition-all duration-300"
              style={{
                fontFamily: 'var(--font-body)',
                background: activeFilter === cat ? 'linear-gradient(135deg, #C9A84C, #9B7A2C)' : 'transparent',
                color: activeFilter === cat ? '#1A1A1A' : '#8A8A8A',
                border: activeFilter === cat ? 'none' : '1px solid rgba(255,255,255,0.1)',
                letterSpacing: '0.04em',
              }}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Grid */}
      <section className="py-16 px-6 lg:px-12" style={{ background: '#111' }}>
        <div className="max-w-7xl mx-auto">
          <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
            {filtered.map((p, i) => (
              <div
                key={`${p.title}-${i}`}
                className="break-inside-avoid img-overlay group cursor-pointer relative"
                style={{ marginBottom: '1rem' }}
              >
                <div className="overflow-hidden" style={{ aspectRatio: p.size === 'large' ? '3/4' : p.size === 'small' ? '4/3' : '1/1' }}>
                  <Image
                    src={p.img}
                    alt={p.title}
                    width={900}
                    height={900}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute inset-0 z-10 flex flex-col justify-end p-6">
                  <div className="flex items-center justify-between mb-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <span
                      className="text-xs tracking-widest uppercase px-2 py-1"
                      style={{ color: '#1A1A1A', background: '#C9A84C', fontFamily: 'var(--font-mono)' }}
                    >
                      {p.category}
                    </span>
                    <span className="text-xs" style={{ color: '#8A8A8A' }}>{p.year}</span>
                  </div>
                  <h3
                    className="text-lg font-semibold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
                    style={{ color: '#F5F0E8', fontFamily: 'var(--font-display)' }}
                  >
                    {p.title}
                  </h3>
                  <p
                    className="text-xs mt-1 opacity-0 group-hover:opacity-100 transition-all duration-400"
                    style={{ color: '#C9A84C', fontFamily: 'var(--font-mono)' }}
                  >
                    {p.client}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-24 px-6 lg:px-12 text-center"
        style={{ background: '#1A1A1A', borderTop: '1px solid rgba(201,168,76,0.15)' }}
      >
        <div className="max-w-xl mx-auto reveal">
          <p className="section-label mb-4">Start Your Project</p>
          <h2 className="section-title mb-6" style={{ color: '#F5F0E8' }}>
            Your Project Could Be <span className="text-gold-shimmer">Next</span>
          </h2>
          <Link href="/contact" className="btn-gold">
            <span>Discuss Your Project</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  )
}
