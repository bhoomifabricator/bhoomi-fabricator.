'use client'
import { useReveal } from '@/components/useReveal'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, CheckCircle2, Star, ChevronRight } from 'lucide-react'

const services = [
  {
    icon: '🏛️',
    title: 'Exhibition Stall Design',
    desc: 'Award-worthy exhibition stalls that captivate audiences and maximize brand impact at trade shows and expos.',
  },
  {
    icon: '🎨',
    title: '3D Visualization',
    desc: 'Photorealistic 3D renders that let you experience your project before a single nail is hammered.',
  },
  {
    icon: '🏠',
    title: 'Interior Design',
    desc: 'Transforming spaces into purposeful, aesthetic environments that reflect your brand and culture.',
  },
  {
    icon: '🔨',
    title: 'Construction Services',
    desc: 'End-to-end construction management with precision craftsmanship and on-time delivery.',
  },
  {
    icon: '🪵',
    title: 'Custom Carpentry',
    desc: 'Bespoke furniture and woodwork crafted to exact specifications with premium materials.',
  },
  {
    icon: '🔑',
    title: 'Turnkey Projects',
    desc: 'Complete project ownership from concept development to installation and handover.',
  },
]

const stats = [
  { number: '500+', label: 'Projects Completed' },
  { number: '12+', label: 'Years Experience' },
  { number: '200+', label: 'Happy Clients' },
  { number: '50+', label: 'Cities Covered' },
]

const portfolio = [
  {
    title: 'Tech Corp Exhibition Stall',
    category: 'Exhibition Design',
    img: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80',
  },
  {
    title: 'Premium Retail Interior',
    category: 'Interior Design',
    img: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80',
  },
  {
    title: 'Pharma Expo Stall',
    category: 'Exhibition Design',
    img: 'https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=800&q=80',
  },
  {
    title: 'Corporate Office Fit-out',
    category: 'Interior Design',
    img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80',
  },
  {
    title: 'Custom Woodwork Suite',
    category: 'Carpentry',
    img: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80',
  },
  {
    title: 'FMCG Brand Activation',
    category: 'Exhibition Design',
    img: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=800&q=80',
  },
]

const testimonials = [
  {
    name: 'Rajesh Mehta',
    company: 'TechWorld Expo',
    text: 'Bhoomi Fabricator transformed our exhibition vision into reality. The stall design was exceptional and drew crowds throughout the event.',
    stars: 5,
  },
  {
    name: 'Priya Shah',
    company: 'Apex Pharmaceuticals',
    text: 'Professional team, on-time delivery, and remarkable quality. Their 3D visualization helped us visualize perfectly before execution.',
    stars: 5,
  },
  {
    name: 'Amit Gupta',
    company: 'Sunrise Retail',
    text: 'Outstanding interior design work. Sanjay and his team understood our brand identity and executed it flawlessly.',
    stars: 5,
  },
]

