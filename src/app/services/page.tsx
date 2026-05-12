'use client'
import { useReveal } from '@/components/useReveal'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, CheckCircle2 } from 'lucide-react'

const services = [
  {
    id: 'exhibition',
    title: 'Exhibition Stall Design',
    tagline: 'Make Your Brand Unmissable',
    img: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80',
    desc: 'We design and execute exhibition stalls that stop visitors in their tracks. Every stall is a unique branded environment crafted to maximize engagement, traffic, and conversions at trade shows, expos, and events.',
    features: [
      'Custom stall design from 9 sqm to 500+ sqm',
      'Modular & portable stall systems',
      'Branded graphic wrapping & signage',
      'Integrated lighting & AV systems',
      'Furniture, flooring & display solutions',
      'On-site installation & dismantling',
    ],
  },
  {
    id: 'visualization',
    title: '3D Visualization',
    tagline: 'See It Before You Build It',
    img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
    desc: 'Our advanced 3D visualization services give you photorealistic renders of your project before a single piece is fabricated. Walk through your stall, experience your interior — all before breaking ground.',
    features: [
      'Photorealistic 3D renders',
      'Virtual walkthroughs',
      'Multiple angle views',
      'Day/night lighting simulations',
      'Material & finish previews',
      'Quick revision turnaround',
    ],
  },
  {
    id: 'interior',
    title: 'Interior Design',
    tagline: 'Spaces That Tell Stories',
    img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80',
    desc: 'From corporate offices to retail showrooms, our interior design team creates environments that are functional, aesthetic, and brand-consistent. We handle everything from space planning to final styling.',
    features: [
      'Space planning & layout',
      'Concept development & moodboards',
      'Material & finish selection',
      'Furniture design & sourcing',
      'Lighting design',
      'Project coordination & supervision',
    ],
  },
  {
    id: 'construction',
    title: 'Construction Services',
    tagline: 'Built to Last, Built On Time',
    img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80',
    desc: 'Our construction division handles commercial and retail fit-outs with precision project management. From structural work to finishing touches, we deliver quality construction that stands the test of time.',
    features: [
      'Commercial & retail fit-outs',
      'Structural modifications',
      'False ceiling & partition systems',
      'Flooring (tiles, wood, vinyl)',
      'Electrical & plumbing coordination',
      'Project management & quality control',
    ],
  },
  {
    id: 'carpentry',
    title: 'Custom Carpentry',
    tagline: 'Crafted With Precision',
    img: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80',
    desc: 'Bespoke furniture and woodwork crafted by skilled artisans to your exact specifications. From reception counters to display units, each piece is a work of functional art.',
    features: [
      'Custom furniture design & fabrication',
      'Display racks & shelving systems',
      'Reception & front desks',
      'Cabinets & storage solutions',
      'Decorative wall panelling',
      'Premium wood & laminate finishes',
    ],
  },
  {
    id: 'turnkey',
    title: 'Turnkey Projects',
    tagline: 'One Call. Complete Solution.',
    img: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80',
    desc: 'Hand us your brief and walk into a completed project. Our turnkey service covers every aspect of your project — design, fabrication, construction, and installation — under one roof with single-point accountability.',
    features: [
      'Single-point project ownership',
      'Design to delivery management',
      'Vendor & contractor coordination',
      'Budget & timeline management',
      'Quality assurance at every stage',
      'Post-handover support',
    ],
  },
]

export default function Services() {
  useReveal()

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
          <p className="section-label mb-4">What We Offer</p>
          <h1 className="hero-title mb-6" style={{ color: '#F5F0E8', fontSize: 'clamp(2.5rem,6vw,5.5rem)' }}>
            Our <span className="text-gold-shimmer">Services</span>
          </h1>
          <div className="gold-line mx-auto mb-6" />
          <p
            className="text-lg max-w-2xl mx-auto leading-relaxed"
            style={{ color: '#8A8A8A', fontFamily: 'var(--font-body)' }}
          >
            Comprehensive fabrication and design solutions — all under one roof, all executed with excellence.
          </p>
        </div>
      </section>

      {/* Services List */}
      {services.map((service, i) => (
        <section
          key={service.id}
          id={service.id}
          className="py-24 px-6 lg:px-12"
          style={{ background: i % 2 === 0 ? '#111' : '#1A1A1A' }}
        >
          <div className="max-w-7xl mx-auto">
            <div className={`grid lg:grid-cols-2 gap-16 items-center ${i % 2 !== 0 ? 'lg:grid-flow-dense' : ''}`}>
              {/* Text */}
              <div className={i % 2 !== 0 ? 'reveal-right lg:col-start-2' : 'reveal-left'}>
                <p className="section-label mb-3">{String(i + 1).padStart(2, '0')} / Service</p>
                <h2 className="section-title mb-2" style={{ color: '#F5F0E8' }}>
                  {service.title}
                </h2>
                <p
                  className="text-lg mb-6 italic"
                  style={{ color: '#C9A84C', fontFamily: 'var(--font-display)' }}
                >
                  {service.tagline}
                </p>
                <div className="gold-line mb-6" />
                <p className="leading-relaxed mb-8" style={{ color: '#8A8A8A', fontFamily: 'var(--font-body)' }}>
                  {service.desc}
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                  {service.features.map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <CheckCircle2 size={14} className="shrink-0 mt-0.5" style={{ color: '#C9A84C' }} />
                      <span className="text-sm" style={{ color: '#A0A0A0', fontFamily: 'var(--font-body)' }}>
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className="btn-gold">
                  <span>Get a Quote</span>
                  <ArrowRight size={16} />
                </Link>
              </div>

              {/* Image */}
              <div className={i % 2 !== 0 ? 'reveal-left lg:col-start-1' : 'reveal-right'}>
                <div className="img-overlay aspect-[4/3] overflow-hidden">
                  <Image
                    src={service.img}
                    alt={service.title}
                    width={800}
                    height={600}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section
        className="py-24 px-6 lg:px-12 text-center relative overflow-hidden grain-overlay"
        style={{ background: '#1A1A1A' }}
      >
        <div
          className="absolute inset-0 opacity-20"
          style={{ background: 'radial-gradient(ellipse at center, rgba(201,168,76,0.3), transparent 70%)' }}
        />
        <div className="max-w-2xl mx-auto relative z-10 reveal">
          <h2 className="section-title mb-6" style={{ color: '#F5F0E8' }}>
            Not Sure Which Service You Need?
          </h2>
          <p className="mb-8" style={{ color: '#8A8A8A', fontFamily: 'var(--font-body)' }}>
            Talk to our team and we'll recommend the right solution for your project and budget.
          </p>
          <Link href="/contact" className="btn-gold">
            <span>Schedule Free Consultation</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  )
}
