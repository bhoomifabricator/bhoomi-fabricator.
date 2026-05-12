'use client'
import { useReveal } from '@/components/useReveal'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Award, Users, Wrench, Clock } from 'lucide-react'

const values = [
  {
    icon: Award,
    title: 'Excellence',
    desc: 'We never compromise on quality. Every project receives the same attention to detail, whether it\'s a 10 sqft stall or a 1000 sqft exhibition pavilion.',
  },
  {
    icon: Users,
    title: 'Collaboration',
    desc: 'Your vision is our blueprint. We work closely with clients at every stage, ensuring complete transparency and satisfaction.',
  },
  {
    icon: Wrench,
    title: 'Craftsmanship',
    desc: 'Skilled artisans with years of experience bring designs to life using premium materials and proven techniques.',
  },
  {
    icon: Clock,
    title: 'Reliability',
    desc: 'Deadlines are sacred to us. We plan meticulously and execute efficiently so you\'re always ready on time.',
  },
]

const team = [
  {
    name: 'Sanjay Vishwakarma',
    role: 'Founder & Creative Director',
    img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
    desc: 'With over 12 years of experience in fabrication and exhibition design, Sanjay leads every project with passion and precision.',
  },
]

export default function About() {
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
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="max-w-3xl">
            <p className="section-label mb-4">Our Story</p>
            <h1 className="hero-title mb-6" style={{ color: '#F5F0E8', fontSize: 'clamp(2.5rem,6vw,5.5rem)' }}>
              About <span className="text-gold-shimmer">Bhoomi</span>
              <br />Fabricator
            </h1>
            <div className="gold-line mb-6" />
            <p className="text-lg leading-relaxed" style={{ color: '#8A8A8A', fontFamily: 'var(--font-body)' }}>
              Born out of a passion for craftsmanship and a commitment to transforming spaces,
              Bhoomi Fabricator has grown into Mumbai's trusted partner for exhibition design and fabrication.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 px-6 lg:px-12" style={{ background: '#1A1A1A' }}>
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="reveal-left">
            <p className="section-label mb-4">Who We Are</p>
            <h2 className="section-title mb-6" style={{ color: '#F5F0E8' }}>
              Trusted Fabrication <span className="text-gold-shimmer">Specialists</span>
            </h2>
            <p className="leading-relaxed mb-5" style={{ color: '#8A8A8A', fontFamily: 'var(--font-body)' }}>
              Bhoomi Fabrication is a trusted name in creative fabrication and turnkey project execution,
              delivering high-quality solutions across exhibition design, 3D visualization, interior design,
              construction, and custom carpentry services.
            </p>
            <p className="leading-relaxed mb-5" style={{ color: '#8A8A8A', fontFamily: 'var(--font-body)' }}>
              With a strong focus on innovation, precision, and craftsmanship, we transform ideas into
              impactful physical experiences that reflect our clients' vision and brand identity.
            </p>
            <p className="leading-relaxed mb-8" style={{ color: '#8A8A8A', fontFamily: 'var(--font-body)' }}>
              We specialize in designing and executing exhibition stalls that stand out — combining aesthetic
              appeal with functional excellence. Our expertise in 3D design allows clients to visualize
              their projects before execution, ensuring clarity and confidence at every stage.
            </p>
            <Link href="/contact" className="btn-gold">
              <span>Work With Us</span>
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="reveal-right">
            <div className="relative">
              <div className="img-overlay aspect-[4/3] overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&q=80"
                  alt="Bhoomi Fabricator workshop"
                  width={800}
                  height={600}
                  className="w-full h-full object-cover"
                />
              </div>
              <div
                className="absolute -bottom-6 -left-6 p-6"
                style={{
                  background: 'linear-gradient(135deg, #C9A84C, #9B7A2C)',
                  width: 160,
                }}
              >
                <div
                  className="text-3xl font-black"
                  style={{ fontFamily: 'var(--font-display)', color: '#1A1A1A' }}
                >
                  2012
                </div>
                <div className="text-xs font-semibold" style={{ color: '#1A1A1A' }}>
                  Established
                </div>
              </div>
              <div
                className="absolute -top-4 -right-4 p-4 text-center"
                style={{ background: '#111', border: '1px solid rgba(201,168,76,0.3)', width: 120 }}
              >
                <div className="stat-number" style={{ fontSize: '2rem' }}>500+</div>
                <div className="text-xs" style={{ color: '#6A6A6A' }}>Projects</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 px-6 lg:px-12" style={{ background: '#111' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 reveal">
            <p className="section-label mb-4">Our Principles</p>
            <h2 className="section-title" style={{ color: '#F5F0E8' }}>
              What We <span className="text-gold-shimmer">Stand For</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <div
                key={v.title}
                className={`p-8 card-hover reveal delay-${(i + 1) * 100}`}
                style={{ background: '#1A1A1A', border: '1px solid rgba(255,255,255,0.05)' }}
              >
                <div
                  className="w-12 h-12 flex items-center justify-center mb-5"
                  style={{ background: 'rgba(201,168,76,0.1)', border: '1px solid rgba(201,168,76,0.2)' }}
                >
                  <v.icon size={20} style={{ color: '#C9A84C' }} />
                </div>
                <h3
                  className="text-lg font-semibold mb-3"
                  style={{ color: '#F5F0E8', fontFamily: 'var(--font-display)' }}
                >
                  {v.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: '#6A6A6A', fontFamily: 'var(--font-body)' }}>
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 px-6 lg:px-12" style={{ background: '#1A1A1A' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 reveal">
            <p className="section-label mb-4">Leadership</p>
            <h2 className="section-title" style={{ color: '#F5F0E8' }}>
              Meet the <span className="text-gold-shimmer">Mind</span> Behind It
            </h2>
          </div>
          <div className="max-w-md mx-auto">
            {team.map((m) => (
              <div key={m.name} className="reveal text-center">
                <div
                  className="w-40 h-40 mx-auto mb-6 overflow-hidden"
                  style={{ border: '2px solid rgba(201,168,76,0.4)' }}
                >
                  <Image
                    src={m.img}
                    alt={m.name}
                    width={160}
                    height={160}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3
                  className="text-2xl font-bold mb-1"
                  style={{ color: '#F5F0E8', fontFamily: 'var(--font-display)' }}
                >
                  {m.name}
                </h3>
                <p
                  className="text-sm mb-4"
                  style={{ color: '#C9A84C', fontFamily: 'var(--font-mono)', letterSpacing: '0.1em' }}
                >
                  {m.role}
                </p>
                <p className="leading-relaxed" style={{ color: '#8A8A8A', fontFamily: 'var(--font-body)' }}>
                  {m.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-24 px-6 lg:px-12 text-center relative overflow-hidden grain-overlay"
        style={{ background: '#111' }}
      >
        <div
          className="absolute inset-0 opacity-20"
          style={{ background: 'radial-gradient(ellipse at center, rgba(201,168,76,0.3), transparent 70%)' }}
        />
        <div className="max-w-2xl mx-auto relative z-10 reveal">
          <h2 className="section-title mb-6" style={{ color: '#F5F0E8' }}>
            Ready to Start Your <span className="text-gold-shimmer">Project?</span>
          </h2>
          <p className="mb-8" style={{ color: '#8A8A8A', fontFamily: 'var(--font-body)' }}>
            Contact us today for a free consultation and discover how Bhoomi Fabricator can bring your vision to life.
          </p>
          <Link href="/contact" className="btn-gold">
            <span>Get Free Consultation</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  )
}