export default function Home() {
  useReveal()

  return (
    <>
      {/* ─── HERO ─── */}
      <section
        className="relative min-h-screen flex items-end grain-overlay overflow-hidden"
        style={{ background: '#111' }}
      >
        {/* BG image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1600&q=85"
            alt="Exhibition stall design"
            fill
            priority
            className="object-cover"
            style={{ opacity: 0.25 }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(180deg, rgba(17,17,17,0.3) 0%, rgba(17,17,17,0.6) 60%, rgba(17,17,17,1) 100%)',
            }}
          />
        </div>

        {/* Decorative gold lines */}
        <div
          className="absolute top-1/3 right-0 w-px h-64 opacity-30"
          style={{ background: 'linear-gradient(to bottom, transparent, #C9A84C, transparent)' }}
        />
        <div
          className="absolute top-1/2 left-16 w-48 h-px opacity-20"
          style={{ background: 'linear-gradient(to right, transparent, #C9A84C, transparent)' }}
        />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pb-24 pt-40 w-full">
          <div className="max-w-4xl">
            <p className="section-label mb-6 animate-fade-in">
              ◆ Mumbai&apos;s Premier Fabrication Studio
            </p>
            <h1 className="hero-title mb-6" style={{ color: '#F5F0E8' }}>
              Crafting{' '}
              <em className="text-gold-shimmer not-italic">Experiences</em>
              <br />
              That Define{' '}
              <span style={{ color: '#C9A84C' }}>Brands</span>
            </h1>
            <p
              className="text-lg lg:text-xl mb-10 max-w-2xl leading-relaxed"
              style={{ color: '#A0A0A0', fontFamily: 'var(--font-body)' }}
            >
              From exhibition stalls that stop visitors in their tracks to interiors that tell your
              story — Bhoomi Fabricator delivers precision-crafted environments across Mumbai and beyond.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-16">
              <Link href="/portfolio" className="btn-gold">
                <span>View Our Work</span>
                <ArrowRight size={16} />
              </Link>
              <Link href="/contact" className="btn-outline">
                <span>Get Free Quote</span>
              </Link>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-6">
              {['ISO Certified Quality', 'On-Time Delivery', '500+ Projects Done'].map((t) => (
                <div key={t} className="flex items-center gap-2">
                  <CheckCircle2 size={14} style={{ color: '#C9A84C' }} />
                  <span className="text-sm" style={{ color: '#6A6A6A', fontFamily: 'var(--font-body)' }}>
                    {t}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce"
          style={{ color: '#C9A84C', opacity: 0.6 }}
        >
          <div
            className="w-px h-12"
            style={{ background: 'linear-gradient(to bottom, transparent, #C9A84C)' }}
          />
        </div>
      </section>

      {/* ─── STATS ─── */}
      <section style={{ background: '#1A1A1A', borderTop: '1px solid rgba(201,168,76,0.15)', borderBottom: '1px solid rgba(201,168,76,0.15)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((s, i) => (
              <div
                key={s.label}
                className={`text-center reveal delay-${(i + 1) * 100}`}
              >
                <div className="stat-number">{s.number}</div>
                <p
                  className="text-sm mt-2"
                  style={{ color: '#6A6A6A', fontFamily: 'var(--font-body)', letterSpacing: '0.05em' }}
                >
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SERVICES ─── */}
      <section className="py-24 px-6 lg:px-12" style={{ background: '#111' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 reveal">
            <p className="section-label mb-4">What We Do</p>
            <h2 className="section-title mb-4" style={{ color: '#F5F0E8' }}>
              Comprehensive <span className="text-gold-shimmer">Fabrication</span> Services
            </h2>
            <div className="gold-line mx-auto mt-6" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <div
                key={s.title}
                className={`card-hover reveal delay-${((i % 3) + 1) * 100} p-8 relative group cursor-pointer`}
                style={{
                  background: '#1A1A1A',
                  border: '1px solid rgba(255,255,255,0.05)',
                  transition: 'all 0.4s ease',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.borderColor = 'rgba(201,168,76,0.3)'
                  ;(e.currentTarget as HTMLElement).style.background = '#1E1E1E'
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.05)'
                  ;(e.currentTarget as HTMLElement).style.background = '#1A1A1A'
                }}
              >
                <div
                  className="w-12 h-12 flex items-center justify-center mb-5 text-2xl"
                  style={{ background: 'rgba(201,168,76,0.1)', border: '1px solid rgba(201,168,76,0.2)' }}
                >
                  {s.icon}
                </div>
                <h3
                  className="text-lg font-semibold mb-3"
                  style={{ color: '#F5F0E8', fontFamily: 'var(--font-display)' }}
                >
                  {s.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: '#6A6A6A', fontFamily: 'var(--font-body)' }}>
                  {s.desc}
                </p>
                <div
                  className="mt-5 flex items-center gap-1 text-xs font-semibold tracking-wider uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ color: '#C9A84C' }}
                >
                  Learn More <ChevronRight size={12} />
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12 reveal">
            <Link href="/services" className="btn-outline">
              <span>Explore All Services</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── ABOUT STRIP ─── */}
      <section className="py-24 px-6 lg:px-12 relative overflow-hidden" style={{ background: '#1A1A1A' }}>
        <div
          className="absolute right-0 top-0 w-96 h-full opacity-10"
          style={{
            background: 'radial-gradient(ellipse at right, #C9A84C, transparent 70%)',
          }}
        />
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="reveal-left">
            <p className="section-label mb-4">Who We Are</p>
            <h2 className="section-title mb-6" style={{ color: '#F5F0E8' }}>
              Innovation Meets <span className="text-gold-shimmer">Craftsmanship</span>
            </h2>
            <p className="leading-relaxed mb-6" style={{ color: '#8A8A8A', fontFamily: 'var(--font-body)' }}>
              Bhoomi Fabrication is a trusted name in creative fabrication and turnkey project execution,
              delivering high-quality solutions across exhibition design, 3D visualization, interior design,
              construction, and custom carpentry.
            </p>
            <p className="leading-relaxed mb-8" style={{ color: '#8A8A8A', fontFamily: 'var(--font-body)' }}>
              With a strong focus on innovation, precision, and craftsmanship, we transform ideas into
              impactful physical experiences that reflect our clients' vision and brand identity.
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              {['Expert Team', 'Premium Materials', 'On-Time Delivery', 'Post-Project Support'].map((t) => (
                <div key={t} className="flex items-center gap-2">
                  <CheckCircle2 size={14} style={{ color: '#C9A84C' }} />
                  <span className="text-sm" style={{ color: '#A0A0A0', fontFamily: 'var(--font-body)' }}>
                    {t}
                  </span>
                </div>
              ))}
            </div>
            <Link href="/about" className="btn-gold">
              <span>About Bhoomi Fabricator</span>
              <ArrowRight size={16} />
            </Link>
          </div>
          <div className="reveal-right grid grid-cols-2 gap-4">
            <div className="img-overlay aspect-[3/4] rounded-sm overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&q=80"
                alt="Fabrication workshop"
                width={600}
                height={800}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid gap-4">
              <div className="img-overlay aspect-square rounded-sm overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&q=80"
                  alt="Team at work"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
              <div
                className="p-6 flex flex-col justify-center"
                style={{ background: 'linear-gradient(135deg, #C9A84C, #9B7A2C)' }}
              >
                <div
                  className="text-4xl font-black mb-1"
                  style={{ fontFamily: 'var(--font-display)', color: '#1A1A1A' }}
                >
                  12+
                </div>
                <div className="text-sm font-semibold" style={{ color: '#1A1A1A', fontFamily: 'var(--font-body)' }}>
                  Years of Excellence
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── PORTFOLIO PREVIEW ─── */}
      <section className="py-24 px-6 lg:px-12" style={{ background: '#111' }}>
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-16 gap-6">
            <div className="reveal">
              <p className="section-label mb-4">Our Portfolio</p>
              <h2 className="section-title" style={{ color: '#F5F0E8' }}>
                Projects That <span className="text-gold-shimmer">Speak</span>
              </h2>
            </div>
            <Link href="/portfolio" className="btn-outline reveal">
              <span>View All Projects</span>
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {portfolio.map((p, i) => (
              <div
                key={p.title}
                className={`img-overlay group cursor-pointer reveal delay-${((i % 3) + 1) * 100} ${
                  i === 0 ? 'md:row-span-2' : ''
                }`}
                style={{ aspectRatio: i === 0 ? '4/5' : '4/3' }}
              >
                <Image
                  src={p.img}
                  alt={p.title}
                  width={800}
                  height={i === 0 ? 1000 : 600}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 z-10 flex flex-col justify-end p-6">
                  <span
                    className="text-xs tracking-widest uppercase mb-2 opacity-0 group-hover:opacity-100 transition-all duration-300"
                    style={{ color: '#C9A84C', fontFamily: 'var(--font-mono)' }}
                  >
                    {p.category}
                  </span>
                  <h3
                    className="text-lg font-semibold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
                    style={{ color: '#F5F0E8', fontFamily: 'var(--font-display)' }}
                  >
                    {p.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIALS ─── */}
      <section className="py-24 px-6 lg:px-12" style={{ background: '#1A1A1A' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 reveal">
            <p className="section-label mb-4">Client Words</p>
            <h2 className="section-title" style={{ color: '#F5F0E8' }}>
              What Our <span className="text-gold-shimmer">Clients</span> Say
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div
                key={t.name}
                className={`reveal delay-${(i + 1) * 100} p-8`}
                style={{
                  background: '#111',
                  border: '1px solid rgba(255,255,255,0.06)',
                }}
              >
                <div className="flex gap-1 mb-5">
                  {[...Array(t.stars)].map((_, si) => (
                    <Star key={si} size={14} fill="#C9A84C" style={{ color: '#C9A84C' }} />
                  ))}
                </div>
                <p
                  className="text-sm leading-relaxed mb-6 italic"
                  style={{ color: '#8A8A8A', fontFamily: 'var(--font-body)' }}
                >
                  &ldquo;{t.text}&rdquo;
                </p>
                <div>
                  <p className="font-semibold text-sm" style={{ color: '#F5F0E8', fontFamily: 'var(--font-body)' }}>
                    {t.name}
                  </p>
                  <p className="text-xs mt-1" style={{ color: '#C9A84C', fontFamily: 'var(--font-mono)' }}>
                    {t.company}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PROCESS ─── */}
      <section className="py-24 px-6 lg:px-12" style={{ background: '#111' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 reveal">
            <p className="section-label mb-4">How We Work</p>
            <h2 className="section-title" style={{ color: '#F5F0E8' }}>
              Our <span className="text-gold-shimmer">Process</span>
            </h2>
          </div>

          <div className="relative">
            {/* connector line */}
            <div
              className="hidden lg:block absolute top-8 left-0 right-0 h-px"
              style={{ background: 'linear-gradient(to right, transparent, rgba(201,168,76,0.3), transparent)', top: '2rem' }}
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { step: '01', title: 'Consultation', desc: 'We understand your requirements, budget, and vision.' },
                { step: '02', title: '3D Design', desc: 'Our designers craft detailed 3D renders for your approval.' },
                { step: '03', title: 'Fabrication', desc: 'Skilled craftsmen bring the design to life with precision.' },
                { step: '04', title: 'Installation', desc: 'We deliver and install everything — on time, every time.' },
              ].map((p, i) => (
                <div key={p.step} className={`text-center reveal delay-${(i + 1) * 100} relative`}>
                  <div
                    className="w-16 h-16 flex items-center justify-center mx-auto mb-5 relative z-10"
                    style={{
                      background: '#111',
                      border: '2px solid rgba(201,168,76,0.4)',
                    }}
                  >
                    <span
                      style={{ fontFamily: 'var(--font-mono)', color: '#C9A84C', fontSize: '1.1rem', fontWeight: 700 }}
                    >
                      {p.step}
                    </span>
                  </div>
                  <h3
                    className="text-lg font-semibold mb-3"
                    style={{ color: '#F5F0E8', fontFamily: 'var(--font-display)' }}
                  >
                    {p.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: '#6A6A6A', fontFamily: 'var(--font-body)' }}>
                    {p.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
